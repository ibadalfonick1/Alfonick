import React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GallerySlider = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem className="basis-[70%] md:basis-[55%] lg:basis-[50%]">
              <Image
                src="/images/Gallery img_1.webp" alt="logo" width={500} height={500}
                className="w-full h-100 rounded-3xl object-cover"
              />
            </CarouselItem>

            <CarouselItem className="basis-[70%] md:basis-[55%] lg:basis-[50%]">
              <Image
                src="/images/Gallery img_1.webp"
                alt="logo"
                width={500}
                height={500}
                className="w-full h-100 rounded-3xl object-cover"
              />
            </CarouselItem>

            <CarouselItem className="basis-[70%] md:basis-[55%] lg:basis-[50%]">
              <Image
                src="/images/Gallery img_1.webp"
                alt="logo"
                width={500}
                height={500}
                className="w-full h-100 rounded-3xl object-cover"
              />
            </CarouselItem>

            <CarouselItem className="basis-[70%] md:basis-[55%] lg:basis-[50%]">
              <Image
                src="/images/Gallery img_1.webp"
                alt="logo"
                width={500}
                height={500}
                className="w-full h-100 rounded-3xl object-cover"
              />
            </CarouselItem>

            <CarouselItem className="basis-[70%] md:basis-[55%] lg:basis-[50%]">
              <Image
                src="/images/Gallery img_1.webp"
                alt="logo"
                width={500}
                height={500}
                className="w-full h-100 rounded-3xl object-cover"
              />
            </CarouselItem>
          </CarouselContent>

          <div className="mt-8 flex items-center justify-center gap-4">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default GallerySlider;