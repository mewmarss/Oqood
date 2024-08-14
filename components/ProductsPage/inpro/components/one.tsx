"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import one from "../../../../public/images/Carousel/inpro/one.jpg";
import two from "../../../../public/images/Carousel/inpro/two.jpg";
import three from "../../../../public/images/Carousel/inpro/three.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [one, two, three];

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
