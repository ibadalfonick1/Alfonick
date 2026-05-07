import React from 'react'
import Header from '../components/Header'
import AboutHero  from '../components/AboutHero'
import AboutOurCompany  from '../components/AboutOurCompany'
import BrandMarquee from '../components/BrandMarquee'
import Process  from '../components/Process'
import AboutWhyChoose  from '../components/AboutWhyChoose'
import AgencySnap from '../components/AgencySnap'
import FAQ  from '../components/FAQ'
import Footer  from '../components/Footer'



const page = () => {
  return (
    <>
    <Header />
    <AboutHero />
    <AboutOurCompany />
    <BrandMarquee />
    <Process />
    <AboutWhyChoose />
    <AgencySnap/>  
    <FAQ />   
    <Footer />   

    </>
  )
}

export default page