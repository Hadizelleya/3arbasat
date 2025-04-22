import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "../data/data";
import ProductCard from "./ProductCard";

export default function OneCategory({ name }) {
  const { categoryName } = useParams();
  const category = categories.find(
    (category) => category.name === categoryName
  );

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-5 md:px-30 px-6 py-30 bg-(--color-wheat) mt-20">
      <h1 className="text-5xl font-bold text-center text-(--color-primary) mb-20">
        {category.name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {category.products.map((product) => (
          <div key={product.id}>
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
