import { IMainCard } from "../../interfaces"

export const earphone: IMainCard = {
  cardBackground: "bg-earphone-background",
  imageSrc: "images/earphone-draw.png",
  imageTitle: "Acessórios tecnológicos",
  imageAlt: "Desenho de earphones",
  subtitleP: "Enjoy",
  boldSubtitleP: "With",
  mainP: "EARPHONE",
  mainPColor: "text-earphone-text"
}
export const gadgets: IMainCard = {
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
export const oculus: IMainCard = {
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
export const amazon: IMainCard = {
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
export const notebook: IMainCard = {
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
export const console: IMainCard = {
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