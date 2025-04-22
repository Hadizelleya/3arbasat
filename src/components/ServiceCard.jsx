import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ServiceCard({ image, title, subtitle, description }) {
  return (
    <div className="flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 group  shadow-lg h-full  rounded-t-lg hover:shadow-xl">
      <div className="flex flex-col items-center justify-start gap-5  rounded-t-lg cursor-pointer bg-white w-full h-full">
        <div className="w-full">
          <img
            src={image}
            alt="category image"
            className="rounded-md w-full h-[400px] object-cover"
          />
        </div>
        <div className="flex flex-col items-cneter justify-center gap-2 p-4">
          <h1 className="text-2xl font-bold text-center">{title}</h1>
          <h2 className="text-xl font-semibold text-center text-(--color-primary)/70">
            {subtitle}
          </h2>
          <p className="text-center text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-4 py-2 bg-(--color-primary) text-white rounded-b-lg shadow-md hover:bg-(--color-black)/90 hover:text-(--color-white) transition-all duration-300 cursor-pointer">
        <Link
          to={`/3arbasat/products/${title}`}
          className="flex items-center justify-between w-full gap-2"
        >
          <span className="text-lg font-semibold">See Products</span>
          <FaArrowRight className="text-xl" />
        </Link>
      </div>
    </div>
  );
}
