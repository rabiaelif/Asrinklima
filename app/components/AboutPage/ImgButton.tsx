
interface ImgButtonProps {
    text: string;
  }


const ImgButton : React.FC<ImgButtonProps> = ({ text }) => {
    return (
        <div className="lg:px-8 py-3 px-6 bg-blue border-3 border-[#EBEBED] rounded-lg z-10 flex items-center">
              <span
                className="text-whiteB font-regular lg:text-sm text-xs">

                {text}
              </span>
        </div>
    )
}
export default ImgButton ;