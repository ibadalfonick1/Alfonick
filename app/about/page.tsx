import React from 'react'
import BrandMarquee from '../components/BrandMarquee'
import Process  from '../components/Process'
import PlatformSlider from '../components/PlatformSlider'
import AgencySnap from '../components/AgencySnap'
import FAQ  from '../components/FAQ'
import Footer from '../components/Footer'



const page = () => {
  return (
    <>

  <h1 className='text-6xl text-center pt-5'>About page</h1>
    <BrandMarquee />
    <Process />
    <PlatformSlider />
    <AgencySnap/>  
    <FAQ />   
    <Footer />

    </>
  )
}

export default page