interface HeaderButtonProps {
  text: string;
  isScrolled: boolean;
  href: string;  // Yeni parametre
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ text, isScrolled, href }) => {
  return (
    <a
      href={href}  // Linki burada belirtiyoruz
    >
      <span
        className={`font-medium transition-colors bg-transparent duration-300 border-hidden lg:text-lg text-base hover:text-yellow ${isScrolled ? "text-white" : "text-white"
          }`}>

        {text}
      </span>
    </a>
  );
};

export default HeaderButton;
