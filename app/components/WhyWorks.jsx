// export default function CareersPage() {
//   return (
//     <section className="py-16 px-6 md:px-16">
//     <div className="max-w-7xl mx-auto px-4 py-16">
//       <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">
//         <div>
//         <span className="text-xs px-5 py-1.5 bg-[#B81C150D] border border-[#B81C150D] text-[#B81C15] rounded-full">
//           OUR CULTURE
//         </span>
//           <h2 className="text-[36px] md:text-[44px] lg:text-[56px] font-bold text-[#222] leading-[1.1] tracking-[-1px] mt-[15px]">
//             Why Work <span className="text-[#B81C15] italic block">With Us</span>
//           </h2>
//         </div>

//         <p className="text-[#22222299] text-2xl max-w-[480px]">
//           We don’t just build products — we build careers. Join a team where your growth shapes the future.
//         </p>
//       </div>
//       <div className="grid grid-cols-12 gap-6">
//         <div className="col-span-12 md:col-span-6 bg-white border rounded-2xl p-6 relative shadow-md">
//           <h3 className="font-semibold text-lg">Growth</h3>
//           <p className="text-sm text-gray-600 mt-2">
//             Continuous learning with mentorship programs and development budgets.
//           </p>
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500" />
//         </div>

//         <div className="col-span-12 md:col-span-3 bg-white border rounded-2xl p-6">
//           <h3 className="font-semibold">Innovation</h3>
//           <p className="text-sm text-gray-600 mt-2">
//             Experiment with cutting-edge tech.
//           </p>
//         </div>

//         <div className="col-span-12 md:col-span-3 bg-white border rounded-2xl p-6">
//           <h3 className="font-semibold">Flexibility</h3>
//           <p className="text-sm text-gray-600 mt-2">
//             Remote-friendly culture.
//           </p>
//         </div>

//         <div className="col-span-12 md:col-span-3 bg-white border rounded-2xl p-6">
//           <h3 className="font-semibold">Team Culture</h3>
//           <p className="text-sm text-gray-600 mt-2">
//             Collaborative environment.
//           </p>
//         </div>

//         <div className="col-span-12 md:col-span-3 bg-white border rounded-2xl p-6">
//           <h3 className="font-semibold">Innovation</h3>
//           <p className="text-sm text-gray-600 mt-2">
//             Build impactful ideas.
//           </p>
//         </div>

//         <div className="col-span-12 md:col-span-6 bg-white border rounded-2xl p-6 relative shadow-md">
//           <h3 className="font-semibold text-lg">Flexibility</h3>
//           <p className="text-sm text-gray-600 mt-2">
//             Work from anywhere with async-first culture and unlimited PTO.
//           </p>
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500" />
//         </div>

//       </div>
//     </div>
//     </section>
//   );
// }

import { FaArrowRight } from "react-icons/fa";

export default function CareersPage() {
  return (
    <section className="py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">
          <div>
            <span className="text-xs px-5 py-1.5 bg-[#B81C150D] border border-[#B81C150D] text-[#B81C15] rounded-full">
              OUR CULTURE
            </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[56px] font-bold text-[#222] leading-[1.1] tracking-[-1px] mt-[15px]">
              Why Work <span className="text-[#B81C15] italic block">With Us</span>
            </h2>
          </div>
          <p className="text-[#22222299] text-2xl max-w-[480px]">
            We don’t just build products — we build careers. Join a team where your growth shapes the future.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 bg-white border rounded-2xl p-6 relative shadow-md overflow-hidden">
            <div className="w-10 h-10 flex items-center justify-center bg-[#B81C150D] rounded-lg mb-10">
              <FaArrowRight className="text-[#B81C15] text-xl" />
            </div>

            <div className="absolute top-4 right-4 text-right mb-10">
              <p className="text-[#B81C15] font-bold text-[30px]">200+</p>
              <p className="text-xs text-[#222222B2]">Hours training yearly</p>
            </div>
            <h3 className="font-bold text-2xl text-[#222]">Growth</h3>
            <p className="text-sm text-[#222222B2] mt-2">
              Continuous learning with mentorship programs, conferences, and personal development budgets.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#B81C15]" />
          </div>

          <div className="col-span-12 md:col-span-3 bg-white border rounded-2xl p-6 relative">
            <div className="w-10 h-10 flex items-center justify-center bg-[#B81C150D] rounded-lg mb-10">
              <FaArrowRight className="text-[#B81C15] text-xl" />
            </div>

            <div className="absolute top-4 right-4 text-right mb-10">
              <p className="text-[#B81C15] font-bold text-[30px]">40%</p>
              <p className="text-xs text-[#222222B2]">Passion time</p>
            </div>

            <h3 className="font-bold text-2xl text-[#222]">Innovation</h3>
            <p className="text-sm text-[#222222B2] mt-2">
              Experiment with cutting-edge tech.
            </p>
          </div>

          <div className="col-span-12 md:col-span-3 bg-white border rounded-2xl p-6 relative">
            <div className="w-10 h-10 flex items-center justify-center bg-[#B81C150D] rounded-lg mb-10">
              <FaArrowRight className="text-[#B81C15] text-xl" />
            </div>

            <div className="absolute top-4 right-4 text-right mb-10">
              <p className="text-[#B81C15] font-bold text-[30px]">100%</p>
              <p className="text-xs text-[#222222B2]">Remote</p>
            </div>

            <h3 className="font-bold text-2xl text-[#222]">Flexibility</h3>
            <p className="text-sm text-[#222222B2] mt-2">
              Hybrid & remote-friendly culture.
            </p>
          </div>

          <div className="col-span-12 md:col-span-3 relative bg-white border rounded-2xl p-6">
            <div className="w-10 h-10 flex items-center justify-center bg-[#B81C150D] rounded-lg mb-10">
              <FaArrowRight className="text-[#B81C15] text-xl" />
            </div>

            <div className="absolute top-4 right-4 text-right mb-10">
              <p className="text-[#B81C15] font-bold text-[30px]">40%</p>
              <p className="text-xs text-[#222222B2]">Remote</p>
            </div>

            <h3 className="font-bold text-2xl text-[#222]">Team Culture</h3>
            <p className="text-sm text-[#222222B2] mt-2">
              Collaborative and inclusive environment.
            </p>
            </div>

          <div className="col-span-12 md:col-span-3 bg-white border relative rounded-2xl p-6">

            <div className="w-10 h-10 flex items-center justify-center bg-[#B81C150D] rounded-lg mb-10">
              <FaArrowRight className="text-[#B81C15] text-xl" />
            </div>

            <div className="absolute top-4 right-4 text-right mb-10">
              <p className="text-[#B81C15] font-bold text-[30px]">40%</p>
              <p className="text-xs text-[#222222B2]">Remote</p>
            </div>

            <h3 className="font-bold text-2xl text-[#222]">Global Impact</h3>
            <p className="text-sm text-[#222222B2] mt-2">
              Build solutions used worldwide.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 bg-white border rounded-2xl p-6 relative shadow-md overflow-hidden">
            <div className="w-10 h-10 flex items-center justify-center bg-[#B81C150D] rounded-lg mb-10">
              <FaArrowRight className="text-[#B81C15] text-xl" />
            </div>

            <div className="absolute top-4 right-4 text-right mb-10">
              <p className="text-[#B81C15] font-bold text-[30px]">50%</p>
              <p className="text-xs text-[#222222B2]">Remote</p>
            </div>

            <h3 className="font-bold text-2xl text-[#222]">Flexibility</h3>
            <p className="text-sm text-[#222222B2] mt-2">
              Work from anywhere with async-first culture and unlimited PTO.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#B81C15]" />
          </div>

        </div>
      </div>
    </section>
  );
}