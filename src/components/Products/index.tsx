import { IProductCard } from "../../interfaces";
import ProductCard from "./ProductCard";

export default function Products() {
  const coin = "$ ";
  const redBeats: IProductCard = {
    productName: "Red Beats",
    productPrice: "995",
    imageUrl: "images/products/red-beats.png",
    imageAlt: "Headphone Solo Air Beats Vermelho",
    imageTitle: "Headphone Solo Air Beats Vermelho",
    coin: coin
  }
  const goldenBeats: IProductCard = {
    productName: "Golden Beats",
    productPrice: "995",
    imageUrl: "images/products/golden-beats.png",
    imageAlt: "Headphone Solo Air Beats Dourado",
    imageTitle: "Headphone Solo Air Beats Dourado",
    coin: coin
  }
  const playstation5: IProductCard = {
    productName: "Playstation 5",
    productPrice: "699",
    imageUrl: "images/products/playstation-5.png",
    imageAlt: "Console Playstation 5",
    imageTitle: "Console Playstation 5",
    coin: coin
  }
  const notebookAsus: IProductCard = {
    productName: "ASUS ZenBook 13 UX325",
    productPrice: "659",
    imageUrl: "images/products/laptop.png",
    imageAlt: "Notebook ASUS ZenBook 13 UX325",
    imageTitle: "Notebook ASUS ZenBook 13 UX325",
    coin: coin
  }
  const beigeBeats: IProductCard = {
    productName: "Beige Beats",
    productPrice: "995",
    imageUrl: "images/products/beige-beats.png",
    imageAlt: "Headphone Solo Air Beats Bege",
    imageTitle: "Headphone Solo Air Beats Bege",
    coin: coin
  }
  const redClassicBeats: IProductCard = {
    productName: "Red Beats Classic",
    productPrice: "805",
    imageUrl: "images/products/red-beats-classic.png",
    imageAlt: "Headphone Solo Air Beats Vermelho Modelo Clássico",
    imageTitle: "Headphone Solo Air Beats Vermelho Modelo Clássico",
    coin: coin
  }
  const blackClassicBeats: IProductCard = {
    productName: "Black Beats Classic",
    productPrice: "805",
    imageUrl: "images/products/black-beats-classic.png",
    imageAlt: "Headphone Solo Air Beats Preto Modelo Clássico",
    imageTitle: "Headphone Solo Air Beats Preto Modelo Clássico",
    coin: coin
  }
  const smartwatch: IProductCard = {
    productName: "Black Bluetooth Smartwatch",
    productPrice: "500",
    imageUrl: "images/products/smartwatch.png",
    imageAlt: "Smartwatch Bluetooth Preto",
    imageTitle: "Smartwatch Bluetooth Preto",
    coin: coin
  }

  return (
    <div className="h-[551px] flex flex-col items-center">
      <h3 className="text-[39px] font-bold">
        Best Seller Products
      </h3>
      <h4 className="text-[20px] mb-[25px]">
        There are many variations passages
      </h4>
      <div className="w-full h-[444px] grid grid-cols-4 items-center justify-items-center">
        <ProductCard {...redBeats}/>
        <ProductCard {...goldenBeats}/>
        <ProductCard {...playstation5}/>
        <ProductCard {...notebookAsus}/>
        <ProductCard {...beigeBeats}/>
        <ProductCard {...redClassicBeats}/>
        <ProductCard {...blackClassicBeats}/>
        <ProductCard {...smartwatch}/>
      </div>
    </div>
  );
}