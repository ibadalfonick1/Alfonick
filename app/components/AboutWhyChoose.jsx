import Image from "next/image";

export default function AboutWhyChoose() {
  return (
    
    <section className="pt-22 pb-10 px-4 md:px-16">
     
      <div className="pb-5 xl:[&>h2]:text-[50px] lg:[&>h2]:text-[46px] sm:[&>h2]:text-[36px] [&>h2]:mt-4 [&>h2]:text-[30px] sm:[&>h2]:pt-0 [&>h2]:pt-5 [&>h2]:leading-[1.1] [&>h2_span]:text-[#B81C15] [&>h2_span]:italic text-center [&>span]:px-6 [&>span]:py-3 [&>span]:italic [&>span]:uppercase [&>span]:rounded-4xl [&>span]:bg-[#B81C15]/5 [&>span]:text-[#B81C15]">
        <span> Built For Intelligent</span>
        <h2>
          Why Choose <span className="block"> Alfonick International </span>
        </h2>
      </div>

      <div className="max-w-371 m-auto sm:px-4 px-0 pt-4 grid md:grid-cols-2 gap-6 lg:gap-16 items-center">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/About Why Choose.webp"
            alt="TV"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <h3 className="text-[22px] md:text-[28px] lg:text-[40px] font-semibold text-[#222] mb-2 lg:mb-4 leading-snug">
            WHY BUSINESS TRUST US A DELIVER EXCELLENCE
          </h3>

          <p className="text-[#222] mb-4 text-[15px] md:text-[16px] lg:text-[18px] leading-6">
            At our agency, we combine creativity, strategy, and technology to
            deliver solutions that truly make an impact. Our team of experts
            works closely with each client to understand their unique
          </p>

          <ul className="space-y-4 mb-4 xl:[&_li]:text-[24px] lg:[&_li]:text-[20px] md:[&_li]:text-[18px] [&_li]:text-[17px]">
            {[1, 2, 3, 4].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Image
                  src="/images/About Why Icon.webp"
                  alt="icon"
                  width={18}
                  height={18}
                  className="lg:mt-1.25 mt-0"
                />

                <p className="text-[#222] text-[16px] lg:text-[20px]">
                  Struggling to communicate your brand's message
                </p>
              </li>
            ))}
          </ul>

           <button
            type="submit"
            className="relative rounded-full bg-black hover:bg-[#b81c15] text-white py-3 pr-8 pl-12 uppercase cursor-pointer before:content-[''] before:absolute before:left-7 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-white before:rounded-full">
            Contact Us
          </button>
          

        </div>
      </div>
    </section>
  );
}
