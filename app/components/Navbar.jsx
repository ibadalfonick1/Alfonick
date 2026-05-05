import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-black">
      <div className="bg-black container ">
        <div className="flex justify-between items-center py-5">
          <Link href="/">
            <Image
              src="/images/alfonick.webp"
              alt="logo"
              width={160}
              height={50}
            />
          </Link>

          <Link
            href="#"
            className="headerBtn group relative inline-block border rounded-full py-3 pr-5 pl-15 hover:pr-15 hover:pl-5 text-white transition-all duration-300"
          >
            <span className="inline-block transition-all duration-300">
              Book A Demo
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
