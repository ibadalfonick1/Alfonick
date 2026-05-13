import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoLightBulb } from "react-icons/go";
import { IoMdTime } from "react-icons/io";

export default function ApplicationProcess() {
  const steps = [
    {
      id: "01",
      step: "STEP 1",
      title: "Apply",
      desc: "Submit your application and portfolio through our simple online form.",
      side: "left",
      top: "top-[0px]",
      icon: FiArrowUpRight,
    },
    {
      id: "02",
      step: "STEP 2",
      title: "Screening",
      desc: "Our talent team reviews your profile and reaches out within 48 hours.",
      side: "right",
      top: "top-[210px]",
      icon: FaArrowTrendUp,
    },
    {
      id: "03",
      step: "STEP 3",
      title: "Interview",
      desc: "Meet the team through a series of conversations to explore mutual fit.",
      side: "left",
      top: "top-[420px]",
      icon: GoLightBulb,
    },
    {
      id: "04",
      step: "STEP 4",
      title: "Offer",
      desc: "Receive a competitive offer and start your journey with us!",
      side: "right",
      top: "top-[630px]",
      icon: IoMdTime,
    },
  ];

  return (
    <section className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center lg:mb-24 mb-15">
          <h2 className="lg:text-[51px] md:text-5xl sm:text-4xl text-[34px] font-bold! leading-[1.1]">
            Application{" "}
            <span className="text-[#B81C15] font-bold!">
              Process
            </span>
          </h2>

          <p className="text-[#22222299] text-base lg:text-xl mt-3">
            Four simple steps to join the team
          </p>
        </div>
        <div className="hidden lg:block relative h-[850px] max-w-6xl mx-auto">
<<<<<<< HEAD
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
=======
          {steps.map((item, index) => (
            <div
              key={index}
              className={`absolute left-1/2 -translate-x-1/2 ${item.top} w-full`}
            >

              <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-20">

                <h3
                  className="text-[64px] font-semibold leading-none text-[#B81C15]!"
                  style={{
                    textShadow: "0px 0px 30px rgba(221,66,66,0.9)",
                  }}
                >
                  {item.id}
                </h3>

                {index !== steps.length - 1 && (
                  <div
                    className="w-0.5 h-26.25 mt-4"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(184, 28, 21, 0) 10.1%, #B81C15 100%)",
                    }}
                  />
                )}
              </div>

>>>>>>> e12d78080606544674164e248010a5d65e8129d4
              <div
                key={index}
                className={`absolute left-1/2 -translate-x-1/2 ${item.top} w-full`}
              >
<<<<<<< HEAD
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
=======
                <div
                  className={`w-87.5 bg-white rounded-[14px] border border-[#E6E6E6] shadow-[0px_4px_24px_4px_#00000014] p-5 ${
                    item.side === "left"
                      ? "text-right"
                      : "text-left"
                  }`}
                >

                  <div
                    className={`flex items-center gap-2 mb-5 ${
                      item.side === "left"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                   <div className="w-9 h-9 rounded-[12px] bg-[#FFF2F1] flex items-center justify-center">
                     <FiArrowUpRight className="text-[#B81C15] text-[18px]" />
                   </div>

                    <span className="text-[10px] font-semibold tracking-[1.5px] text-[#B81C15] uppercase">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl !font-bold text-[#222] leading-none mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-[1.5] text-[#737373]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden relative max-w-md mx-auto">
          <div className="space-y-12">
            {steps.map((item, index) => (
              <div key={index} className="relative pl-20">

                <div className="absolute left-0 top-0 flex flex-col items-center">

>>>>>>> e12d78080606544674164e248010a5d65e8129d4
                  <h3
                    className="text-[64px] font-semibold leading-none !text-[#B81C15]"
                    style={{
                      textShadow: "0px 0px 30px rgba(221,66,66,0.9)",
                    }}
                  >
                    {item.id}
                  </h3>

                  {index !== steps.length - 1 && (
                    <div
                      className="w-[2px] h-[105px] mt-4"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(184, 28, 21, 0) 10.1%, #B81C15 100%)",
                      }}
                    />
                  )}
                </div>

                <div
                  className={`absolute top-0 ${
                    item.side === "left"
                      ? "right-[55%]"
                      : "left-[55%]"
                  }`}
                >
                  <div
                    className={`w-[350px] bg-white rounded-[14px] border border-[#E6E6E6] shadow-[0px_4px_24px_rgba(0,0,0,0.08)] p-5 ${
                      item.side === "left"
                        ? "text-right"
                        : "text-left"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-5 ${
                        item.side === "left"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div className="w-9 h-9 rounded-[12px] bg-[#FFF2F1] flex items-center justify-center">
                        <Icon className="text-[#B81C15] text-[18px]" />
                      </div>

                      <span className="text-[10px] font-semibold tracking-[1.5px] text-[#B81C15] uppercase">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl !font-bold text-[#222] leading-none mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-[1.5] text-[#737373]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:hidden relative max-w-md mx-auto">
          <div className="space-y-12">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-0 top-0 flex flex-col items-center">
                    <h3
                      className="text-[42px] font-semibold leading-none !text-[#B81C15]"
                      style={{
                        textShadow: "0px 0px 30px rgba(221,66,66,0.9)",
                      }}
                    >
                      {item.id}
                    </h3>
                    {index !== steps.length - 1 && (
                      <div
                        className="w-[2px] h-[90px] mt-4"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(184, 28, 21, 0) 10.1%, #B81C15 100%)",
                        }}
                      />
                    )}
                  </div>

                  <div className="bg-white rounded-[14px] border border-[#ececec] shadow-[0px_6px_20px_rgba(0,0,0,0.05)] p-6">
                    <div className="flex items-center gap-2 mb-3">

                      <div className="w-9 h-9 rounded-[12px] bg-[#FFF2F1] flex items-center justify-center">
                        <Icon className="text-[#B81C15] text-[14px]" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-[1px] text-[#B81C15] uppercase">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-[18px] !font-bold text-[#222] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[13px] leading-[1.5] text-[#737373]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}