
import Image from "next/image";

const Count = () => {
  return (
    <div>
 
 <section className="sm:pt-20 pt-14 pb-16">
  <div className="max-w-290 mx-auto px-4 text-center">

    <h2 className="lg:text-[32px] md:text-[30px] text-[26px] xl:text-[40px] lg:leading-12 md:leading-10 leading-8 font-bold!">
      Unlock Your <span className="italic font-semi-bold!">Brand </span> Potential With 
      <span className="text-[#B81C15] font-bold!"> Strategic</span> Digital Marketing 
      <span className="italic">That </span> Drives Engagement, <Image src="/images/count img_1.webp" alt="logo" width={70} height={12} className="inline rounded-4xl mb-2" />  Growth, And 
      Measurable <span className="text-[#B81C15] font-bold!">Results In</span>  <Image src="/images/people.webp" alt="logo" width={100} height={20} className="inline mb-0.5]" />
       Today Competitive.
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 [&_div>h3]:md:leading-20 [&_div>h3]:sm:leading-12 [&_div>h3]:leading-10 [&_div>h3]:xl:text-[80px] [&_div>h3]:md:text-[60px] [&_div>h3]:sm:text-[40px] [&_div>h3]:text-[34px] [&_div>h3]:font-bold! xl:[&_div_p]:text-2xl lg:[&_div_p]:text-xl sm:[&_div_p]:text-base [&_div_p]:font-bold!">

      <div>
        <h3 >12K</h3>
        <p >Overall Experience</p>
      </div>

      <div>
        <h3>1K</h3>
        <p>Creative Professional</p>
      </div>

      <div>
        <h3>3K</h3>
        <p>Finished Projects</p>
      </div>

      <div>
        <h3>5K</h3>
        <p>Satisfied Customer</p>
      </div>

    </div>

  </div>
</section>



    </div>
  )
}

export default Count