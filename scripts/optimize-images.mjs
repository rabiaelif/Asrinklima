#!/usr/bin/env node
import { readdir, stat, unlink, rename } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const MAX_WIDTH = 1920;
const QUALITY = 70;
const WARN_BYTES = 500 * 1024;

function formatKB(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function main() {
  const entries = await readdir(IMAGES_DIR, { withFileTypes: true });
  const imageFiles = entries
    .filter((e) => e.isFile() && /\.(jpe?g|png|webp)$/i.test(e.name))
    .sort((a, b) => a.name.localeCompare(b.name));

  const results = [];

  for (const entry of imageFiles) {
    const inputPath = path.join(IMAGES_DIR, entry.name);
    const ext = path.extname(entry.name);
    const base = path.basename(entry.name, ext);
    const outputName = `${base}.webp`;
    const outputPath = path.join(IMAGES_DIR, outputName);
    const isSameFile = outputPath === inputPath;

    const { size: beforeSize } = await stat(inputPath);

    const pipeline = sharp(inputPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY });

    if (isSameFile) {
      const tempPath = path.join(IMAGES_DIR, `.${base}.tmp.webp`);
      await pipeline.toFile(tempPath);
      await unlink(inputPath);
      await rename(tempPath, outputPath);
    } else {
      await pipeline.toFile(outputPath);
      await unlink(inputPath);
    }

    const { size: afterSize } = await stat(outputPath);

    results.push({
      original: entry.name,
      output: outputName,
      renamed: !isSameFile,
      beforeSize,
      afterSize,
    });
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
    const renameNote = r.renamed ? `  (${r.original} -> ${r.output})` : "";
    console.log(
      `${r.output.padEnd(32)} ${formatKB(r.beforeSize).padStart(10)} -> ${formatKB(r.afterSize).padStart(10)}  (-${savings}%)${renameNote}`
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
      console.log(`  - ${r.output}: ${formatKB(r.afterSize)}`);
    }
  } else {
    console.log("\nTum dosyalar 500 KB altinda.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
