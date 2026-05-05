// "use client";

// import Image from "next/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export default function Testimonial() {
//   const testimonials = [
//     {
//       name: "Helena Wound",
//       role: "Business Owner",
//       text: "Lorem Ipsum is simply dummy text of the printing industry.",
//       images: ["/images/t1.jpg", "/images/t2.jpg", "/images/t3.jpg", "/images/t4.jpg"],
//     },
//     {
//       name: "John Doe",
//       role: "Designer",
//       text: "Amazing service and great experience overall.",
//       images: ["/images/t1.jpg", "/images/t2.jpg", "/images/t3.jpg", "/images/t4.jpg"],
//     },
//   ];

//   return (
//     <div className="bg-[#1f1f1f] py-16 px-6">
//       <div className="max-w-6xl mx-auto">

//         <Carousel className="w-full">

//           <CarouselContent>

//             {testimonials.map((item, i) => (
//               <CarouselItem key={i}>
                
//                 <div className="grid md:grid-cols-2 gap-10 items-center">

//                   {/* LEFT IMAGES */}
//                   <div className="grid grid-cols-2 gap-4">
//                     {item.images.map((img, idx) => (
//                       <Image
//                         key={idx}
//                         src={img}
//                         width={200}
//                         height={200}
//                         className="rounded-lg object-cover"
//                         alt=""
//                       />
//                     ))}
//                   </div>

//                   {/* RIGHT CONTENT */}
//                   <div className="text-white relative">

//                     <div className="text-red-500 text-5xl font-bold">“</div>

//                     <p className="text-gray-300 text-sm mt-2">
//                       {item.text}
//                     </p>

//                     <div className="mt-6">
//                       <h4 className="font-semibold">{item.name}</h4>
//                       <span className="text-gray-400 text-sm">{item.role}</span>
//                     </div>

//                   </div>

//                 </div>

//               </CarouselItem>
//             ))}

//           </CarouselContent>

//           {/* NAV BUTTONS */}
//           <CarouselPrevious />
//           <CarouselNext />

//         </Carousel>

//       </div>
//     </div>
//   );
// }