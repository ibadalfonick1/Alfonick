import React from "react";

const Agency = () => {
  return (
    <>

    <section className="xl:pb-15 lg:pb-8 pb-5">
      <div className="flex justify-center lg:[&>h2]:text-[98px] md:[&>h2]:text-[70px] sm:[&>h2]:text-[50px] [&>h2]:text-[34px] [&>h2]:font-bold! [&>h2]:uppercase items-center gap-2">
        <div className="flex flex-col items-center text-end lg:[&_span]:text-[45px] md:[&_span]:text-[38px] sm:[&_span]:text-[30px] [&_span]:text-[24px]">
          <span className="text-white font-bold [-webkit-text-stroke:0.54px_black] uppercase tracking-[-0.5px] leading-[0.8px]">
            About
          </span>
          <span className="text-[#D4D4D4] uppercase block [&>h2]:font-bold!">
            Our
          </span>
        </div>
        <h2>Agency</h2>
      </div>

      <div
        className="relative w-full xl:h-235 lg:h-200 h-auto overflow-hidden">
        <video className="" autoPlay muted loop>
          <source src="/video/Alfonick video.mp4" type="video/mp4" />
        </video>
      </div>
      </section>
    </>
  );
};

export default Agency;
