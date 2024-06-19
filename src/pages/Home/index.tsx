import Button from "../../components/Button";
import Header from "../../components/Header";
import { 
  twHomeContainerStyles, 
  twMainHomeContentStyles, 
  twMainHomeTextStyles, 
  twPBoldSubtitleStyles, 
  twPSubtitleStyles
} from "./styles";

export default function Home() {
  return (
    <section className="p-8">
      <Header />
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
          <img
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
    </section>
  );
}