import { FaArrowRight } from "react-icons/fa";

const cards = [
  {
    title: "Growth",
    stat: "200+",
    label: "Hours training yearly",
    description:
      "Continuous learning with mentorship programs, conferences, and personal development budgets.",
    span: "md:col-span-6",
  },
  {
    title: "Innovation",
    stat: "40%",
    label: "Time for passion projects",
    description:
      "Freedom to experiment with cutting-edge tech and bring bold ideas to life every day.",
    span: "md:col-span-3",
  },
  {
    title: "Flexibility",
    stat: "100%",
    label: "Remote-friendly roles",
    description:
      "Hybrid schedules, async-first culture, and unlimited PTO to keep you at your best.",
    span: "md:col-span-3",
  },
  {
    title: "Team Culture",
    stat: "50+",
    label: "Team events per year",
    description:
      "Collaborative, inclusive teams that celebrate wins together and support each other.",
    span: "md:col-span-6",
  },
];

export default function CareersPage() {
  return (
    <section className="py-16 px-6 md:px-16 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between lg:gap-10 gap-4 mb-12">
          <div>
            <span className="text-xs px-5 py-1.5 bg-[#B81C150D] text-[#B81C15] rounded-full border border-[#B81C150D]">
              OUR CULTURE
            </span>

            <h2 className="text-[36px] md:text-[44px] lg:text-[56px] font-bold text-[#222] leading-[1.1] tracking-[-1px] mt-4">
              Why Work{" "}
              <span className="text-[#B81C15] italic block">
                With Us
              </span>
            </h2>
          </div>

          <p className="text-[#22222299] text-base md:text-lg lg:text-xl xl:text-2xl max-w-[480px]">
            We don’t just build products — we build careers.
            Join a team where your growth shapes the future.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`col-span-12 ${card.span} bg-white border rounded-2xl p-6 relative overflow-hidden shadow-sm hover:shadow-md transition`}
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center bg-[#B81C150D] rounded-lg mb-10">
                <FaArrowRight className="text-[#B81C15] text-xl" />
              </div>

              {/* Stat */}
              <div className="absolute top-6 right-6 text-right">
                <p className="text-[#B81C15] font-bold text-[30px]">
                  {card.stat}
                </p>
                <p className="text-xs text-[#222222B2]">
                  {card.label}
                </p>
              </div>

              {/* Content */}
              <h3 className="font-bold text-2xl text-[#222]">
                {card.title}
              </h3>

              <p className="text-[14px] text-[#222222B2] mt-2 leading-6">
                {card.description}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#B81C15]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}