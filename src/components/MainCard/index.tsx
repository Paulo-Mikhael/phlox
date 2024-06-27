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
}: IMainCard){
  return (
    <div className={`${twCardContainerStyles} ${cardBackground} ${bigCard === true ? "w-big-card" : "w-80"}`}>
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
        <p className={`${twPSubtitleStyles} ${subtitlePColor ? subtitlePColor : "text-white"}`}>
          {subtitleP}
        </p>
        <p className={`${twPBoldSubtitleStyles} ${boldSubtitlePColor ? boldSubtitlePColor : "text-white"}`}>
          {boldSubtitleP}
        </p>
        <p className={`${twCardMainPStyles} ${mainPColor}`}>
          {mainP}
        </p>
        <Button 
          width="w-24" 
          padding="p-2" 
          color={`${whiteButton === true ? whiteButtonTextColor : "text-white"}`}
          className=
            {`z-10 ${whiteButton === true ? `bg-white hover:bg-slate-200` : ""}`}
        >
          See More
        </Button>
      </div>
    </div>
  );
}