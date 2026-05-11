import Image from "next/image";

const WhyChoose = () => {
  return (

    <div className="bg-[#ddd] lg:pt-150 md:pt-80 pt-50 pb-24">
      <div className="container grid sm:grid-cols-3 grid-cols-1 md:gap-14 gap-5 py-10">
        <div className="sm:col-start-1 sm:col-end-2 col-start-1 col-end-4 sm:text-end text-center lg:[&_span]:text-2xl md:[&_span]:text-xl [&_span]:text-base">
          <span className="relative inline-block pl-8 before:content-[''] before:absolute before:-left-10 before:top-0 before:bottom-0 before:m-auto before:w-15 before:h-3 before:bg-[url('/images/line.webp')] before:bg-no-repeat before:bg-contain">
            Why Choose us
          </span>
        </div>

        <div className="sm:col-start-2 sm:col-end-4 col-start-1 col-end-4 sm:[&>h2]:text-start [&>h2]:text-center 2xl:[&>h2]:text-[70px] xl:[&>h2]:text-[60px] lg:[&>h2]:text-[46px] sm:[&>h2]:text-[36px] [&>h2]:text-[30px] [&>h2]:leading-[1.1] [&>h2_span]:text-[#B81C15] [&>h2_span]:italic">
          <h2>
            We Combine <span>Creativity Storytelling</span> Strategy
          </h2>
        </div>
      </div>

      <div className="container max-w-300 grid lg:grid-cols-3 grid-cols-1 gap-10 items-center pt-12!">
      
        <div className="flex flex-col gap-10 lg:pr-5">
          <div className="flex items-center gap-5">
            <h3 className="text-4xl lg:text-[64px] font-bold">01.</h3>
            <div>
              <strong className="text-xl lg:text-2xl block pb-2">
                Quality Work
              </strong>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <h3 className="text-4xl lg:text-[64px] font-bold">02.</h3>
            <div>
              <strong className="text-xl lg:text-2xl block pb-2">
                Quality Work
              </strong>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <h3 className="text-4xl lg:text-[64px] font-bold">03.</h3>
            <div>
              <strong className="text-xl lg:text-2xl block pb-2">
                Quality Work
              </strong>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>
          </div>
        </div>

        {/* MIDDLE (IMAGES) */}
        <div className="relative flex justify-center gap-5 overflow-hidden group">
          <div className="pointer-events-none absolute top-0 left-0 w-full h-24 bg-linear-to-b from-white/80 to-transparent z-10"></div>
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white/80 to-transparent z-10"></div>

          <div className="h-150 overflow-hidden">
             <div className="scroll-up flex flex-col gap-5 will-change-transform">

    <div className="flex flex-col gap-5 [&_img]:rounded-xl">
      <Image src="/images/whychoose_1.webp" width={300} height={500} alt="" />
      <Image src="/images/whychoose_2.webp" width={300} height={500} alt="" />
      <Image src="/images/whychoose_3.webp" width={300} height={500} alt="" />
    </div>

    <div className="flex flex-col gap-5 [&_img]:rounded-xl">
      <Image src="/images/whychoose_1.webp" width={300} height={500} alt="" />
      <Image src="/images/whychoose_2.webp" width={300} height={500} alt="" />
      <Image src="/images/whychoose_3.webp" width={300} height={500} alt="" />
    </div>

  </div>
          </div>

          <div className="h-150 overflow-hidden">
            <div className="scroll-down flex flex-col gap-5 will-change-transform group-hover:[animation-play-state:paused]">

    <div className="flex flex-col gap-5  [&_img]:rounded-xl">
      <Image src="/images/whychoose_4.webp" width={300} height={500} alt="" className="block" />
      <Image src="/images/whychoose_5.webp" width={300} height={500} alt="" className="block" />
      <Image src="/images/whychoose_6.webp" width={300} height={500} alt="" className="block" />
    </div>

    <div className="flex flex-col gap-5  [&_img]:rounded-xl">
      <Image src="/images/whychoose_4.webp" width={300} height={500} alt="" className="block" />
      <Image src="/images/whychoose_5.webp" width={300} height={500} alt="" className="block" />
      <Image src="/images/whychoose_6.webp" width={300} height={500} alt="" className="block" />
    </div>

  </div>
          </div>
        </div>

        {/* RIGHT (FIXED STRUCTURE ONLY) */}
        <div className="flex flex-col gap-10 lg:pl-5 text-end">
          
          <div>
            <div className="flex justify-end gap-5">
              <div>
                <strong className="text-xl lg:text-2xl block pb-2">Quality Work</strong>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
              </div>
              <h3 className="text-4xl lg:text-[64px] font-bold mt-3">04.</h3>
            </div>
          </div>

          <div>
            <div className="flex justify-end gap-5">
              <div>
                <strong className="text-xl lg:text-2xl block pb-2">Quality Work</strong>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
              </div>
              <h3 className="text-4xl lg:text-[64px] font-bold mt-3">05.</h3>
            </div>
          </div>

          <div>
            <div className="flex justify-end gap-5">
              <div>
                <strong className="text-xl lg:text-2xl block pb-2">Quality Work</strong>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
              </div>
              <h3 className="text-4xl lg:text-[64px] font-bold mt-3">06.</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  );
};

export default WhyChoose;