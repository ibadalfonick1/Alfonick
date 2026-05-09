import Image from "next/image";
import Link from "next/link";
import Contact from "./Contact";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdOutlineAccessTime } from "react-icons/md";

export default function Footer() {
  return (
    <div className="heroBox z-99 relative bg-[radial-gradient(circle_at_center,#b81c15_0%,#000000_100%)] sm:pt-16 pt-10 pb-8 mx-3 mb-6 rounded-2xl overflow-hidden">

      <Contact />

      <div className="max-w-420 mx-auto px-3.75 md:pb-15 pb-8 flex flex-wrap lg:flex-nowrap gap-10 relative before:content-[''] before:absolute before:-top-16 before:left-0 before:right-0 before:w-[98%] before:m-auto before:h-px before:bg-white after:content-[''] after:absolute after:w-full after:h-full after:bg-[url('/images/footer Shadow.webp')] after:bg-contain after:bg-no-repeat after:-z-99">
        <div className="xl:basis-[30%] lg:basis-[30%] basis-full">
          <Link href="/">
            <Image
              src="/images/alfonick.webp"
              alt="logo"
              width={220}
              height={58}
              className="mb-6"
            />
          </Link>

          <p className="text-lg text-[#FAFAFA] mb-6">
            Lorem ipsum dolor sit amet, consectetur
            <span className="block"> consectetur adipiscing consect.</span>
          </p>

          <div className="[&>strong]:text-[#FAFAFA] [&>strong]:text-lg [&>strong]:tracking-[2px] [&>strong]:block [&>strong]:mb-3">
            <strong>Social Media</strong>

            <div className="flex gap-3 [&_a]:bg-white [&_a]:hover:bg-[#b91b15] [&_a]:rounded-full [&_a]:p-2 [&_a]:hover:text-white [&_a]:text-[#b91b15] [&_a]:inline-flex [&_a]:items-center [&_a]:justify-center [&_a]:text-xl">
              <Link href="#">
                <TiSocialFacebook />
              </Link>
              <Link href="#">
                <IoLogoTwitter />
              </Link>
              <Link href="#">
                <FaLinkedinIn />
              </Link>
              <Link href="#">
                <AiFillInstagram />
              </Link>
            </div>
          </div>
        </div>

        <div className="basis-full md:basis-1/2 lg:basis-[20%] [&>h3]:text-[24px] [&>h3]:mb-5 sm:[&>h3]:mb-7 [&>h3]:text-white! [&_li>a]:text-[17px] md:[&_li>a]:text-[18px] lg:[&_li>a]:text-[20px] md:[&_li_a]:text-[18px] lg:[&_li_a]:text-[20px] [&_li]:mb-4 [&_li]:tracking-[0.5px] [&_li>a]:text-white [&_li>a]:hover:text-[#b41b15]">
          <h3 className="text-lg font-semibold ">Company</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="/careers">Career</a>
            </li>
            <li>
              <a href="/blogs">Blog</a>
            </li>
          </ul>
        </div>

        <div className="sm:basis-full md:basis-1/3 lg:basis-[25%] [&>h3]:text-[24px] [&>h3]:text-white! [&>h3]:mb-5 sm:[&>h3]:mb-7 [&_li_a]:text-[17px] md:[&_li_a]:text-[18px] lg:[&_li_a]:text-[20px] [&_li]:mb-4 [&_li]:tracking-[0.8px] [&_li>a]:text-white [&_li>a]:hover:text-[#b41b15]">
          <h3 className="text-lg font-semibold mb-5">Web Solution</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">UI/UX Design</a>
            </li>
            <li>
              <a href="#">Digital Marketing Services</a>
            </li>
            <li>
              <a href="#">Branding & Communication</a>
            </li>
            <li>
              <a href="#">Ecommerce Web Development</a>
            </li>
            <li>
              <a href="#">Mobile App Development</a>
            </li>
          </ul>
        </div>

        <div className="sm:basis-full md:basis-1/3 lg:basis-[25%] [&>h3]:text-white! xl:pl-10 [&>h3]:text-[24px] [&>h3]:mb-5 sm:[&>h3]:mb-7 [&_a]:text-[20px] [&_a]:block ">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="[&_p]:text-white [&_p>a]:text-white [&_p>a]:hover:text-[#b41b15] text-sm [&_p]:mb-4 [&_p>a]:text-[17px] md:[&_p>a]:text-[18px] lg:[&_p>a]:text-[20px] [&_p]:text-[17px] md:[&_p]:text-[18px] lg:[&_p]:text-[20px] [&_p]:tracking-tight [&_p_a]:tracking-tight">
            <p className="flex items-start gap-x-3 pt-0">
              <FaMapMarkerAlt className="text-[#DD4242] text-xl mt-1" />
              C-30, Block-5, Gulshan-e-iqbal, Karachi.
            </p>

            <p className="flex items-center gap-x-3 pt-0">
              <BsFillTelephoneFill className="text-[#DD4242] text-xl" />
              <a href="tel:02134800227">021-34800227</a>
            </p>

            <p className="flex items-center gap-x-3 pt-0">
              <IoMdMail className="text-[#DD4242] text-xl" />
              <a href="mailto:info@alfonickinternational.com">
                info@alfonickinternational.com
              </a>
            </p>

            <p className="flex items-center gap-x-3 pt-0">
              <MdOutlineAccessTime className="text-[#DD4242] text-2xl" />
              Mon - Sat: 09:00am - 6:00 pm
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-420 mx-auto px-3.75 mt-12 relative before:content-[''] before:absolute before:-top-3 before:left-auto before:right-auto before:w-[98%] before:m-auto before:h-px before:bg-white pt-6 flex flex-col md:flex-row justify-between items-center gap-3 [&>p]:text-[17px] lg:[&>p]:text-xl [&>p]:text-white">
        <p>©2026 Transparent. All rights reserved</p>

        <div className="flex sm:gap-3 gap-2 flex-wrap justify-center [&_a]:text-[16px] lg:[&_a]:text-[18px] [&_a]:text-white [&_a]:hover:text-[#b41b15] [&_span]:text-base lg:[&_span]:text-xl [&_span]:text-white">
          <Link href="#">Privacy Policy</Link>
          <span>|</span>
          <Link href="#">Terms & Conditions</Link>
          <span>|</span>
          <Link href="#">Cookies Policy</Link>
          <span>|</span>
          <Link href="#">Map</Link>
        </div>
      </div>
    </div>
  );
}
