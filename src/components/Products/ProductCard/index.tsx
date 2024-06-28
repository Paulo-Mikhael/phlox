import { IProductCard } from "../../../interfaces";
import Picture from "../../Picture";

export default function ProductCard({ imageUrl, imageAlt, imageTitle, productName, productPrice, coin = "$" }: IProductCard) {
  return (
    <article className="w-[260px] h-[192px] flex flex-col gap-2">
      <div className="w-full h-[134px] bg-[#DCDCDC] flex items-center justify-center rounded-[25px]">
        <Picture
          width="w-20"
          src={imageUrl}
          alt={imageAlt ? imageAlt : imageUrl}
          title={imageTitle ? imageTitle : imageUrl}
        />
      </div>
      <p className="font-medium">
        {productName}
      </p>
      <p className="font-bold text-[20px]">
        {`${coin}${String(Number(productPrice.replace(",", ".")).toFixed(2))}`}
      </p>
    </article>
  );
}