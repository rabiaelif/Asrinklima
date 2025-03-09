interface HeaderButtonProps {
  text: string;
  isScrolled: boolean;
  href: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ text, isScrolled, href }) => {
  return (
    <a
      href={href}
    >
      <span
        className={`font-medium transition-colors bg-transparent  border-hidden text-base hover:text-yellow ${isScrolled ? "text-white" : "text-white"
          }`}>

        {text}
      </span>
    </a>
  );
};

export default HeaderButton;
