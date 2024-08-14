"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import carousel1 from "../../../public/images/carousel1.jpg";
import carousel2 from "../../../public/images/carousel2.jpg";
import carousel3 from "../../../public/images/carousel3.jpg";

const images = [carousel1, carousel2, carousel3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto slide every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 4000);
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full relative h-[500px]">
            <Image
              src={src}
              alt={`Carousel Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white/40 pl-5 text-4xl"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white/40 pr-5 text-4xl"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
