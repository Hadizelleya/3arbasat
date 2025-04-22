import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";
import logo from "../assets/mariamLogo.png";

export default function ContactPage() {
  return (
    <AnimatedDiv>
      <div className="flex flex-col md:flex-row items-center p-5 gap-15 md:justify-evenly justify-center h-screen  bg-(--color-wheat) w-full">
        <div>
          <img src={logo} alt="logo" className="md:w-[400px] w-[350px]" />
        </div>

        <div className="flex flex-col items-center justify-center bg-(--color-wheat) md:w-2/4 w-full p-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-2">We would love to hear from you!</p>
          <form className="flex flex-col md:w-2/3 w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="mb-4 p-2 px-4 border border-(--color-primary)/50 outline-0 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="mb-4 p-2 px-4 border border-(--color-primary)/50  outline-0 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="mb-4 p-2 px-4 border border-(--color-primary)/50  outline-0 rounded"
            ></textarea>
            <button className="bg-(--color-primary) cursor-pointer transition-colors duration-300 ease-initial hover:bg-(--color-black)/90 font-semibold text-xl text-white p-2 rounded">
              Send
            </button>
          </form>
        </div>
      </div>
    </AnimatedDiv>
  );
}
