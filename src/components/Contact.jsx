import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="h-[400px] bg-[url(./assets/book.jpg)] bg-cover bg-no-repeat bg-center flex justify-center items-center mt-20 relative w-full p-10">
        <div className="absolute inset-0 bg-black/50 " />
        <div className="flex w-full flex-col items-center justify-center text-white text-3xl md:text-5xl xl:text-6xl z-20 gap-3">
          <h1>More About Domain Name</h1>
          <h1>Registration & Web Hosting</h1>
        </div>
      </div>

      <div className="w-full flex flex-col gap-7 text-black items-center justify-center text-3xl md:text-5xl xl:text-6xl z-20 bg-(--color-wheat) py-20 px-5">
        <h1>Subscribe To Our News Letter</h1>
        <div className="z-20 relative flex items-center justify-center gap-3 w-full">
          <input
            type="email"
            placeholder="Enter Your Email Please..."
            className="bg-(--color-white) border-0 p-4 shadow-md px-5 max-w-[700px] w-full text-black rounded outline-0 text-xl"
          />
          <button className="p-4 shadow-md px-4 bg-(--color-primary) text-xl text-white rounded-md font-semibold text-center cursor-pointer hover:bg-(--color-black) transition-all duration-300 ease-in-out">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
