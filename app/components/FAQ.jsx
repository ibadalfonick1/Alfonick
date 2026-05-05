"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      question: "What is SEO and why is it important?",
      answer:
        "SEO (Search Engine Optimization) is the process of improving your website to increase its visibility on search engines like Google. It helps your website appear higher in search results when users search for relevant keywords. This leads to more organic traffic without paid ads. SEO also builds trust and credibility for your brand. Overall, it is essential for long-term online growth.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is not instant and usually takes time to show meaningful results. In most cases, you can expect noticeable improvements within 3 to 6 months. However, this depends on competition, keyword difficulty, and your strategy. Consistency in content and optimization plays a big role. Long-term effort brings the best results.",
    },
    {
      question: "What are the key factors that influence SEO rankings?",
      answer:
        "There are multiple factors that impact SEO rankings on search engines. High-quality content is one of the most important elements. Backlinks from trusted websites also improve authority. Website speed and mobile responsiveness matter a lot. Technical SEO like proper structure and indexing is also critical. All these factors together improve rankings.",
    },
    {
      question: "Do I need to hire an SEO agency, or can I do SEO myself?",
      answer:
        "You can definitely learn and implement SEO on your own with enough time and effort. However, SEO agencies bring experience, tools, and proven strategies. They can help you achieve results faster and avoid common mistakes. If your project is serious or competitive, hiring experts can be beneficial. Otherwise, self-learning is also a good start.",
    },
    {
      question: "How much does SEO cost?",
      answer:
        "SEO costs vary depending on the scope of work and expertise required. Small businesses may spend a few hundred dollars per month. Larger companies can spend thousands for advanced strategies. Pricing depends on services like content creation, backlinks, and technical optimization. It is usually a long-term investment rather than a one-time cost. Good SEO delivers strong ROI over time.",
    },
    {
      question: "Can I rank #1 on Google for any keyword?",
      answer:
        "Ranking #1 on Google is possible but not guaranteed for every keyword. Highly competitive keywords are difficult and require strong authority. Your website's quality, backlinks, and content all matter. Consistent effort improves your chances over time. Targeting the right keywords is also very important. Smart strategy leads to better success.",
    },
    {
      question: "Is SEO a one-time effort, or does it require ongoing maintenance?",
      answer:
        "SEO is not a one-time task and requires continuous effort. Search engine algorithms keep changing regularly. Competitors are also constantly improving their websites. You need to update content and optimize regularly. Monitoring performance and fixing issues is also important. Ongoing SEO ensures long-term success.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-[#f5f5f5] min-h-screen px-6 md:px-10 lg:px-20 py-20">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
            <span className="text-xs t-0 b-0 m-auto px-5 py-1.5 bg-[#B81C150D] border border-[#B81C150D] text-[#B81C15] rounded-full">
             Frequently Asked Questions
             </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[56px] font-semibold text-gray-900 leading-[1.1] tracking-[-1px] mt-[25px]">
              <span className="block">Got Questions?</span>
              <span> We've <span className="text-[#B81C15] italic">Got Answers!</span>
              </span>
            </h2>
        </div>

        <div className="flex flex-col gap-4">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-[#eeeeee] border border-[#0D0D0D1A] rounded-[30px] overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4">
                <p className="text-[#222] text-[16px] md:text-[17px] font-semibold lg:text-[18px] text-left">
                  {item.question}
                </p>

                <div className="w-8.5 h-8.5 flex items-center justify-center rounded-[10px] bg-[#B81C15]">
                   <FaArrowRight className={`text-white text-sm transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""}`}/>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-75 " : "max-h-0"
                }`}
              >
                <div className=" rounded-[20px] p-4 pt-0!">
                  <p className="text-[#222] text-sm leading-6">
                    {item.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}