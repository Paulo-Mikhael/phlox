import { IProductCard } from "../../../interfaces";
import Picture from "../../Picture";

export default function ProductCard({ imageUrl, imageAlt, imageTitle, productName, productPrice, coin = "$" }: IProductCard) {
  return (
    <>
      <article className="transition-all duration-700 w-[260px] h-[202px] flex flex-col gap-2 cursor-pointer hover:shadow-lg rounded-[25px] max-xl:hidden">
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

      {/*Mobile*/}
      <article className="xl:hidden w-[300px] h-[330px] bg-[#DCDCDC] rounded-[25px] flex flex-col">
        <div className="w-full h-[204px] bg-[#DCDCDC] flex items-center justify-center rounded-[25px] mb-4">
          <Picture
            width="w-[9rem]"
            src={imageUrl}
            alt={imageAlt ? imageAlt : imageUrl}
            title={imageTitle ? imageTitle : imageUrl}
          />
        </div>
        <div className="w-full pl-4 pb-4">
          <p className="font-medium text-xl">
            {productName}
          </p>
          <p className="font-bold text-[30px]">
            {`${coin}${String(Number(productPrice.replace(",", ".")).toFixed(2))}`}
          </p>
        </div>
      </article>
    </>
  );
}