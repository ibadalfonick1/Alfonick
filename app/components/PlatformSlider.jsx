"use client"

import React, { useEffect, useState } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

const platforms = [
  {
    name: "Spotify",
    logo: "/images/Spotify_logo.webp",
  },
  {
    name: "Upwork",
    logo: "/images/Upwork_logo.webp",
  },
  {
    name: "Loom",
    logo: "/images/Loom_logo.webp",
  },
  {
    name: "Slack",
    logo: "/images/Slack_logo.webp",
  },
  {
    name: "Trello",
    logo: "/images/Upwork_logo.webp",
  },
  {
    name: "Loom",
    logo: "/images/Loom_logo.webp",
  },
  {
    name: "Slack",
    logo: "/images/Slack_logo.webp",
  },
]

export default function PlatformSlider() {
  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <div className="text-center mb-12">
          <span className="text-xs px-5 py-1.5 bg-[#B81C150D] border border-[#B81C150D] text-[#B81C15] rounded-full">
            Core Values
          </span>

          <h2 className="lg:text-[56px] md:text-4xl sm:text-2xl text-[28px] !font-bold leading-[1.1] mt-5">
            Platform{" "}
            <span className="text-[#B81C15] italic">
              We Use
            </span>
          </h2>
        </div>

<div className="overflow-hidden pl-4">
  <Carousel
    setApi={setApi}
    opts={{
      loop: true,
      align: "start",
      skipSnaps: false,
    }}
    className="w-full"
  >
    <CarouselContent className="-ml-3 flex items-stretch">
      {platforms.map((item, index) => (
        <CarouselItem
          key={index}
          className="
            pl-4
            basis-1/2
            sm:basis-1/3
            md:basis-1/4
            lg:basis-1/5
          "
        >
          <Card className="h-[140px] md:h-[160px] rounded-[12px] border border-[#22222280] shadow-none bg-white">
            <CardContent className="flex items-center justify-center h-full">
              <img
                src={item.logo}
                alt={item.name}
                className="h-7 md:h-8 object-contain"
              />
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
</div>

       <div className="flex justify-center items-center gap-[5px] mt-8">
  {platforms.map((_, index) => (
    <button
      key={index}
      onClick={() => api?.scrollTo(index)}
      className={`
        w-4 h-4 rounded-full border-2
        flex items-center justify-center
        transition-all duration-300
        ${
          current === index
            ? "border-[#B81C15]"
            : "border-transparent"
        }
      `}
    >
      <span
        className={`
          rounded-full transition-all duration-300
          ${
            current === index
              ? "w-2 h-2 bg-[#B81C15]"
              : "w-2.5 h-2.5 bg-[#1E1E1E]"
          }
        `}
      />
    </button>
  ))}
</div>
      </div>

    </section>
  )
}