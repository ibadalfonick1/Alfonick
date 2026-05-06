"use client";

import React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonial = () => {
  return (
    <section className="bg-black py-10">
      <div className="max-w-395 mx-auto px-3.75">

        <Carousel className="flex md:flex-row flex-col gap-8">

          <div className="[&>img]:max-w-75">
            <Image
              src="/images/testimonial people.webp"
              alt="testimonial"
              width={500}
              height={100}
            />
          </div>

          <CarouselContent>

            <CarouselItem className="relative">
              <div
                className="
                pt-20 
                pr-10
                relative
                [&>p]:text-[20px] 
                [&>p]:text-white 
                [&>p]:pb-7
            
                before:content-[''] 
                before:absolute 
                before:top-5 
                before:left-0 
                before:w-12.5
                before:h-12.5
                before:bg-[red]
                before:bg-[url('/images/testimonial para vector.webp')] 
                before:bg-contain 
                before:bg-no-repeat
                "
              >
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="absolute bottom:0 [&>h3]:text-[24px] [&>h3]:text-white! [&>h3]:font-extrabold [&>span]:text-[16px] [&>span]:text-white">
                <h3 >Helena Wound</h3>
                <span>Business Owner</span>
                </div>
              </div>
            </CarouselItem>

        
            <CarouselItem className="relative">
              <div className="pt-20 pr-10 relative
                [&>p]:text-[20px] 
                [&>p]:text-white
                [&>p]:pb-7

                before:content-[''] 
                before:absolute 
                before:top-5 
                before:left-0 
                before:w-12.5
                before:h-12.5
                before:bg-[red]
                before:bg-[url('/images/testimonial-para-vector.webp')] 
                before:bg-contain 
                before:bg-no-repeat">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="absolute bottom:0 [&>h3]:text-[24px] [&>h3]:text-white! [&>h3]:font-extrabold [&>span]:text-[16px] [&>span]:text-white">
                <h3 >Helena Wound</h3>
                <span>Business Owner</span>
                </div>
              </div>
            </CarouselItem>

            
            <CarouselItem className="relative">
              <div className="pt-20 pr-10 relative
                [&>p]:text-[20px] 
                [&>p]:text-white 
                [&>p]:pb-7 
                [&>h3]:text-[24px] 
                [&>h3]:text-white
                [&>h3]:font-extrabold 
                [&>span]:text-[16px]
              [&>span]:text-white

                before:content-[''] 
                before:absolute 
                before:top-5 
                before:left-0 
                before:w-12.5
                before:h-12.5
                before:bg-[red]
                before:bg-[url('/images/testimonial-para-vector.webp')] 
                before:bg-contain 
                before:bg-no-repeat">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="absolute bottom:0 [&>h3]:text-[24px] [&>h3]:text-white! [&>h3]:font-extrabold [&>span]:text-[16px] [&>span]:text-white">
                <h3>Helena Wound</h3>
                <span>Business Owner</span>
                </div>
              </div>
            </CarouselItem>

          </CarouselContent>

          {/* <CarouselPrevious />
          <CarouselNext /> */}

        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;