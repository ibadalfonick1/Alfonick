import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-3">
      <div className=" container ">
        <div className="flex justify-between items-center px-5 pt-10 pb-5">
          <Link href="/" className="sm:[&>img]:w-40 [&>img]:w-30">
            <Image
              src="/images/alfonick.webp"
              alt="logo"
              width={160}
              height={50}
            />
          </Link>

        <Link
            href="#"
            className="headerBtn group relative inline-block border rounded-full md:py-3 sm:py-4 py-3! sm:pr-5 pr-3 sm:pl-15 pl-12 hover:pr-15 hover:pl-5 text-white transition-all duration-300"
          >
            <span className="inline-block transition-all duration-300 lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]">
              Book A Demo
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
