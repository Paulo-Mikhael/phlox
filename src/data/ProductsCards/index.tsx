import { IProductCard} from "../../interfaces";
import { v4 as uuidV4 } from 'uuid';

const coin = "$ ";
export const DataProducts: IProductCard[] = [
  {
    id: uuidV4(),
    productName: "Red Beats",
    productPrice: "995",
    imageUrl: "images/products/red-beats.png",
    imageAlt: "Headphone Solo Air Beats Vermelho",
    imageTitle: "Headphone Solo Air Beats Vermelho",
    coin: coin
  },
  {
    id: uuidV4(),
    productName: "Golden Beats",
    productPrice: "995",
    imageUrl: "images/products/golden-beats.png",
    imageAlt: "Headphone Solo Air Beats Dourado",
    imageTitle: "Headphone Solo Air Beats Dourado",
    coin: coin
  },
  {
    id: uuidV4(),
    productName: "Playstation 5",
    productPrice: "699",
    imageUrl: "images/products/playstation-5.png",
    imageAlt: "Console Playstation 5",
    imageTitle: "Console Playstation 5",
    coin: coin
  },
  {
    id: uuidV4(),
    productName: "ASUS ZenBook 13 UX325",
    productPrice: "659",
    imageUrl: "images/products/laptop.png",
    imageAlt: "Notebook ASUS ZenBook 13 UX325",
    imageTitle: "Notebook ASUS ZenBook 13 UX325",
    coin: coin
  },
  {
    id: uuidV4(),
    productName: "Beige Beats",
    productPrice: "995",
    imageUrl: "images/products/beige-beats.png",
    imageAlt: "Headphone Solo Air Beats Bege",
    imageTitle: "Headphone Solo Air Beats Bege",
    coin: coin
  },
  {
    id: uuidV4(),
    productName: "Red Beats Classic",
    productPrice: "805",
    imageUrl: "images/products/red-beats-classic.png",
    imageAlt: "Headphone Solo Air Beats Vermelho Modelo Clássico",
    imageTitle: "Headphone Solo Air Beats Vermelho Modelo Clássico",
    coin: coin
  },
  {
    id: uuidV4(),
    productName: "Black Beats Classic",
    productPrice: "805",
    imageUrl: "images/products/black-beats-classic.png",
    imageAlt: "Headphone Solo Air Beats Preto Modelo Clássico",
    imageTitle: "Headphone Solo Air Beats Preto Modelo Clássico",
    coin: coin
  },
  {
    id: uuidV4(),
    productName: "Black Bluetooth Smartwatch",
    productPrice: "500",
    imageUrl: "images/products/smartwatch.png",
    imageAlt: "Smartwatch Bluetooth Preto",
    imageTitle: "Smartwatch Bluetooth Preto",
    coin: coin
  }
]