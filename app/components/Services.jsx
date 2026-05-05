"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Art Direction",
      desc: "Brand Identity, Strategy & Consult, Position, Rebrand",
      active: false,
    },
    {
      id: "02",
      title: "Art Direction",
      desc: "Brand Identity, Strategy & Consult, Position, Rebrand",
      active: false,
    },
    {
      id: "03",
      title: "Art Direction",
      desc: "Brand Identity, Strategy & Consult, Position, Rebrand",
      active: false,
    },
    {
      id: "04",
      title: "Art Direction",
      desc: "Brand Identity, Strategy & Consult, Position, Rebrand",
      active: false,
    },
  ];

  return (
    <main className="bg-[#f7f7f7] px-6 md:px-10 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-9 mb-8">
          <div className="lg:col-span-1">
            <div className="relative pl-16 mb:5 lg:mb-8">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-[2px] bg-red-600"></span>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-600"></span>

              <h4 className="text-xl font-medium text-gray-900 tracking-tight">
                Our Services
              </h4>
            </div>

            <p className="text-[16px] leading-[1.4] text-gray-500 max-w-[100%] lg:max-w-[320px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard.
            </p>
          </div>

          <div className="lg:col-span-3">
<h1 className="text-[48px] font-semibold text-gray-900 leading-[1.1] tracking-[-1.5px] max-w-4xl">
  <span className="block">Explore Our Full Spectrum</span>
  <span>
    Of{" "}
    <span className="text-[#cd0000] italic font-medium">
      Innovative Solutions
    </span>
  </span>
</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-9 items-stretch">
          <div className="lg:col-span-1 h-full">
            <div className="relative h-full min-h-[300px] rounded-[20px] overflow-hidden">
              <Image
                src="/images/Explore-img.webp"
                alt="Service Image"
                fill
                className="object-cover"
              />
            </div>
          </div>

<div className="lg:col-span-3 flex flex-col gap-4">
  {services.map((service) => (
    <div
      key={service.id}
      className="group flex items-center rounded-[12px] px-4 py-3 bg-[#ECECEC] 
      hover:bg-[#B81C15] active:bg-[#B81C15]
      transition-all duration-500 cursor-pointer"
    >

      <div className="flex items-center w-[150px] lg:w-[220px] shrink-0">
        
        <span className="text-[17px] font-medium text-white opacity-0 translate-x-[-10px] w-[22px] lg:w-[30px] inline-block
          group-hover:opacity-100 group-hover:translate-x-0 group-active:opacity-100 group-active:translate-x-0
          transition-all duration-500
        ">
          {service.id}
        </span>

        <h3 className="lg:text-[20px] text-[18px] font-medium leading-none  ml-0 group-hover:ml-3 group-hover:text-white group-active:ml-4 group-active:text-white
          transition-all duration-500">
          {service.title}
        </h3>

      </div>
      <div className="flex-1 text-left px-4">
        <p className="
          text-[13px] leading-6 text-gray-500 max-w-[280px] mx-auto group-hover:text-white group-active:text-white
          transition-all duration-500 ">
          {service.desc}
        </p>
      </div>

      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DADADA] shrink-0
      group-hover:bg-white group-active:bg-white transition-all duration-500">
        
        <FaArrowRight className="text-[18px] text-black rotate-[-45deg] group-hover:rotate-[45deg] group-active:rotate-[45deg]
          transition-all duration-500 " />
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </main>
  );
}