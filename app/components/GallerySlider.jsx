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
    {
      image: "/images/Gallery img_1.webp"
      // title: "Modern Interior Design",
    },
    {
      image: "/images/Gallery img_1.webp"
      // title: "Creative Workspace",
    },
    {
      image: "/images/Gallery img_1.webp"
      // title: "Luxury Living Room",
    },
    {
      image: "/images/Gallery img_1.webp"
      // title: "Minimal Architecture",
    },
    {
      image: "/images/Gallery img_1.webp"
      // title: "Elegant Home Style",
    },
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
    <section className="py-20 overflow-hidden bg-white">
      
      {/* Heading */}
      <div className="text-[#B81C15] text-center px-6 py-3 rounded-4xl w-fit m-auto bg-[#B81C15]/5">
        <span> IMAGE GALLERY </span>
      </div>

      <div className="text-center sm:mb-12 mb-6">
        <h2 className="text-[36px] md:text-[44px] lg:text-[56px] font-bold text-[#222] leading-[1.1] tracking-[-1px] mt-3.5">
          Our Story in{" "}
          <span className="text-[#B81C15] italic"> Motion </span>
        </h2>
      </div>

      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full relative"
      >
        
        {/* Left Fade */}
        <div className="absolute left-0 top-0 z-20 h-full w-20 md:w-32 pointer-events-none bg-linear-to-r from-white/80 to-transparent" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 z-20 h-full w-20 md:w-32 pointer-events-none bg-linear-to-l from-white/80 to-transparent" />

        <CarouselContent className="pt-5 pb-14 -ml-2 md:-ml-4">
          {images.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-3 md:pr-4 basis-[88%] sm:basis-[72%] md:basis-[58%] lg:basis-[50%]"
              >
                <div
                  className={`relative rounded-3xl overflow-hidden border border-gray-200 transform-gpu transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? "scale-110 opacity-100"
                      : "scale-[0.92] opacity-100"
                  }`}
                >
                  
                  {/* Image */}
                  <div className="w-full h-[260px] sm:h-[330px] md:h-[380px]">
                    <Image
                      src={item.image}
                      alt="gallery"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="absolute bottom-6 left-6 z-10">
                    <h3 className="text-white text-xl md:text-2xl font-semibold">
                      {item.title}
                    </h3>
                  </div>

                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Navigation Buttons */}
        <div className="mt-8 flex items-center justify-center gap-6">
          
          <CarouselPrevious className="static translate-y-0 bg-transparent border-none shadow-none hover:bg-transparent">
            <Image
              src="/images/prev arrow.webp"
              alt="prev"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </CarouselPrevious>

          <CarouselNext className="static translate-y-0 bg-transparent border-none shadow-none hover:bg-transparent">
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