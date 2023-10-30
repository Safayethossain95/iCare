
import React from 'react'
import style from './LandingPage.module.scss'
import MyNavbar from '../../components/navbar/MyNavbar'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import SmFeatures from '../../components/smallFeatures/SmFeatures'
import Locations from '../../components/locations/Locations'
import Service from '../../components/Service/Service'
import Institutes from '../../components/institutes/Institutes'
const LandingPage = () => {
  
  return (
    <>
        <Header/>
        <MyNavbar />
        <Banner/>
        <SmFeatures/>
        <Locations/>
        <Service/>
        <Institutes/>
    </>
  )
}

export default LandingPage