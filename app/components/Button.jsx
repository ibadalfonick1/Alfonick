import Link from "next/link";

const Button = ({ btn }) => {
  return (
    <Link
      href="#"
      className="headerBtn group relative inline-block border rounded-full py-3 pr-5 pl-15 hover:pr-15 hover:pl-5 text-[#222222] transition-all duration-300"
    >
      <span className="inline-block transition-all duration-300">
        {btn}
      </span>
    </Link>
  );
};

export default Button;