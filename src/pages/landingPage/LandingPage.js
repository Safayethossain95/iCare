
import React from 'react'
import style from './LandingPage.module.scss'
import MyNavbar from '../../components/navbar/MyNavbar'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
const LandingPage = () => {
  return (
    <>
        <Header/>
        <MyNavbar/>
        <Banner/>

    </>
  )
}

export default LandingPage