"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Testimonial = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-black py-17">
      <div className="max-w-395 mx-auto px-3.75">
        <Carousel
          setApi={setApi}
          className="flex md:flex-row flex-col gap-8 h-full items-center"
        >
          
          <div className="[&>img]:max-w-75">
            <Image
              src="/images/testimonial people.webp"
              alt="testimonial"
              width={500}
              height={100}
            />
          </div>

         
          <div className="flex-1 flex sm:flex-row flex-col h-full">
            <CarouselContent className="h-full">
              
              <CarouselItem className="h-full flex items-center">
                <div
                  className="pt-20 max-h-90 relative h-full xl:[&>p]:text-[24px] lg:[&>p]:text-[20px] sm:[&>p]:text-[18px] [&>p]:text-[16px]
                   [&>p]:text-white
                  [&>p]:pb-7
                  sm:[&>p]:max-w-[90%]
                  [&>p]:max-w-full
                  before:content-['']
                  before:absolute
                  before:top-5
                  before:left-0
                  before:w-15
                  before:h-12.5
                  before:bg-[url('/images/testimonialpara.webp')]
                  before:bg-contain
                  before:bg-no-repeat"
                >
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>

                  <div className="[&>h3]:text-[24px] [&>h3]:text-white! [&>h3]:font-extrabold [&>span]:text-[16px] [&>span]:text-white">
                    <h3>Helena Wound</h3>
                    <span>Business Owner</span>
                  </div>
                </div>
              </CarouselItem>

              
              <CarouselItem className="h-full flex items-center">
                <div
                  className="pt-20 max-h-90 relative h-full xl:[&>p]:text-[24px] lg:[&>p]:text-[20px] sm:[&>p]:text-[18px] [&>p]:text-[16px] [&>p]:text-white
                  [&>p]:pb-7
                  sm:[&>p]:max-w-[90%]
                  [&>p]:max-w-full
                  before:content-['']
                  before:absolute
                  before:top-5
                  before:left-0
                  before:w-15
                  before:h-12.5
                  before:bg-[url('/images/testimonialpara.webp')]
                  before:bg-contain
                  before:bg-no-repeat"
                >
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>

                  <div className="[&>h3]:text-[24px] [&>h3]:text-white! [&>h3]:font-extrabold [&>span]:text-[16px] [&>span]:text-white">
                    <h3>Helena Wound</h3>
                    <span>Business Owner</span>
                  </div>
                </div>
              </CarouselItem>

              {/* ITEM 3 */}
              <CarouselItem className="h-full flex items-center">
                <div
                  className="pt-20 max-h-90 relative h-full xl:[&>p]:text-[24px] lg:[&>p]:text-[20px] sm:[&>p]:text-[18px] [&>p]:text-[16px] [&>p]:text-white [&>p]:pb-7 sm:[&>p]:max-w-[90%] [&>p]:max-w-full before:content-[''] before:absolute before:top-5 before:left-0 before:w-15 before:h-12.5 before:bg-[url('/images/testimonialpara.webp')]
                  before:bg-contain
                  before:bg-no-repeat"
                >
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>

                  <div className="[&>h3]:text-[24px] [&>h3]:text-white! [&>h3]:font-extrabold [&>span]:text-[16px] [&>span]:text-white">
                    <h3>Helena Wound</h3>
                    <span>Business Owner</span>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>

            <div className="flex sm:flex-col flex-row items-center justify-center gap-2 mt-6 sm:pr-10 pr-0">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-3 sm:h-7.5 h-3 bg-red-500"
                      : "w-3 h-3 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
