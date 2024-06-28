import BenefitsLine from "../../components/BenefitsLine";
import MainCard from "../../components/MainCard";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { IMainCard, ISectionCard } from "../../interfaces";
import SectionCard from "../../components/SectionCard";
import Products from "../../components/Products";

export default function Home() {
  const earphone: IMainCard = {
    cardBackground: "bg-earphone-background",
    imageSrc: "images/earphone-draw.png",
    imageTitle: "Acessórios tecnológicos",
    imageAlt: "Desenho de earphones",
    subtitleP: "Enjoy",
    boldSubtitleP: "With",
    mainP: "EARPHONE",
    mainPColor: "text-earphone-text"
  }
  const gadgets: IMainCard = {
    cardBackground: "bg-gadgets-background",
    imageSrc: "images/smartwatch-draw.png",
    imageTitle: "Gadgets",
    imageAlt: "Desenho de smartwatch",
    subtitleP: "Best",
    boldSubtitleP: "Wear",
    mainP: "GADGETS",
    mainPColor: "text-gadgets-text",
    whiteButton: true,
    whiteButtonTextColor: "text-gadgets-background"
  }
  const oculus: IMainCard = {
    cardBackground: "bg-oculus-background",
    imageSrc: "images/person-oculus-draw.png",
    imageTitle: "Itens de realidade aumentada",
    imageAlt: "Desenho de uma pessoa usando um óculos de realidade virtual",
    subtitleP: "Play",
    boldSubtitleP: "Game",
    mainP: "OCULUS",
    mainPColor: "text-oculus-text",
    whiteButton: true,
    whiteButtonTextColor: "text-oculus-background"
  }
  const amazon: IMainCard = {
    cardBackground: "bg-amazon-background",
    imageSrc: "images/amazon-speaker-draw.png",
    subtitleP: "New",
    imageTitle: "Produtos tech da Amazon",
    imageAlt: "Desenho de um Amazon Speaker, produto da Amazon",
    boldSubtitleP: "Amazon",
    mainP: "SPEAKER",
    mainPColor: "text-amazon-text",
    whiteButton: true,
    whiteButtonTextColor: "text-amazon-background",
    customImageStyles: "h-56 w-22 right-5",
    customImageWidth: 'w-30'
  }
  const notebook: IMainCard = {
    cardBackground: "bg-notebook-background",
    imageSrc: "images/notebook-draw.png",
    imageTitle: "Aparelhos eletrônicos",
    imageAlt: "Desenho de dois notebooks",
    subtitleP: "Trend",
    boldSubtitleP: "Devices",
    mainP: "LAPTOP",
    mainPColor: "text-notebook-text",
    whiteButton: true,
    bigCard: true,
    whiteButtonTextColor: "text-notebook-background",
    customImageStyles: "h-full w-60"
  }
  const console: IMainCard = {
    cardBackground: "bg-console-background",
    imageSrc: "images/console-draw.png",
    imageTitle: "Consoles",
    imageAlt: "Desenho de um Playstation 4",
    subtitleP: "Best",
    subtitlePColor: "text-black",
    boldSubtitleP: "Gaming",
    boldSubtitlePColor: "text-black",
    mainP: "CONSOLES",
    mainPColor: "text-console-text",
    bigCard: true,
    customImageStyles: "top-20"
  }
  const sectionHeadphone: ISectionCard = {
    backgroundColor:"bg-red-main",
    backgroundBlurColor:"bg-[#F0454E]",
    firstColumnSubtitleUp:"20% OFF",
    firstColumnSubtitleDown:"15 Nov To 7 Dec",
    firstColumnMainWordUp:"FINE",
    firstColumnMainWordDown:"SMILE",
    imageUrl:"images/card-section-headphone.png",
    imageAlt: "desenho de headphone",
    imageTitle: "Headphone",
    secondColumnTitle:"Summer Sale",
    secondColumnSubtitleUp:"Beats Solo Air",
    secondColumnSubtitleDown:"Company that’s grow from 270 to 480 employees at the last 12 months"
  }
  return (
    <section className="p-8">
      <Header />
      <Hero />
      <main className="my-8 flex flex-wrap gap-8 justify-center">
        <MainCard {...earphone} />
        <MainCard {...gadgets} />
        <MainCard {...notebook} />
        <MainCard {...console} />
        <MainCard {...oculus} />
        <MainCard {...amazon} />
      </main>
      <BenefitsLine />
      <SectionCard {...sectionHeadphone}/>
      <Products />
    </section>
  );
}