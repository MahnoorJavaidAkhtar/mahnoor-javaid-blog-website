"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Banner = () => {
  const images = [
    "/images/bannerImgOne.jpg",
    "/images/bannerImgTwo.jpg",
    "/images/bannerImgThree.jpg",
    "/images/bannerImgFour.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-auto md:h-[650px] relative overflow-hidden">
      <div className="relative w-full h-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full h-auto md:h-[650px] flex-shrink-0"
              style={{ width: "100%" }}
            >
              <Image
                src={src}
                alt={`Banner Image ${index + 1}`}
                width={1920}
                height={650}
                className="w-full h-auto md:h-[650px] object-cover"
                priority={index === currentIndex}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full"
        onClick={handlePrev}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full"
        onClick={handleNext}
      >
        <FaChevronRight />
      </button>
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;