import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: 1,
    image: "/images/Blog_img.webp",
    date: "April 23, 2025",
    category: "TECH",
    title: "AI Driven: Unlocking The Magic Of Imaginative Design Top-Notch",
    link: "/#",
  },
  {
    id: 2,
    image: "/images/Blog_img.webp",
    date: "April 23, 2025",
    category: "TECH",
    title: "AI Driven: Unlocking The Magic Of Imaginative Design Top-Notch",
    link: "/#",
  },
  {
    id: 3,
    image: "/images/Blog_img.webp",
    date: "April 23, 2025",
    category: "TECH",
    title: "AI Driven: Unlocking The Magic Of Imaginative Design Top-Notch",
    link: "/#",
  },
  {
    id: 4,
    image: "/images/Blog_img.webp",
    date: "April 23, 2025",
    category: "TECH",
    title: "AI Driven: Unlocking The Magic Of Imaginative Design Top-Notch",
    link: "/#",
  },
  {
    id: 5,
    image: "/images/Blog_img.webp",
    date: "April 23, 2025",
    category: "TECH",
    title: "AI Driven: Unlocking The Magic Of Imaginative Design Top-Notch",
    link: "/#",
  },
  {
    id: 6,
    image: "/images/Blog_img.webp",
    date: "April 23, 2025",
    category: "TECH",
    title: "AI Driven: Unlocking The Magic Of Imaginative Design Top-Notch",
    link: "/#",
  },
  {
    id: 7,
    image: "/images/Blog_img.webp",
    date: "April 23, 2025",
    category: "TECH",
    title: "AI Driven: Unlocking The Magic Of Imaginative Design Top-Notch",
    link: "/#",
  },
  {
    id: 8,
    image: "/images/Blog_img.webp",
    date: "April 23, 2025",
    category: "TECH",
    title: "AI Driven: Unlocking The Magic Of Imaginative Design Top-Notch",
    tag: "",
    link: "/#",
  },
];

export default function Blog() {
  return (
     <section className="max-w-6xl mx-auto px-4 py-16">

      <div className="text-center mb-12">
            <span className="text-xs px-5 py-1.5 bg-[#B81C150D] !font-bold border border-[#B81C150D] text-[#B81C15] rounded-full">
             Frequently Asked Questions
             </span>
        <h2 className="text-[36px] md:text-[44px] font-['Trump_Gothic_Pro'] lg:text-[56px] !font-bold text-[#222] leading-[1.1] tracking-[-1px] mt-[25px] uppercase">
          Simple Tips That <span className="block !font-bold"> Actually Work</span>
        </h2>
      </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-8">

  {articles.map((item) => (
    <div key={item.id}>
      <Link href={item.link} className="block overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.title}
          width={600}
          height={400}
          className="w-full h-[320px] object-cover transition duration-500 hover:scale-105"/>
      </Link>
      <div className="mt-2">
        <div className="flex items-center gap-3 text-lg text-[#B81C15]">
          <span>{item.date}</span>
          <span className="mx-2 w-[26px] h-[2px] rounded-full bg-[#B81C15] inline-block"></span>
          <span>{item.category}</span>
        </div>
        <Link href={item.link}>
          <h3 className="mt-2 lg:text-[22px] md:text-xl text-lg font-semibold text-[#222] leading-snug hover:text-[#B81C15] transition">
            {item.title}</h3>
        </Link>
        <p className="mt-2 text-sm text-gray-600">
          {item.tag}</p>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}