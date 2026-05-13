"use client";

import React, { useRef, useState } from "react";

const Agency = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <section className="xl:pb-15 lg:pb-8 pb-5">
        
       
        <div className="flex justify-center lg:[&>h2]:text-[98px] md:[&>h2]:text-[70px] sm:[&>h2]:text-[50px] [&>h2]:text-[34px] [&>h2]:font-bold! [&>h2]:uppercase items-center gap-2">
          <div className="flex flex-col items-center text-end lg:[&_span]:text-[45px] md:[&_span]:text-[38px] sm:[&_span]:text-[30px] [&_span]:text-[24px] sm:-mb-7 -mb-3">
            <span className="text-white font-extrabold! [-webkit-text-stroke:0.54px_black] uppercase tracking-[-0.5px] leading-[0.8px]">
              About
            </span>
            <span className="text-[#D4D4D4] uppercase block font-extrabold!">
              Our
            </span>
          </div>
          <h2 className="tracking-[-0.8px]!">Agency</h2>
        </div>

      
        <div className="2xlx:-mb-150 lg:-mb-140 md:-mb-50 sm:-mb-50 -mb-45 relative w-full 2xlx:h-235 h-auto overflow-hidden">
          
         
          <div className="max-w-385 m-auto px-5">
            
            <video
              ref={videoRef}
              onClick={toggleVideo}
              className="w-full h-full object-cover cursor-pointer rounded-xl"
              muted
              loop
            >
              {/* <source src="https://video.zig.ht/api/videos/file/1778493541143-114155780.mp4" /> */}
              <source src="https://vimeo.com/1191956743?fl=pl&fe=cm" />
           

            </video>

            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div
                  onClick={toggleVideo}
                  className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-white pointer-events-auto cursor-pointer"
                >
                  <div className="w-0 h-0 border-l-16 border-l-white border-y-10 border-y-transparent ml-1"></div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
};

export default Agency;