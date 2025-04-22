import React from "react";
import ServiceCard from "./ServiceCard";
import categoryImage from "../assets/wood-category-1.jpg";
import categoryImage2 from "../assets/wood-category-2.jpg";
import categoryImage3 from "../assets/wood-category-3.jpg";
import categoryImage4 from "../assets/wood-category-4.jpg";
import { categories } from "../data/data";

export default function Services() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10 p-5 md:px-30 px-6 py-30 bg-(--color-wheat)">
        <h1 className="text-5xl font-bold text-center text-(--color-primary) mb-20">
          Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((category) => (
            <div key={category.id}>
              <ServiceCard
                image={category.image}
                title={category.name}
                subtitle={category.subtitle}
                description={category.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
