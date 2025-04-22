import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";
import ProductCard from "../components/ProductCard";
import woodenBox from "../assets/wooden-chair.jpg";
import { categories } from "../data/data";

export default function Products() {
  return (
    <AnimatedDiv>
      <div className="w-full h-full flex flex-col items-center justify-center p-10 gap-10">
        <div className="flex flex-col items-center justify-center gap-10 mb-10 mt-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center justify-center gap-10 mb-10"
            >
              <h1 className="text-3xl lg:text-4xl text-(--color-primary) w-full border-y border-(--color-secondary)/80 p-5 text-center font-bold">
                {category.name}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-10 w-full">
                {category.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedDiv>
  );
}
