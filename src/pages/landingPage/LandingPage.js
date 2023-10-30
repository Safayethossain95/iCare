
import React from 'react'
import style from './LandingPage.module.scss'
import MyNavbar from '../../components/navbar/MyNavbar'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import SmFeatures from '../../components/smallFeatures/SmFeatures'
import Locations from '../../components/locations/Locations'
import Service from '../../components/Service/Service'
import Institutes from '../../components/institutes/Institutes'
import AboutUs from '../../components/aboutus/AboutUs'
import WhyStudyAbroad from '../../components/whystudyabroad/WhyStudyAbroad'
import Stories from '../../components/stories/Stories'
import Footer from '../../components/footer/Footer'
const LandingPage = () => {
  
  return (
    <>
        <Header/>
        <MyNavbar/>
        <Banner/>
        <SmFeatures/>
        <Locations/>
        <AboutUs/>
        <Service/>
        <Institutes/>
        <WhyStudyAbroad/>
        <Stories/>
        <Footer/>
    </>
  )
}

export default LandingPage