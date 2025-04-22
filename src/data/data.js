// This file contains the data for the categories and products in the application.
import categoryPicutreOne from "../assets/category-pic-1.jpg";
import categoryPicutreTwo from "../assets/category-pic-2.jpg";
import categoryPicutreThree from "../assets/category-pic-3.jpg";
import categoryPicutreFour from "../assets/category-pic-4.jpg";

import woodenChairImage from "../assets/wooden-chair.jpg";
import woodenBigTableImage from "../assets/wooden-big-table.jpg";
import woodenClockImage from "../assets/wooden-clock.jpg";
import woodenRoundedTableImage from "../assets/wooden-rounded-table.jpg";
import woodenWindowImage from "../assets/wooden-window.jpg";

import woodenLampImage from "../assets/wooden-lamp.jpg";
import woodenLanternImage from "../assets/wooden-lantern.jpg";
import woodenLetterLampImage from "../assets/letter-shaped-lamp.jpg";

import interlockingFrameImage from "../assets/interlocking-frame.jpg";
import classicFrameImage from "../assets/classic-frame.jpg";
import hollowedFrameImage from "../assets/hollowed-frame.jpg";

import islamicEngravingBoxImage from "../assets/box-with-islamic-engraving.jpg";
import jewelryStorageBoxImage from "../assets/hollowed-box-jewerly.jpg";
import chocolateStorageBoxImage from "../assets/chocolate-box.jpg";
import mandalaPatternBoxImage from "../assets/mandella-pattern-box.jpg";
import gardersBoxImage from "../assets/garders-wooden-lamp.jpg";

export const categories = [
  {
    id: 1,
    name: "Carved Small Furniture",
    image: categoryPicutreOne,
    subtitle: "Wooden Furniture",
    description: "Wooden furniture is a timeless choice for any home.",
    products: [
      {
        id: 1,
        name: "Carved Rounded Coffee Table",
        image: woodenBigTableImage,
        price: 45.0,
      },
      {
        id: 2,
        name: "Carved Wooden Wall Clock",
        image: woodenClockImage,
        price: 25.0,
      },
      {
        id: 3,
        name: "Carved Wooden Window Frames",
        image: woodenWindowImage,
        price: 30.0,
      },
      {
        id: 4,
        name: "Wooden Chair with Decorated Back",
        image: woodenChairImage,
        price: 40.0,
      },
    ],
  },
  {
    id: 2,
    name: "Wooden Lighting Fixtures",
    image: categoryPicutreTwo,
    subtitle: "Wooden Lighting",
    description: "Illuminate your space with our wooden lighting fixtures.",
    products: [
      {
        id: 1,
        name: "Carved Wooden Lamp",
        image: woodenLampImage,
        price: 15.0,
      },
      {
        id: 2,
        name: "Wooden Lanterns",
        image: woodenLanternImage,
        price: 10.0,
      },
      {
        id: 3,
        name: "Letter-Shaped Wooden Lamp",
        image: woodenLetterLampImage,
        price: 25.0,
      },
    ],
  },
  {
    id: 3,
    name: "Wooden Frames",
    image: categoryPicutreThree,
    subtitle: "Wooden Frames",
    description: "Showcase your memories with our wooden frames.",
    products: [
      {
        id: 1,
        name: "Interlocking Frame in a 3D Style",
        image: interlockingFrameImage,
        price: 15.0,
      },
      {
        id: 2,
        name: "Classic Decorative Frame",
        image: classicFrameImage,
        price: 9.0,
      },
      {
        id: 3,
        name: "Hollowed Wooden Frame Around Mirrors",
        image: hollowedFrameImage,
        price: 10.0,
      },
    ],
  },
  {
    id: 4,
    name: "Hollow Wooden Boxes",
    image: categoryPicutreFour,
    subtitle: "Wooden Boxes",
    description:
      "Store your treasures in our beautifully crafted wooden boxes.",
    products: [
      {
        id: 1,
        name: "Box With Ismalic Engraving",
        image: islamicEngravingBoxImage,
        price: 25.0,
      },
      {
        id: 2,
        name: "Hollowed box for jewelry storage",
        image: jewelryStorageBoxImage,
        price: 10.0,
      },
      {
        id: 3,
        name: "Wooden box for storing chocolates",
        image: chocolateStorageBoxImage,
        price: 15.0,
      },
      {
        id: 4,
        name: "Box with hollowed-out mandala patterns",
        image: mandalaPatternBoxImage,
        price: 10.0,
      },
      {
        id: 5,
        name: "Hollow box for garders as a decorative lamp",
        image: gardersBoxImage,
        price: 30.0,
      },
    ],
  },
];
