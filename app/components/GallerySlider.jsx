"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GallerySlider = () => {
  const [api, setApi] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/images/Gallery img_1.webp",
    "/images/Gallery img_1.webp",
    "/images/Gallery img_1.webp",
    "/images/Gallery img_1.webp",
    "/images/Gallery img_1.webp",
  ];

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    update();
    api.on("select", update);

    return () => {
      api.off("select", update);
    };
  }, [api]);

  return (
    <section className="py-20 overflow-hidden">

     <div className="span:text-[#B81C15] text-center px-6 py-3 rounded-4xl w-fit m-auto bg-[#B81C15]/5 text-[#B81C15]">
          <span className=""> IMAGE GALLERY </span>
        </div>

        <div className="text-center sm:mb-12 mb-6 [&>h2]">
          <h2 className="text-[36px] md:text-[44px] lg:text-[56px] font-bold text-[#222] leading-[1.1] tracking-[-1px] mt-3.75">
            Our Story in <span className="text-[#B81C15] italic"> Motion </span>
          </h2>
          
        </div>


      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((img, index) => {
            const isActive = index === activeIndex;

            return (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-[80%] md:basis-[55%] lg:basis-[50%] px-5"
              >
                <div className="rounded-3xl border overflow-hidden">
                  <div
                    className={`transition-all duration-700 ease-in-out ${
                      isActive ? "scale-110 z-10" : "scale-100"
                    }`}
                  >
                    <div className="w-full h-[300px] sm:h-[350px] md:h-[380px]">
                      <Image
                        src={img}
                        alt="gallery"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <div className="mt-8 flex items-center justify-center gap-6">
          
          <CarouselPrevious className="static translate-y-0 bg-transparent border-none shadow-none">
            <Image
              src="/images/prev arrow.webp"
              alt="prev"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </CarouselPrevious>

          <CarouselNext className="static translate-y-0 bg-transparent border-none shadow-none">
            <Image
              src="/images/next arrow.webp"
              alt="next"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </CarouselNext>

        </div>
      </Carousel>
    </section>
  );
};

export default GallerySlider;