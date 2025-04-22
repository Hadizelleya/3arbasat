import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";
import About from "../components/About";

export default function AboutPage() {
  return (
    <AnimatedDiv>
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 mt-20">
        {/* Existing About Component */}

        {/* New About Us Section */}
        <div className="w-full  mt-10 lg:p-20 md:p-10 p-5 flex flex-col items-center justify-center gap-7">
          <h1 className="text-5xl text-(--color-primary) font-semibold text-center mb-5 mt-5">
            Our Vision
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 text-justify leading-relaxed">
            Welcome to our website, where we celebrate the timeless beauty and
            craftsmanship of wood products. Our mission is to bring you
            high-quality, sustainable, and elegant wooden furniture and decor
            that transforms your spaces into warm, inviting havens. Each product
            is thoughtfully designed to combine functionality with aesthetic
            appeal, ensuring it complements both modern and traditional
            interiors. We believe in the power of natural materials to create a
            connection between people and the environment, and our collection
            reflects this philosophy.
          </p>
        </div>

        <About />
      </div>
    </AnimatedDiv>
  );
}
