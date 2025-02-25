
interface ImgButtonProps {
    text: string;
  }


const ImgButton : React.FC<ImgButtonProps> = ({ text }) => {
    return (
        <div className="px-8 py-3 bg-blue border-3 border-[#EBEBED] backdrop-blur-[40px] rounded-lg z-10 flex items-center"> 
              <span
                className="text-white font-regular text-sm">

                {text}
              </span>
        </div>
    )
}
export default ImgButton ;