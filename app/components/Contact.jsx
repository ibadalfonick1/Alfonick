import { IoIosMenu } from "react-icons/io";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="mt-10 max-w-236 m-auto text-center [&>span]:border [&>span]:border-[#FFFFFF26] [&>span]:text-white [&>span]:shadow-[0_1px_7px_1px_#FFFFFF1A] [&>span]:rounded-full [&>span]:px-10 [&>span]:py-3 [&>span]:text-sm [&>h2]:text-[28px] sm:[&>h2]:text-[36px] md:[&>h2]:text-[42px] md:[&>h2]:2 lg:[&>h2]:text-[48px] [&>h2]:text-white! [&>h2]:mb-4 [&>h2]:mt-6 sm:[&>h2]:mt-4">
        <span> Contacty us</span>
        <h2>Get In Touch With Us</h2>
      </div>

      <form action="" className="max-w-227 mx-auto sm:mb-40 mb-32 px-4">
        <div className="lg:px-8 px-4 pt-7 pb-10 bg-[#FFFFFF40] rounded-2xl ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className="[&>label]:block [&>label]:text-white [&>label]:mb-3">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="FIRST+LAST"
                className="h-12 w-full rounded-md bg-white text-black px-3 py-1 text-base focus:outline-none"
                required
              />
            </div>

            <div className="[&>label]:block [&>label]:text-white [&>label]:mb-3">
              <label htmlFor="">Company/ Organization</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="LEGAL ENTITY OR BRAND"
                className="h-12 w-full rounded-md bg-white text-black px-3 py-1 text-base focus:outline-none"
                required
              />
            </div>

            <div className="[&>label]:block [&>label]:text-white [&>label]:mb-3">
              <label htmlFor="">Work Email</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="EMAIL@WORK-DOMAIN"
                className="h-12 w-full rounded-md bg-white text-black px-3 py-1 text-base focus:outline-none"
                required
              />
            </div>

            <div className="[&>label]:block [&>label]:text-white [&>label]:mb-3">
              <label htmlFor="">CONTACT (WITH COUNTRY CODE)</label>
              <input
                type="tel"
                name=""
                id=""
                placeholder="(+91) _ _ _ _ _ _ _ _ _ _ _ _"
                className="h-12 w-full rounded-md bg-white text-black px-3 py-1 text-base focus:outline-none"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="relative rounded-full bg-white hover:bg-[#b81c15] text-black py-3 pr-8 pl-12 uppercase cursor-pointer before:content-[''] before:absolute before:left-7 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-black before:rounded-full"
          >
            Send Message
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center p-3 ml-3 bg-white border border-gray-300 rounded-full">
            <IoIosMenu className="text-black text-xl" />
          </Link>
        </div>
      </form>
    </>
  );
};

export default Contact;
