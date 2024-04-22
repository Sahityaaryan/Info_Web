
"use client";

import { Carousel } from "flowbite-react";
import img1 from '../assets/images/img1.jpeg'
import img2 from '../assets/images/img2.jpeg'
import img3 from '../assets/images/img3.jpeg'
import img4 from '../assets/images/img4.jpeg'


export default function Component() {
  return (
    <div className="h-auto w-full  sm:h-64 xl:h-80 2xl:h-96 bg-gray-400">
      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        <img src ="https://drive.google.com/file/d/15jeZiubm_06Jc12mEIb4LDLFHyFnllMV/view?usp=drive_link" alt = "..."></img>
        <img src = {img2} alt = "..."></img>
        <img src = {img3} alt = "..."></img>
        <img src = {img4} alt = "..."></img>
      </Carousel>
    </div>
  );
}
