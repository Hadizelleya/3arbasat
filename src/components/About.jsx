import React from "react";
import { FaPeoplePulling } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineWechat } from "react-icons/ai";
import { MdMedicalServices } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-5 pt-10 lg:px-10 gap-10 w-full">
      <div className="flex flex-col gap-10 items-start justify-center w-full">
        <h1 className="text-4xl text-(--color-primary) font-bold ml-10">
          Why Choose Us?
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 p-4 w-full">
          <div className="bg-(--color-black)/80 hover:bg-(--color-primary) transition-colors duration-200 ease-in cursor-pointer p-2 rounded-full flex w-full max-w-[150px] h-[150px] justify-center items-center gap-2">
            <i>
              <FaPeoplePulling className="text-7xl text-(--color-white)" />
            </i>
          </div>
          <div className="flex flex-col gap-1 items-center sm:items-start justtify-center w-full">
            <h2 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet.
            </h2>
            <h3 className="text-(--color-primary) text-lg font-semibold">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="w-full  text-justify mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              repellendus quis minima eligendi possimus? Eius aliquam cupiditate
              sapiente nihil laboriosam dolore esse omnis quos asperiores
              architecto. A blanditiis, iusto nesciunt dolorem voluptatibus
              reiciendis quas impedit, neque eius labore dolore iste?
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center p-4 gap-5 ">
          <div className="bg-(--color-black)/80 hover:bg-(--color-primary) transition-colors duration-200 ease-in cursor-pointer p-2 rounded-full flex w-full max-w-[150px] h-[150px] justify-center items-center gap-2">
            <i>
              <AiFillLike className="text-7xl text-(--color-white)" />
            </i>
          </div>
          <div className="flex flex-col gap-1 items-start justtify-center w-full">
            <h2 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet.
            </h2>
            <h3 className="text-(--color-primary) text-lg font-semibold">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="w-full  text-justify mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              repellendus quis minima eligendi possimus? Eius aliquam cupiditate
              sapiente nihil laboriosam dolore esse omnis quos asperiores
              architecto. A blanditiis, iusto nesciunt dolorem voluptatibus
              reiciendis quas impedit, neque eius labore dolore iste?
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center p-4 gap-5">
          <div className="bg-(--color-black)/80 hover:bg-(--color-primary) transition-colors duration-200 ease-in cursor-pointer p-2 rounded-full flex w-full max-w-[150px] h-[150px] justify-center items-center gap-2">
            <i>
              <AiOutlineWechat className="text-7xl text-(--color-white)" />
            </i>
          </div>
          <div className="flex flex-col gap-1 items-start justtify-center w-full">
            <h2 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet.
            </h2>
            <h3 className="text-(--color-primary) text-lg font-semibold">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="w-full lg:w-[80%] text-justify mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              repellendus quis minima eligendi possimus? Eius aliquam cupiditate
              sapiente nihil laboriosam dolore esse omnis quos asperiores
              architecto. A blanditiis, iusto nesciunt dolorem voluptatibus
              reiciendis quas impedit, neque eius labore dolore iste?
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 items-start justify-center w-full">
        <h1 className="text-4xl text-(--color-primary) font-bold ml-10">
          Move To The Next Level
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 p-4 w-full">
          <div className="bg-(--color-primary) hover:bg-(--color-black)/80 cursor-pointer transition-colors duration-200 ease-in p-2 rounded-full flex w-full max-w-[150px] h-[150px] justify-center items-center gap-2">
            <i>
              <MdMedicalServices className="text-7xl text-(--color-white)" />
            </i>
          </div>
          <div className="flex flex-col gap-1 items-center sm:items-start justtify-center w-full">
            <h2 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet.
            </h2>
            <h3 className="text-(--color-primary) text-lg font-semibold">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="w-full  text-justify mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              repellendus quis minima eligendi possimus? Eius aliquam cupiditate
              sapiente nihil laboriosam dolore esse omnis quos asperiores
              architecto. A blanditiis, iusto nesciunt dolorem voluptatibus
              reiciendis quas impedit, neque eius labore dolore iste?
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center p-4 gap-5 ">
          <div className="bg-(--color-primary) hover:bg-(--color-black)/80 cursor-pointer transition-colors duration-200 ease-in p-2 rounded-full flex w-full max-w-[150px] h-[150px] justify-center items-center gap-2">
            <i>
              <BsFillShieldLockFill className="text-7xl text-(--color-white)" />
            </i>
          </div>
          <div className="flex flex-col gap-1 items-start justtify-center w-full">
            <h2 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet.
            </h2>
            <h3 className="text-(--color-primary) text-lg font-semibold">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="w-full  text-justify mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              repellendus quis minima eligendi possimus? Eius aliquam cupiditate
              sapiente nihil laboriosam dolore esse omnis quos asperiores
              architecto. A blanditiis, iusto nesciunt dolorem voluptatibus
              reiciendis quas impedit, neque eius labore dolore iste?
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center p-4 gap-5">
          <div className="bg-(--color-primary) hover:bg-(--color-black)/80 cursor-pointer transition-colors duration-200 ease-in p-2 rounded-full flex w-full max-w-[150px] h-[150px] justify-center items-center gap-2">
            <i>
              <GiHealthNormal className="text-7xl text-(--color-white)" />
            </i>
          </div>
          <div className="flex flex-col gap-1 items-start justtify-center w-full">
            <h2 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet.
            </h2>
            <h3 className="text-(--color-primary) text-lg font-semibold">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="w-full lg:w-[80%] text-justify mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              repellendus quis minima eligendi possimus? Eius aliquam cupiditate
              sapiente nihil laboriosam dolore esse omnis quos asperiores
              architecto. A blanditiis, iusto nesciunt dolorem voluptatibus
              reiciendis quas impedit, neque eius labore dolore iste?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
