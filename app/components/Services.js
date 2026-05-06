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
    <main className=" pt-18 pb-22">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-9 mb-8">
          <div className="sm:col-start-1 sm:col-end-2 col-start-1 col-end-5">
            <div className="relative pl-16 mb:5 lg:mb-8">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-0.5 bg-red-600"></span>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-600"></span>

              <h4 className="text-xl font-medium text-gray-900 tracking-tight">
                Our Services
              </h4>
            </div>

            <p className="text-[16px] leading-[1.4] text-gray-500 max-w-full lg:max-w-[320px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard.
            </p>
          </div>

          <div className="sm:col-start-2 sm:col-end-4 col-start-1 col-end-5">
            <h2 className="lg:text-[48px] md:text-[40px] text-[32px] font-semibold text-gray-900 leading-[1.1] tracking-[-1.5px] max-w-4xl">
              <span className="block">Explore Our Full Spectrum</span>
              <span>
                Of{" "}
                <span className="text-[#cd0000] italic font-medium">
                  Innovative Solutions
                </span>
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-stretch">
          <div className="lg:col-span-1 h-full">
            <div className="relative h-full min-h-75 rounded-[20px] overflow-hidden">
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
                className="group flex items-center rounded-[12px] px-4 py-3 bg-[#ECECEC] hover:bg-[#B81C15]
       active:bg-[#B81C15]! transition-all duration-500 cursor-pointer hover:[&>div_h3]:transition-all hover:[&>div_h3]:duration-300 hover:[&>div_h3]:text-white! active:[&>div_h3]:text-white! [&>div_span]:visible [&>div_span]:transition-all [&>div_span]:duration-300 hover:[&>div_span]:inline-block active:[&>div_span]:inline-block"
              >
                <div className="flex items-center sm:w-37.5 w-35 lg:w-55 shrink-0 ">
                  <span
                    className="lg:text-[26px] text-[18px] font-medium text-white opacity-0 
        -translate-x-2.5 w-5.5 lg:w-7.5 group-hover:opacity-100 group-hover:translate-x-0 group-active:opacity-100 group-active:translate-x-0 transition-all duration-500 hidden
        "
                  >
                    {service.id}
                  </span>

                  <h3 className="lg:text-[30px] text-[18px] font-medium leading-none ml-0 group-hover:ml-3 sm:group-active:ml-4 group-active:ml-2 transition-all duration-500">
                    {service.title}
                  </h3>
                </div>
                <div className="flex-1 text-left">
                  <p
                    className="lg:text-[14px] text-[12px] lg:leading-6 leading-4 text-[#22222299] 
          max-w-65 mx-auto group-hover:text-white group-active:text-white
          transition-all duration-500 "
                  >
                    {service.desc}
                  </p>
                </div>

                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DADADA] shrink-0
      group-hover:bg-white group-active:bg-white transition-all duration-500"
                >
                  <FaArrowRight className="text-[18px] text-black rotate-[-45deg] group-hover:rotate-[45deg] group-active:rotate-[45deg] transition-all duration-500 " />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
