import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  isMenuOpen: boolean;
};

const Logo: React.FC<LogoProps> = ({ isMenuOpen }) => {
  return (
    <div className="logo text-3xl flex gap-3 items-center font-bold">
      <Link href="/" passHref>
        <div className="flex items-center">
          <Image
            src="/logooo.svg"
            alt="Logo"
            width={50}
            height={50}
            style={{ height: 50, width: 50 }}
            className="mr-3 md:w-[50px] 2xl:w-[50px] h-auto"
          />

          <div className="flex flex-col">
            <div>
              <span className="text-red">ASRIN</span>
              <span
                className={`text-whiteB ${isMenuOpen ? "max-lg:text-black" : "text-whiteB"}`}
              >
                KLİMA
              </span>
            </div>

            <span className={`text-whiteB text-center text-xs ${isMenuOpen ? "max-lg:text-black " : "text-whiteB"}`}
            >SOĞUTMA VE İKLİMLENDİRME</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
