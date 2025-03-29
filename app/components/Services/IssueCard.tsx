import React from "react";
import { IconType } from "react-icons";
import { FaInfoCircle, FaLightbulb, FaExclamationTriangle } from "react-icons/fa";

interface IssueCardProps {
  icon?: IconType;
  title: string;
  cause?: React.ReactNode;
  solution?: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
  iconColor?: string;
}

const IssueCard: React.FC<IssueCardProps> = ({
  icon: Icon,
  title,
  cause,
  solution,
  content,
  className = "",
  iconColor = "text-red-500"
}) => {
  return (
    <div className={` rounded-lg shadow overflow-hidden ${className}`}>
      <div className="p-5 space-y-3">
        {/* Başlık Alanı */}
        <div className="flex items-center gap-3">
          {Icon && <Icon className={`${iconColor} text-xl flex-shrink-0`} />}
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>

        {/* İçerik Alanı */}
        <div className="space-y-4">
          {cause && (
            <div className="flex items-start">
              <FaExclamationTriangle className="text-yellow-500 mt-1 mr-2 flex-shrink-0 text-sm" />
              <div className="flex gap-1">
                <h4 className="font-medium text-black mb-1">Olası Neden:</h4>
                <div className="text-black/90">
                  {typeof cause === 'string' ? <p>{cause}</p> : cause}
                </div>
              </div>
            </div>
          )}

        
          {content && (
            <div className="flex items-start">
              <div className="text-black/90">
                {typeof content === 'string' ? <p>{content}</p> : content}
              </div>
            </div>
          )}
            {solution && (
            <div className="flex items-start">
              <FaLightbulb className="text-blue-400 mt-1 mr-2 flex-shrink-0 text-sm" />
              <div className="flex gap-1">
                <h4 className="font-medium text-black mb-1">Çözüm:</h4>
                <div className="text-black/90">
                  {typeof solution === 'string' ? <p>{solution}</p> : solution}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default IssueCard;