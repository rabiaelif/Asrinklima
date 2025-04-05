import React, { JSXElementConstructor } from "react";
import { IconType } from "react-icons";
import { FaInfoCircle, FaLightbulb, FaExclamationTriangle } from "react-icons/fa";

interface IssueCardProps {
  icon?: IconType | React.ReactNode;
  title: string;
  cause?: React.ReactNode;
  solution?: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
  iconColor?: string;
  headingLevel?: "h2" | "h3" | "h4";
  role?: string;
  ariaLabel?: string;
}

const IssueCard: React.FC<IssueCardProps> = ({
  icon,
  title,
  cause,
  solution,
  content,
  className = "",
  iconColor = "text-red-500",
  headingLevel = "h3",
  role = "article",
  ariaLabel,
}) => {
  const HeadingTag = headingLevel;

  const renderIcon = () => {
    if (!icon) return null;

    if (React.isValidElement(icon)) {
      if ((icon as React.ReactElement<{ alt?: string }>).type === 'img') {
        const imgElement = icon as React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>;
        return React.cloneElement(imgElement, {
          alt: imgElement.props.alt || `${title} icon`,
          className: `${imgElement.props.className || ''} flex-shrink-0`,
          'aria-hidden': 'true'
        });
      }
      return <div className="flex-shrink-0" aria-hidden="true">{icon}</div>;
    }

    if (typeof icon === "function") {
      return React.createElement(icon as IconType, {
        className: `${iconColor} text-xl flex-shrink-0`,
        'aria-hidden': 'true'
      });
    }

    return <div className="flex-shrink-0" aria-hidden="true">{icon}</div>;
  };
  return (
    <div
      role={role}
      aria-label={ariaLabel || `${title} hakkında bilgi kartı`}
      itemScope
      itemType="https://schema.org/Question"
      className={`rounded-lg shadow overflow-hidden cursor-default
 ${className}`}
    >
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-3">
          {renderIcon()}
          <HeadingTag itemProp="name" className="text-lg font-semibold text-black/90">
            {title}
          </HeadingTag>
        </div>

        <div className="space-y-4">
          {cause && (
            <div
              className="flex items-start gap-2"
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="suggestedAnswer"
            >
                <FaExclamationTriangle className="text-yellow-500 mt-1 flex-shrink-0 text-sm" aria-hidden="true" />
                <div className="flex max-lg:flex-wrap gap-0.5 lg:gap-1">
                  <h4 className="font-medium text-black mb-1 whitespace-nowrap">Olası Neden:</h4>
                  <div itemProp="text" className="text-black/90 min-w-0">
                    {typeof cause === 'string' ? <p>{cause}</p> : cause}
                  </div>
              </div>
            </div>
          )}

          {content && (
            <div className="flex flex-col items-start text-black/90">
              {typeof content === 'string' ? <p>{content}</p> : content}
            </div>
          )}

          {solution && (
            <div
              className="flex items-start"
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <FaLightbulb className="text-blue-400 mt-1 mr-2 flex-shrink-0 text-sm" aria-hidden="true" />
              <div className="flex max-lg:flex-wrap gap-0.5 lg:gap-1">
                <h4 className="font-medium text-black mb-1">Çözüm:</h4>
                <div itemProp="text" className="text-black/90">
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