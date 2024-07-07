import { DataProducts } from "../../data/ProductsCards";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <div className="h-[551px] flex flex-col items-center">
      <h3 className="text-[39px] font-bold">
        Best Seller Products
      </h3>
      <h4 className="text-[20px] mb-[25px]">
        There are many variations passages
      </h4>
      <div className="w-[1270px] h-[444px] grid grid-cols-4 items-center justify-items-center max-xl:w-full max-xl:overflow-x-scroll max-xl:flex max-xl:gap-4">
        {DataProducts.map(product => (
          <div key={product.id}>
            <ProductCard
              id={product.id}
              imageUrl={product.imageUrl}
              imageAlt={product.imageAlt}
              imageTitle={product.imageTitle}
              productName={product.productName}
              productPrice={product.productPrice}
            />
          </div>
        ))}
      </div>
    </div>
  );
}