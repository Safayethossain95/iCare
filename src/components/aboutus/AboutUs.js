import React from 'react'
import style from './AboutUs.module.scss'
import Heading from '../subComponents/Heading/Heading'
import { Col, Row } from 'react-bootstrap'
const AboutUs = () => {
  return (
    <>
    <div id="aboutus">

        <div className={style.aboutusmain}>
            <div className="myContainerMini">
                <Heading text="About Us" textalign="center"/>

                <p>
                Welcome to iCare Studies, your trusted partner in realizing your dream of studying abroad. We are a dedicated agency that specializes in assisting students like you in pursuing educational opportunities overseas. With our extensive knowledge, experience, and network of partner institutions, we provide comprehensive support throughout the entire study abroad process 
                </p>
                <br/>
                <p>
                At iCare, we understand that studying abroad is a life-changing experience that opens doors to new horizons and limitless possibilities. We are committed to helping you navigate the complexities of international education and make informed decisions about your academic future.
                </p>

            </div>
        </div>
    </div>
    </>
  )
}

export default AboutUs