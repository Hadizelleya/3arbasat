import React from "react";

export default function ProductCard({ name, image, price }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 group  shadow-lg h-full  rounded-t-lg hover:shadow-xl">
        <div className="flex flex-col items-center justify-start gap-5  rounded-t-lg cursor-pointer bg-white w-full h-full">
          <div className="w-full flex items-center justify-center">
            <img
              src={image}
              alt="category image"
              className="rounded-md w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col items-cneter justify-center gap-2 p-4">
            <h1 className="text-2xl font-bold text-center">{name}</h1>
            <h2 className="text-xl font-semibold text-center text-(--color-primary)/70">
              {price}$
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
