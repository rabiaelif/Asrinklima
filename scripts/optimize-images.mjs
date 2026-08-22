#!/usr/bin/env node
import { stat, unlink, rename, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "images");

// Root-level public images referenced directly by components (hero, about,
// before/after gallery). Listed explicitly since public/ also holds icons,
// favicons and other assets we must never touch.
const ROOT_IMAGE_FILES = [
  "image2.jpg",
  "image3.png",
  "oncesi1.jpg",
  "sonrasi1.jpg",
  "oncesi2.jpg",
  "sonrasi2.jpg",
];

const MAX_WIDTH = 1920;
const QUALITY = 70;
const WARN_BYTES = 500 * 1024;

function formatKB(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

// Converts a single jpg/png/jpeg file to webp in place (same directory),
// deleting the original. Returns null (and does nothing) if the input file
// no longer exists, which makes repeated runs (e.g. on every build) a safe
// no-op once a file has already been converted, instead of re-compressing
// an already-optimized webp file and losing quality on every build.
async function convertToWebp(dir, filename) {
  const inputPath = path.join(dir, filename);

  let beforeSize;
  try {
    ({ size: beforeSize } = await stat(inputPath));
  } catch {
    return null;
  }

  const ext = path.extname(filename);
  const base = path.basename(filename, ext);
  const outputName = `${base}.webp`;
  const outputPath = path.join(dir, outputName);

  const pipeline = sharp(inputPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY });

  await pipeline.toFile(outputPath);
  await unlink(inputPath);

  const { size: afterSize } = await stat(outputPath);

  return { original: filename, output: outputName, beforeSize, afterSize };
}

async function main() {
  const results = [];

  const entries = await readdir(IMAGES_DIR, { withFileTypes: true });
  const imageFiles = entries
    .filter((e) => e.isFile() && /\.(jpe?g|png)$/i.test(e.name))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b));

  for (const filename of imageFiles) {
    const result = await convertToWebp(IMAGES_DIR, filename);
    if (result) results.push({ ...result, dir: "public/images" });
  }

  for (const filename of ROOT_IMAGE_FILES) {
    const result = await convertToWebp(PUBLIC_DIR, filename);
    if (result) results.push({ ...result, dir: "public" });
  }

  if (results.length === 0) {
    console.log("Gorsel Optimizasyon: islenecek yeni jpg/png bulunamadi (hepsi zaten webp).");
    return;
  }

  console.log("\nGorsel Optimizasyon Raporu");
  console.log("=".repeat(70));

  let totalBefore = 0;
  let totalAfter = 0;
  const oversized = [];

  for (const r of results) {
    totalBefore += r.beforeSize;
    totalAfter += r.afterSize;
    const savings = (100 - (r.afterSize / r.beforeSize) * 100).toFixed(1);
    console.log(
      `${r.dir}/${r.output.padEnd(24)} ${formatKB(r.beforeSize).padStart(10)} -> ${formatKB(r.afterSize).padStart(10)}  (-${savings}%)  (${r.original} -> ${r.output})`
    );
    if (r.afterSize > WARN_BYTES) {
      oversized.push(r);
    }
  }

  console.log("=".repeat(70));
  const totalSavings = (100 - (totalAfter / totalBefore) * 100).toFixed(1);
  console.log(
    `TOPLAM: ${formatKB(totalBefore)} -> ${formatKB(totalAfter)} (-${totalSavings}%)`
  );

  if (oversized.length) {
    console.log("\n500 KB uzerinde kalan dosyalar:");
    for (const r of oversized) {
      console.log(`  - ${r.dir}/${r.output}: ${formatKB(r.afterSize)}`);
    }
  } else {
    console.log("\nTum dosyalar 500 KB altinda.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
