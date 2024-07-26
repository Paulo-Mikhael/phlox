import { IMainCard } from "../../interfaces";
import { twPBoldSubtitleStyles, twPSubtitleStyles } from "../../util";
import Button from "../Button";
import Picture from "../Picture";
import {
  twCardContainerStyles,
  twCardContentStyles,
  twCardImageStyles,
  twCardMainPStyles
} from "./styles";

export default function MainCard({
  cardBackground, imageSrc, imageAlt, imageTitle, subtitleP, boldSubtitleP, mainP, subtitlePColor,
  boldSubtitlePColor, mainPColor, whiteButton = false, bigCard, whiteButtonTextColor, customImageStyles, customImageWidth
}: IMainCard) {
  const subtitleColor = subtitlePColor ? subtitlePColor : "text-white";
  const boldSubtitleColor = boldSubtitlePColor ? boldSubtitlePColor : "text-white";

  return (
    <div 
      className={`${twCardContainerStyles} ${cardBackground} ${bigCard === true ? "w-big-card" : "w-80"}`}
    >
      <Picture
        className={`
          ${twCardImageStyles} 
          ${bigCard === true ? "right-5 top-0" : "right-0 bottom-0"} 
          ${customImageStyles}
        `}
        width={customImageWidth ? customImageWidth : "w-52"}
        src={imageSrc}
        alt={imageAlt ? imageAlt : undefined}
        title={imageTitle ? imageTitle : undefined}
      />
      <div className={twCardContentStyles}>
        <p className="xl:hidden flex gap-2 text-[20px] font-bold z-10">
          <span className={subtitleColor}>{subtitleP}</span> 
          <span className={boldSubtitleColor}>{boldSubtitleP}</span> 
          <span className={mainPColor}>{mainP}</span>
        </p>
        <div className="z-10 max-xl:hidden">
          <p className={`${twPSubtitleStyles} ${subtitleColor}`}>
            {subtitleP}
          </p>
          <p className={`${twPBoldSubtitleStyles} ${boldSubtitleColor}`}>
            {boldSubtitleP}
          </p>
          <p className={`${twCardMainPStyles} ${mainPColor}`}>
            {mainP}
          </p>
        </div>
        <Button
          width="w-24"
          padding="p-2 max-mobile:px-[0px]"
          color={`${whiteButton === true ? whiteButtonTextColor : "text-white"}`}
          className=
          {`z-10 ${whiteButton === true ? `bg-white hover:bg-slate-200` : ""} max-[450px]:hidden`}
        >
          See More
        </Button>
      </div>
    </div>
  );
}