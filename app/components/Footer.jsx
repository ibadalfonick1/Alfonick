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
    <div className="heroBox relative bg-[radial-gradient(circle_at_center,#b81c15_0%,#000000_100%)] text-white sm:pt-16 pt-10 pb-8 mx-5 mb-6 rounded-2xl overflow-hidden"
    >
      <Contact />

      <div
        className="max-w-412 mx-auto px-4 flex flex-wrap lg:flex-nowrap gap-10 relative before:content-[''] before:absolute before:-top-16 before:left-0 before:w-[98%] before:h-px
       before:bg-white
      "
      >
        <div className="xl:basis-[30%] basis-full">
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

          <div className="[&>strong]:text-[#FAFAFA] [&>strong]:text-md [&>strong]:tracking-[2px] [&>strong]:block [&>strong]:mb-3">
            <strong>Social Media</strong>

            <div className="flex gap-3 [&_a]:bg-white [&_a]:rounded-full [&_a]:p-2 [&_a]:text-[#b91b15] [&_a]:inline-flex [&_a]:items-center [&_a]:justify-center [&_a]:text-xl">
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

        <div className="basis-full md:basis-1/2 lg:basis-[15%] [&>h3]:text-[24px] [&>h3]:mb-5 sm:[&>h3]:mb-7 [&_li>a]:text-[16px] md:[&_li>a]:text-[18px] lg:[&_li>a]:text-[20px] md:[&_li_a]:text-[18px] lg:[&_li_a]:text-[20px] [&_li]:mb-4 [&_li]:tracking-[0.5px]">
          <h3 className="text-lg font-semibold ">Company</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <a href="#">About</a>
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
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="sm:basis-full md:basis-1/3 lg:basis-[25%] [&>h3]:text-[24px] [&>h3]:mb-5 [&_li_a]:text-[16px] md:[&_li_a]:text-[18px] lg:[&_li_a]:text-[20px] [&_li]:mb-4 [&_li]:tracking-[0.8px]">
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

        <div className="sm:basis-full md:basis-1/3 lg:basis-[25%] xl:pl-10 [&>h3]:text-[24px] [&>h3]:mb-5  [&_a]:text-[20px] [&_a]:block ">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="text-gray-200 text-sm [&_p]:mb-4 [&_p>a]:text-[16px] md:[&_p>a]:text-[18px] lg:[&_p>a]:text-[20px] [&_p]:text-[16px] md:[&_p]:text-[18px] lg:[&_p]:text-[20px] [&_p]:tracking-tight [&_p_a]:tracking-tight">
            <p className="flex items-center gap-x-3 pt-0">
              <FaMapMarkerAlt className="text-[#DD4242]" />
              C-30, Block-5, Gulshan-e-iqbal, Karachi.
            </p>

            <p className="flex items-center gap-x-3 pt-0">
              <BsFillTelephoneFill className="text-[#DD4242]" />
              <a href="tel:02134800227">021-34800227</a>
            </p>

            <p className="flex items-center gap-x-3 pt-0">
              <IoMdMail className="text-[#DD4242]" />
              <a href="mailto:info@alfonickinternational.com">
                info@alfonickinternational.com
              </a>
            </p>

            <p className="flex items-center gap-x-3 pt-0">
              <MdOutlineAccessTime className="text-[#DD4242]" />
              Mon - Sat: 09:00am - 6:00 pm
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-412 mx-auto px-4 mt-12 border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-200 gap-3 [&>p]:text-[16px] lg:[&>p]:text-xl">
        <p>©2024 Transparent. All rights reserved</p>

        <div className="flex gap-3 flex-wrap justify-center [&_a]:text-[16px] lg:[&_a]:text-[18px] [&_span]:text-base lg:[&_span]:text-xl">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms & Conditions</a>
          <span>|</span>
          <a href="#">Cookies Policy</a>
          <span>|</span>
          <a href="#">Map</a>
        </div>
      </div>
    </div>
  );
}
