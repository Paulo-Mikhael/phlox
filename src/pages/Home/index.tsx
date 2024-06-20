import Card from "../../components/Card";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <section className="p-8">
      <Header />
      <Hero />
      <Card 
        cardBackground="earphone-background" 
        imageSrc="images/earphone-draw.png"
        subtitleP="Enjoy"
        boldSubtitleP="With"
        mainP="EARPHONE"
        mainPColor="earphone-text"
      />
      <Card 
        cardBackground="gadgets-background" 
        imageSrc="images/smartwatch-draw.png"
        subtitleP="Best"
        boldSubtitleP="Wear"
        mainP="GADGETS"
        mainPColor="gadgets-text"
        whiteButton={true}
      />
      <Card 
        cardBackground="oculus-background" 
        imageSrc="images/person-oculus-draw.png"
        subtitleP="Play"
        boldSubtitleP="Game"
        mainP="OCULUS"
        mainPColor="oculus-text"
        whiteButton={true}
      />
    </section>
  );
}