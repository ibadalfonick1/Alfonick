import React from "react";

const Agency = () => {
  return (
    <>
      <div className="flex justify-center lg:[&>h2]:text-[98px] md:[&>h2]:text-[70px] sm:[&>h2]:text-[50px] [&>h2]:text-[34px] [&>h2]:font-bold! [&>h2]:uppercase items-center gap-2">
        <div className="flex flex-col text-end lg:[&_span]:text-[45px] md:[&_span]:text-[38px] sm:[&_span]:text-[30px] [&_span]:text-[24px]">
          <span className="text-white font-bold [-webkit-text-stroke:0.54px_black] uppercase leading-[0.8px]">
            About
          </span>
          <span className="text-[#D4D4D4] uppercase block [&>h2]:font-bold!">
            Our
          </span>
        </div>
        <h2>Agency</h2>
      </div>

      {/* <div className="relative w-full h-125 overflow-hidden">
        <video
          className=""
          autoPlay
          muted
          loop
        >
          <source src="/video/Alfonick-video.mp4" type="video/mp4" />
        </video>
      </div> */}
    </>
  );
};

export default Agency;
