"use client";

import Image from "next/image";
import Link from "next/link";

const logos = [
  { src: "/images/logoi_1.webp", link: "#" },
  { src: "/images/logoi_2.webp", link: "#" },
  { src: "/images/logoi_3.webp", link: "#" },
  { src: "/images/logoi_4.webp", link: "#" },
  { src: "/images/logoi_5.webp", link: "#" },
  { src: "/images/logoi_6.webp", link: "#" },
  { src: "/images/logoi_7.webp", link: "#" },
];

export default function BrandMarquee() {
  return (
    <section className="w-full py-20 bg-[#F9F9F9] overflow-hidden">

      <div className="text-center mb-12">
        <span className="text-xs px-5 py-1.5 bg-[#B81C150D] border border-[#B81C150D] text-[#B81C15] rounded-full">
          Core Values
        </span>

<h2 className="text-[36px] md:text-[44px] lg:text-[56px] font-semibold text-gray-900 leading-[1.1] tracking-[-1px] mt-6.25">
  Brands We Have{" "}
  <span className="block">
    <span className="text-[#B81C15] italic">Worked</span>{" "}
    <span className="text-[#222] not-italic">With</span>
  </span>
</h2>
      </div>
      
      <div className="max-w-300 mx-auto space-y-6">
        <div className="overflow-hidden">
          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((item, i) => (
              <Link href={item.link} key={i}>
                <div className="w-45 h-13.75 flex items-center justify-center rounded-[20px] border border-[#cccccc] bg-white transition
                [&>img]:h-7.5 ">
                  <Image
                    src={item.src}
                    alt="brand"
                    width={100}
                    height={30}
                    className="object-contain opacity-100 hover:opacity-100 transition"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-3 animate-marquee-reverse whitespace-nowrap">
            {[...logos, ...logos].map((item, i) => (
              <Link href={item.link} key={i}>
                <div className="w-45 h-13.75 flex items-center justify-center rounded-[20px] border border-[#cccccc] bg-white transition [&>img]:h-7.5">
                  <Image
                    src={item.src}
                    alt="brand"
                    width={100}
                    height={30}
                    className="object-contain opacity-100 hover:opacity-100 transition"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}