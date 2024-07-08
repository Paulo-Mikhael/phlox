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
        <p className={`${twPSubtitleStyles} absolute top-[10pc] z-10 max-mobile:text-center max-mobile:w-full max-mobile:static`}>
          Beats Solo
        </p>
        <p className={`${twPBoldSubtitleStyles} absolute top-[11pc] z-10 max-mobile:text-center max-mobile:w-full max-mobile:static`}>
          Wireless
        </p>
        <p className={`${twMainHomeTextStyles} top-[11pc] max-xl:top-[14pc] max-sm:top-[14pc] left-[5pc] max-sm:left-[1pc] max-mobile:text-center max-mobile:w-full max-mobile:static`}>
          HEADPHONES
        </p>
        <Picture
          src="images/headphone-draw.png"
          title="Headphone"
          alt="Desenho de um headphone"
          width="w-80"
          className="absolute right-56 z-0 top-[4pc] max-lg:right-5 max-mobile:w-60 animate-pulse"
        />
        <div className="mb-10 max-mobile:w-full max-mobile:justify-center max-mobile:flex max-mobile:m-0 max-mobile:mt-10">
          <Button width="w-48">
            Shop By Category
          </Button>
        </div>
      </article>
    </div>
  );
}