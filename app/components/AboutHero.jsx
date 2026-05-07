import React from 'react'

const AboutHero = () => {
  return (
    <>

    {/* <section>

  <div className='bg-black py-40'>
 
 <div className='text-center [&>h1]:text-[90px] [&>h1]:text-white! [&>p]:text-white [&>p]:text-[20px] [&>p]:m-auto [&>p]:max-w-160' >
     <h1>ABout Us</h1>
     <p>We specialize in website development, branding, and promotion for developers, large manufacturing companies, transportation companies, and FMCG companies.</p>
</div>
  </div>

    </section> */}

<section className="-mt-24 mx-5 rounded-[20px] -z-9 relative overflow-hidden bg-black sm:py-40 pt-35! py-20!">
  
  <div className="absolute left-1/2 top-1/2 
    -translate-x-1/2 -translate-y-1/2
    w-250 h-250 rounded-full
    bg-[radial-gradient(circle,_rgba(255,0,0,0.9)_0%,_rgba(255,0,0,0.45)_25%,_rgba(255,0,0,0.12)_55%,_transparent_100%)]">
  </div>

  <div className='relative z-10 px-5 text-center 
    xl:[&>h1]:text-[90px]
    lg:[&>h1]:text-[70px]
    md:[&>h1]:text-[50px] 
    sm:[&>h1]:text-[36px]
    [&>h1]:text-[32px] 
    [&>h1]:text-white! 
    [&>p]:text-white 
    lg:[&>p]:text-[20px]
    sm:[&>p]:text-[18px] 
    [&>p]:text-[16px] 
    [&>p]:m-auto 
    [&>p]:max-w-225'>

    <h1>About Us</h1>

    <p>
      We specialize in website development, branding, and promotion 
      for developers, large manufacturing companies, transportation 
      companies, and FMCG companies.
    </p>

  </div>

</section>

    </>
  )
}

export default AboutHero