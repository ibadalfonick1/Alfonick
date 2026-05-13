// import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const features = [
  {
    id: "01",
    title: "Design Mastry",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },

  {
    id: "02",
    title: "Digital Leaders",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
  },

  {
    id: "03",
    title: "Web Experts",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
  },
];

const marqueeItems = [
  "MOTION GRAPHICS",
  "WEB DEVELOPMENT",
  "DIGITAL MAKETING",
  "CREATIVE DESIGN",
  "BRAND STRATEGY",
  "UI/UX DESIGN",
];

export default function Creative() {
  return (
    <>
      <section className="py-14">
        <div className="container">
          <div className="grid grid-cols-5 gap-5 items-center">
            <div className="relative md:col-start-1 md:col-end-4 col-start-1 col-end-6">
              <div className="relative flex items-center pl-15 mb-3">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-0.5 bg-[#B81C15]"></span>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#B81C15]"></span>
                <p className="text-base lg:text-2xl font-medium text-[#181010] tracking-tight">
                  Who Are We
                </p>
              </div>

              <h2 className="lg:text-[56px] md:text-4xl sm:text-2xl text-[28px] font-bold! leading-[1.1]">
                We are{" "}
                <span className="text-[#B81C15] font-bold!">
                  CREATIVE
                </span>
                <span className="block font-bold!">Digital Marketing</span>
                <span className="block font-bold!">Agency from Pakistan</span>
              </h2>

              <div className="absolute top-12 right-10 ">
                <Image
                  src="/images/star-img.png"
                  alt="red star"
                  width={70}
                  height={70}
                  className="animate-spin-slow"
                />
              </div>

              <div className="absolute top-26 right-6">
                <Image
                  src="/images/grey-star-img.png"
                  alt="gray star"
                  width={35}
                  height={35}
                  className="animate-spin-slow"
                />
              </div>

              <p className="text-[#222222B3] text-base mt-4 mb-5 leading-normal capitalize" style={{fontFamily: "Arial"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy
                text ever since the 1500s, when an unknown printer took.
              </p>

            </div>

              <div className="md:col-start-4 md:col-end-6 col-start-1 col-end-6">image</div>

          </div>

          <div className="grid md:grid-cols-3 lg:gap-20 gap-5 mt-8">
            {features.map((feature) => (
              <div key={feature.id}>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-light text-transparent! [-webkit-text-stroke:1px_#757575]!" style={{fontFamily: "DM Sans"}}>
                  {feature.id}.{" "}
                  <span className="text-black lg:text-[32px] sm:text-[24px] font-bold! text-[20px] semibold! [-webkit-text-stroke:0]">
                    {feature.title}
                  </span>
                </h2>
                <p className="mt-3 md:max-w-[80%] max-w-full text-gray-500 leading-5.5 text-sm capitalize" style={{fontFamily: "Arial"}}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="overflow-hidden w-full whitespace-nowrap lg:pt-10 pt-3 ">
          <div className="flex w-max marquee gap-12">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div key={index} className="flex items-center gap-10 shrink-0 sm:[&_img]:w-20 sm:[&_img]:h-20 [&_img]:w-14 [&_img]:h-14">
                <h2
                  className={`text-3xl md:text-[56px] font-semibold! uppercase ${
                    index % 2 === 0 ? "text-black" : "text-[#B81C15]!"
                  }`}
                >
                  {item}
                </h2>

                <Image
                  src="/images/star-img.png"
                  alt="star"
                  width={80}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
