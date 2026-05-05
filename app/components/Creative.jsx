import { FaArrowRight } from "react-icons/fa";
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
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took "
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


export default function Creative(){
    return(
      <>
    <section className="w-full bg-[#f7f7f7] px-8 md:px-16 py-14">
       <div className="max-w-7xl mx-auto">
       <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
            <div className="relative flex items-center pl-15 mb-3">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-[2px] bg-[#B81C15]"></span>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#B81C15]"></span>
            <p className="text-[18px] sm:text-xl font-medium text-gray-900 tracking-tight ">Who Are We</p>
            </div>

           <h2 className=" font-[Archivo] text-3xl lg:text-5xl md:text-4xl sm:text-4xl font-black leading-[1.1] text-black">
           We are <span className="text-[#B81C15] font-bold font-[Technica]">CREATIVE</span>
           <span className="block">Digital marketing</span><span className="block">Agency from Pakistan</span></h2>

           <div className="absolute top-12 right-10">
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

           <p className="text-gray-500 mt-4 leading-[1.5] max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
           </p>

<button className="group relative w-[160px] h-[45px] mt-6 border border-gray-300 rounded-full overflow-hidden hover:bg-[#B81C15] transition-all duration-300 ease-in-out">
  
  <span className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#B81C15] flex items-center justify-center text-white
  transition-all duration-300 ease-in-out group-hover:left-[calc(100%-38px)] group-hover:bg-white group-hover:text-[#B81C15]">
    
    <FaArrowRight />
    
  </span>
  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black transition-all duration-300 ease-in-out
  group-hover:right-auto group-hover:left-3 group-hover:text-white">
    
    Read More
    
  </span>

</button>
           </div>
        </div>

     <div className="grid md:grid-cols-3 md:gap-20 gap-10 mt-12">
           {features.map((feature) => (
            <div key={feature.id}>
              <h2 className="text-4xl md:text-4xl xl:text-5xl font-light text-gray-300 text-white [-webkit-text-stroke:1px_#464545]">
                {feature.id}. <span className="text-black sm:text-[26px] md:text-[26px] md:block xl:inline xl:text-[30px] text-[30px] font-semibold [-webkit-text-stroke:0]">{feature.title}</span>
              </h2>
              <p className="mt-3 text-gray-500 leading-5 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        </div>

       
    </section>

    <section>
          <div className="overflow-hidden w-full bg-[#f7f7f7] whitespace-nowrap py-10 ">
          <div className="flex w-max marquee gap-12">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-8 shrink-0"
              >
            <h2
             className={`text-3xl md:text-5xl font-bold uppercase ${
             index % 2 === 0 ? "text-black" : "text-[#B81C15]"
             }`}>
             {item}
             </h2>

                <Image
                  src="/images/star-img.png"
                  alt="star"
                  width={40}
                  height={40}
                />
              </div>
            ))}
          </div>
        </div>
    </section>
    </>
    );
}




