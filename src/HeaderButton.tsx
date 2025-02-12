interface HeaderButtonProps {
  text: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ text }) => {
  return (
    <button className="text-s items-end text-gray-700">
      {text}
    </button>
  );
};

export default HeaderButton;
