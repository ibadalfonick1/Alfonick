import React from "react";

const GalleryHero = () => {
  return (
    <>
      <section className="-mt-24 mx-5 rounded-[20px] -z-9 relative overflow-hidden bg-black sm:py-40 pt-35! py-20!">
        <div
          className="absolute left-1/2 top-1/2 
    -translate-x-1/2 -translate-y-1/2
    w-250 h-250 rounded-full bg-[radial-gradient(circle,_rgba(255,0,0,0.9)_0%,_rgba(255,0,0,0.45)_25%,_rgba(255,0,0,0.12)_55%,_transparent_100%)] z-9 "
        ></div>

        <span className="bg-[#750100] border-2 shadow-[0_-1px_7px_1px_#B81C15] text-[#B81C15]! text-[16px] text:font-bold uppercase block text-center italic m-auto px-6 py-2 w-fit rounded-4xl mb-1">
          {" "}
          Our Gallery{" "}
        </span>

        <div
          className="relative z-10 px-5 text-center 
    xl:[&>h1]:text-[90px]
    lg:[&>h1]:text-[70px]
    md:[&>h1]:text-[50px] 
    sm:[&>h1]:text-[36px]
    [&>h1]:text-[32px] 
    [&>h1]:text-white! 
    [&>h1]:leading-[1.2]
    [&>p]:text-white! 
    lg:[&>p]:text-[20px]
    sm:[&>p]:text-[18px] 
    [&>p]:text-[16px] 
    [&>p]:m-auto 
    [&>p]:max-w-225"
        >
          <h1>Our Culture & Moments </h1>
          <p>
            A visual journey through our creativity, teamwork, and success stories
          </p>
        </div>
      </section>
    </>
  );
};

export default GalleryHero;
