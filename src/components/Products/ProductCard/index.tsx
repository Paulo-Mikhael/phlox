import { IProductCard } from "../../../interfaces";
import Picture from "../../Picture";

export default function ProductCard({ imageUrl, imageAlt, imageTitle, productName, productPrice, coin = "$" }: IProductCard) {
  return (
    <article className="transition-all duration-700 w-[260px] h-[202px] flex flex-col gap-2 cursor-pointer hover:bg-slate-100 rounded-[25px]">
      <div className="w-full h-[134px] bg-[#DCDCDC] flex items-center justify-center rounded-[25px]">
        <Picture
          width="w-20"
          src={imageUrl}
          alt={imageAlt ? imageAlt : imageUrl}
          title={imageTitle ? imageTitle : imageUrl}
        />
      </div>
      <div className="w-full pl-4 pb-4">
        <p className="font-medium">
          {productName}
        </p>
        <p className="font-bold text-[20px]">
          {`${coin}${String(Number(productPrice.replace(",", ".")).toFixed(2))}`}
        </p>
      </div>
    </article>
  );
}