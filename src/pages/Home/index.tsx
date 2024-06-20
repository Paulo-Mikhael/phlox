import Card from "../../components/Card";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { ICard } from "../../interfaces";

export default function Home() {
  const earphone: ICard = {
    cardBackground: "bg-earphone-background",
    imageSrc: "images/earphone-draw.png",
    subtitleP: "Enjoy",
    boldSubtitleP: "With",
    mainP: "EARPHONE",
    mainPColor: "text-earphone-text",
    imageTitle: "Acessórios tecnológicos",
    imageAlt: "Desenho de earphones"
  }
  const gadgets: ICard = {
    cardBackground: "bg-gadgets-background",
    imageSrc: "images/smartwatch-draw.png",
    subtitleP: "Best",
    boldSubtitleP: "Wear",
    mainP: "GADGETS",
    mainPColor: "text-gadgets-text",
    whiteButton: true,
    whiteButtonTextColor: "text-gadgets-background",
    imageTitle: "Gadgets",
    imageAlt: "Desenho de smartwatch"
  }
  const oculus: ICard = {
    cardBackground: "bg-oculus-background",
    imageSrc: "images/person-oculus-draw.png",
    subtitleP: "Play",
    boldSubtitleP: "Game",
    mainP: "OCULUS",
    mainPColor: "text-oculus-text",
    whiteButton: true,
    whiteButtonTextColor: "text-oculus-background",
    imageTitle: "Itens de realidade aumentada",
    imageAlt: "Desenho de uma pessoa usando um óculos de realidade virtual"
  }
  const amazon: ICard = {
    cardBackground: "bg-amazon-background",
    imageSrc: "images/amazon-speaker-draw.png",
    subtitleP: "New",
    boldSubtitleP: "Amazon",
    mainP: "SPEAKER",
    mainPColor: "text-amazon-text",
    whiteButton: true,
    whiteButtonTextColor: "text-amazon-background",
    customImageStyles: "h-56 w-28 right-5",
    imageTitle: "Produtos tech da Amazon",
    imageAlt: "Desenho de um Amazon Speaker, produto da Amazon"
  }
  const notebook: ICard = {
    cardBackground: "bg-notebook-background",
    imageSrc: "images/notebook-draw.png",
    subtitleP: "Trend",
    boldSubtitleP: "Devices",
    mainP: "LAPTOP",
    mainPColor: "text-notebook-text",
    whiteButton: true,
    bigCard: true,
    whiteButtonTextColor: "text-notebook-background",
    customImageStyles: "h-full w-60",
    imageTitle: "Aparelhos eletrônicos",
    imageAlt: "Desenho de dois notebooks"
  }
  const console: ICard = {
    cardBackground: "bg-console-background",
    imageSrc: "images/console-draw.png",
    subtitleP: "Best",
    subtitlePColor: "text-black",
    boldSubtitleP: "Gaming",
    boldSubtitlePColor: "text-black",
    mainP: "CONSOLES",
    mainPColor: "text-console-text",
    bigCard: true,
    customImageStyles: "top-20",
    imageTitle: "Consoles",
    imageAlt: "Desenho de um Playstation 4"
  }
  return (
    <section className="p-8">
      <Header />
      <Hero />
      <main className="mt-8 flex flex-wrap gap-8 justify-center">
        <Card {...earphone} />
        <Card {...gadgets} />
        <Card {...notebook} />
        <Card {...console} />
        <Card {...oculus} />
        <Card {...amazon} />
      </main>
    </section>
  );
}