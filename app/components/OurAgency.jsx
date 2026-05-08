import Image from "next/image";
import Link from "next/link";


const OurAgency = () => {
  return (
    <>
      <section className="md:pt-15 pt-7">
        <div className="">
          <div className="container m-auto grid sm:grid-cols-13 grid-cols-1 md:gap-14 gap-5 py-10!">
            <div className="lg:col-start-1 lg:col-end-5 sm:col-start-1 sm:col-end-7 col-start-1 col-end-13 lg:[&_span]:text-2xl md:[&_span]:text-xl [&_span]:text-base sm:[&_p]:pt-8 [&_p]:pt-4">
              <span className="relative inline-block pl-24 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:m-auto before:w-20 before:h-3 before:bg-[url('/images/line.webp')] before:bg-no-repeat before:bg-contain">
                Creative Space
              </span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s,
              </p>
            </div>
            <div className="lg:col-start-5 lg:col-end-13 sm:col-start-7 sm:col-end-13 col-start-1 col-end-13 sm:[&>h2]:text-start [&>h2]:text-center 2xl:[&>h2]:text-[70px] xl:[&>h2]:text-[60px] lg:[&>h2]:text-[46px] sm:[&>h2]:text-[36px] [&>h2]:text-[30px] sm:[&>h2]:pt-0 [&>h2]:pt-5 [&>h2]:leading-[1.1] [&>h2_span]:text-[#B81C15] [&>h2_span]:italic ">
              <h2>
                Our Agency <span> Snaps</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-8 [&_img]:h-auto [&_img]:rounded-xl pb-10 scrollLeft">

            <Image src="/images/agency_1.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_2.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_3.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_4.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_5.webp" alt="logo" width={500} height={100} />


             <Image src="/images/agency_1.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_2.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_3.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_4.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_5.webp" alt="logo" width={500} height={100} />


          </div>

          <div className="text-center">
           <Link
            href="#"
            className="headerBtn group relative inline-block border rounded-full py-3 pr-5 pl-15 hover:pr-15 hover:pl-5 text-black transition-all duration-300 text-center"
          >
            <span className="inline-block transition-all duration-300">
              View All
            </span>
          </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default OurAgency;
