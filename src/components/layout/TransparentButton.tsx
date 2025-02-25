interface HeaderButtonProps {
    text: string;

}


const TrsButton: React.FC<HeaderButtonProps> = ({ text, }) => {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/15 transition-colors">

            <span className="text-sm font-medium text-center">{text}</span>

        </div>
    )
}
export default TrsButton;