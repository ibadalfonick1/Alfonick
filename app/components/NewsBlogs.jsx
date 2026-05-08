import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "Are cobots the next wave of warehouse automation?",
    image: "/images/Artical-img1.webp",
    time: "4 Mins",
    tags: ["COBOT", "AUTOMATION", "COLLABORATION"],
    link: "/article/cobots",
  },
  {
    id: 2,
    title: "Trakr: India's homegrown Robotic Dog/Quadruped",
    image: "/images/Artical-img2.webp",
    time: "4 Mins",
    tags: ["QUADRUPED", "TRAKR", "INDUSTRIAL ROBOTICS"],    
    link: "/article/trakr",
  },
  {
    id: 3,
    title: "Addverbs Leap into Humanoid Robotics",
    image: "/images/Artical-img3.webp",
    time: "8 Mins",
    tags: ["HUMANOID ROBOT", "PHYSICAL AI", "DEXTROUS"],
    link: "/article/humanoid",
  },
];

export default function NewsBlogs() {
  return (
    <section className="max-w-414 m-auto px-4 md:pt-20 pt-12 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-9 mb-10">
        <div className="lg:col-span-1">
          <div className="relative pl-16 [&_h4]:text-2xl [&_h4]:font--medium">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-0.5 bg-[#B81C15]"></span>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#B81C15]"></span>
            <h4 className="text-lg font-medium text-[#222]">
              News & Blogs
            </h4>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-[36px] md:text-[44px] lg:text-[56px] font-semibold text-[#222] leading-[1.1] tracking-[-1px]">
          Explore{" "}
          <span className="text-[#B81C15] italic font-medium"> Articles And <br className="hidden md:block" />
          Real-World </span>{" "} Cases </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 md:gap-6 gap-10 ">

        {articles.map((item) => (
          <div key={item.id} className="group">

            <Link href={item.link}>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={500}
                  className="w-full h-84 md:h-[280px] lg:h-[380px] object-cover transition duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-90"
                />
              </div>
            </Link>

            <div className="mt-3 lg:mt-6 [&>a>h3]:text-base [&>a>h3]:font-medium [&>a>h3]:hover:text-[#B81C15]! [&>Link>h3]:transition">
              <Link href={item.link}>
                <h3>
                  {item.title}
                </h3>
              </Link>

              <p className="text-xs text-[#636466] lg:mt-2 mt-2 lg:mb-4 mb-4 font-[Archivo]!">
                {item.time}
              </p>

              <div className="flex flex-wrap gap-x-2 gap-y-6 mt-5">
                {item.tags.map((tag, index) => (
                  <Link key={index} href={`/tag/${tag.toLowerCase()}`}>
                    <span className="text-[12px] px-3 py-2.5 rounded-full bg-[#eff0f0] border border-[#D0D1D1] text-[#636466] hover:bg-[#B81C15] hover:text-white transition cursor-pointer">
                      {tag}
                    </span>
                  </Link>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}