import { twPBoldSubtitleStyles, twPSubtitleStyles } from "../../util";
import Button from "../Button";
import Picture from "../Picture";
import { 
  twCardContainerStyles, 
  twCardContentStyles, 
  twCardImageStyles, 
  twCardMainPStyles 
} from "./styles";

interface Props{
  cardBackground: string,
  imageSrc: string,
  imageAlt?: string,
  imageTitle?: string,
  subtitleP: string,
  subtitlePColor?: string,
  boldSubtitleP: string,
  boldSubtitlePColor?: string,
  mainP: string,
  mainPColor: string,
  whiteButton?: boolean,
  bigCard?: boolean
}

export default function Card({ 
  cardBackground, imageSrc, imageAlt, imageTitle, subtitleP, boldSubtitleP, mainP, subtitlePColor, 
  boldSubtitlePColor, mainPColor, whiteButton = false
}: Props){
  return (
    <div className={`${twCardContainerStyles} bg-${cardBackground}`}>
      <Picture 
        className={twCardImageStyles} 
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
        <p className={`${twCardMainPStyles} text-${mainPColor}`}>
          {mainP}
        </p>
        <Button 
          width="w-24" 
          padding="p-2" 
          className=
            {`z-10 ${whiteButton === true ? `bg-white text-${cardBackground} hover:bg-slate-200` : ""}`}
        >
          See More
        </Button>
      </div>
    </div>
  );
}