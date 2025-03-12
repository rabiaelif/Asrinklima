import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo text-3xl flex gap-3 font-bold">
      <Link href="/" passHref>
        <div>
          <span className="text-red">ASRIN</span>
          <span className="text-white">KLİMA</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
