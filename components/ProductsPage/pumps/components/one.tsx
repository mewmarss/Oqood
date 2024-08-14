"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import one from "../../../../public/images/Carousel/pumps/first/one.png";
import two from "../../../../public/images/Carousel/pumps/first/two.jpg";
import three from "../../../../public/images/Carousel/pumps/first/three.png";
import four from "../../../../public/images/Carousel/pumps/first/four.png";
import five from "../../../../public/images/Carousel/pumps/first/five.jpg";
import six from "../../../../public/images/Carousel/pumps/first/six.jpg";
import seven from "../../../../public/images/Carousel/pumps/first/seven.jpg";
import eight from "../../../../public/images/Carousel/pumps/first/eight.jpeg";
import nine from "../../../../public/images/Carousel/pumps/first/nine.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [one, two, three, four, five, six, seven, eight, nine];

const CarouselOne = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <Image src={src} alt="Centrifugal Pumps" quality={100} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselOne;
