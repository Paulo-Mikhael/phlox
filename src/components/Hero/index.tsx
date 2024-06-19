import Button from "../Button";
import Picture from "../Picture";
import { 
  twHomeContainerStyles, 
  twMainHomeContentStyles, 
  twMainHomeTextStyles, 
  twPBoldSubtitleStyles, 
  twPSubtitleStyles
} from "./styles";

export default function Hero(){
  return (
    <div className={twHomeContainerStyles}>
    <article className={twMainHomeContentStyles}>
      <p className={twPSubtitleStyles}>
        Beats Solo
      </p>
      <p className={twPBoldSubtitleStyles}>
        Wireless
      </p>
      <p className={twMainHomeTextStyles}>
        HEADPHONES
      </p>
      <Picture
        src="images/headphone-draw.png"
        title="Headphone"
        alt="Desenho de um headphone"
        className="w-80 absolute right-60 z-0 top-40"
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