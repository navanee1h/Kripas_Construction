import React, { useEffect, useState } from "react";
import CarouselImg1 from "../../../src/assets/images/image3.jpg";
import CarouselImg2 from "../../../src/assets/images/imagebg.jpg";
import CarouselImg3 from "../../../src/assets/images/image2.webp";
import "./slider.css";

const SliderComponent = () => {
  const slidesData = [
    { img: CarouselImg1 },
    { img: CarouselImg2 },
    { img: CarouselImg3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const totalSlides = slidesData.length;
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className="slide-image"
          style={{
            backgroundImage: `url(${slidesData[currentIndex].img})`,
            backgroundSize: "cover",
          }}></div>
      </div>
      <div className="overlay">
        <h1 className="slide-title">{slidesData[currentIndex].title}</h1>
        <p className="slide-description">
          {slidesData[currentIndex].description}
        </p>
      </div>
      <div className="indicators">
        {slidesData.map((_, index) => (
          <div
            key={index}
            className={`indicator ${
              currentIndex === index ? "active" : ""
            }`}></div>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
