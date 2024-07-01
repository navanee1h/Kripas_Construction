import React, { useEffect, useRef, useState } from "react";
import CarouselImg1 from "../../../src/assets/images/image1.jpg";
import CarouselImg2 from "../../../src/assets/images/imagebg.jpg";
import CarouselImg3 from "../../../src/assets/images/image2.webp";

const SliderComponent = () => {
  const slidesData = [
    {
      img: CarouselImg1,
      // title: "Welcome to Our Service",
      // description: "The sun never knew how great it was until it hit the side of a building",
    },
    {
      img: CarouselImg2,
      // title: "Quality Assurance",
      // description: "We provide top-notch quality services.",
    },
    {
      img: CarouselImg3,
      // title: "We have served more than 7000+ customers",
      // description:
      //   "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis augue senectus massa",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const totalSlides = slidesData.length;
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds
    // console.log(slidesData[currentIndex].img);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[91vh] overflow-hidden mt-16">
      <div className="flex w-full h-full transition-transform duration-1000">
        <div className="w-full flex-shrink-0 h-full">
          <img
            src={slidesData[currentIndex].img}
            alt={`Slide ${slidesData[currentIndex]}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40 p-4">
        <h1 className="text-4xl font-bold text-center">
          {slidesData[currentIndex].title}
        </h1>
        <p className="text-xl mt-4 text-center">
          {slidesData[currentIndex].description}
        </p>
        {/* <div className="mt-8 flex items-center bg-red-700 p-2 rounded-full sm:rounded-lg shadow-lg w-[80%] h-20">
          <input
            type="text"
            className="flex-grow p-2 rounded-l-full text-black outline-none"
            placeholder="Search for test ..."
          />
          <button className="bg-white text-blue-500 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M3 11a8 8 0 1116 0 8 8 0 01-16 0z"
              />
            </svg>
          </button>
        </div> */}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slidesData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}></div>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
