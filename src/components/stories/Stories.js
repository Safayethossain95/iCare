import React from 'react'
import './Stories.scss'
import { Col, Row } from 'react-bootstrap'
import Heading from '../subComponents/Heading/Heading'
const Stories = () => {
  return (
    <>
        <div className="storiesmain">
            <div className="myContainerMini">
                <Heading textalign="center" text="Stories" padding="0"/>
                <p className='smtext'>Real Students Share Their Transformative Study Abroad Experiences</p>
                <Row>
                    <Col lg={6}>
                        <div className="desktop">
                    <img data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-out" className="firstimg" style={{marginBottom:'0px'}} src="./assets/images/stories/stories1.png" alt=""/>

                        </div>
                    </Col>
                    <Col lg={6}>
                    <div className='desktop'>
                    <div className="myrow">
                    <div className="column one">
                        <img data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800" data-aos-easing="ease-in-out" src="./assets/images/stories/stories2.png" alt=""/>
                        <img data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="800" data-aos-easing="ease-in-out" src="./assets/images/stories/stories3.png" alt=""/>
                    </div>
                    <div className="column two">
                        <img data-aos="zoom-in" data-aos-delay="1200" data-aos-duration="800" data-aos-easing="ease-in-out" src="./assets/images/stories/stories4.png" alt=""/>
                        <img data-aos="zoom-in" data-aos-delay="400" data-aos-duration="800" data-aos-easing="ease-in-out" src="./assets/images/stories/stories5.png" alt=""/>
                    </div>
                    <div className="column one">
                        <img  data-aos="zoom-in" data-aos-delay="600" data-aos-duration="800" data-aos-easing="ease-in-out" src="./assets/images/stories/stories6.png" alt=""/>
                        <img data-aos="zoom-in" data-aos-delay="1400" data-aos-duration="800" data-aos-easing="ease-in-out" src="./assets/images/stories/stories7.png" alt=""/>
                    </div>
                    </div>

                    </div>
                    <div className='mobile'>
                        
                    <img data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-out" className="w-100" style={{marginBottom:'0px'}} src="./assets/images/stories/stories1.png" alt=""/>
                       

                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}

export default Stories