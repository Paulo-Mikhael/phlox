import Button from "../Button";
import Picture from "../Picture";
import { 
  twHomeContainerStyles, 
  twMainHomeContentStyles, 
  twMainHomeTextStyles, 
} from "./styles";
import { twPSubtitleStyles, twPBoldSubtitleStyles } from "../../util";

export default function Hero(){
  return (
    <div className={twHomeContainerStyles}>
    <article className={twMainHomeContentStyles}>
      <p className={`${twPSubtitleStyles} absolute top-[10pc] z-10`}>
        Beats Solo
      </p>
      <p className={`${twPBoldSubtitleStyles} absolute top-[11pc] z-10`}>
        Wireless
      </p>
      <p className={`${twMainHomeTextStyles} top-[11pc] left-[4.5pc]`}>
        HEADPHONES
      </p>
      <Picture
        src="images/headphone-draw.png"
        title="Headphone"
        alt="Desenho de um headphone"
        width="w-80"
        className="absolute right-56 z-0 top-[4pc]"
      />
      <div className="mb-10">
        <Button width="w-48">
          Shop By Category
        </Button>
      </div>
    </article>
  </div>
  );
}