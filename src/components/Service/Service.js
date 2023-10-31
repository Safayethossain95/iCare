import React, { useEffect, useState } from 'react'
import style from './Service.module.scss'
import { Col, Row } from 'react-bootstrap'
import Heading from '../subComponents/Heading/Heading'
const Service = () => {
    return (
        <>
            <div id="service" className={style.servicemain}>
                {/* <div className="myContainerMini"> */}
                <div className="mobile">
                    <div className={style.mobiimgdiv}>
                        <img data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" className={style.mb24} src="./assets/images/services/service1.png" alt="" />
                        <img data-aos="zoom-in" data-aos-duration="800" data-aos-delay="600" src="./assets/images/services/service2.png" alt="" />
                    </div>
                </div>
                {/* </div> */}
                <div className='myContainerMinimini'>
                    <Row>
                        <Col xs={12} lg={6}>
                            <div className="desktop">
                                <Row className='align-items-center '>
                                    <Col xs={6} lg={6} className={style.paddingcustom}>
                                        <div className='text-end'>
                                            <img data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" className={style.mb24} src="./assets/images/services/service1.png" alt="" />
                                            <img data-aos="zoom-in" data-aos-duration="800" data-aos-delay="600" src="./assets/images/services/service2.png" alt="" />
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={6} className={style.paddingcustom}>
                                        <img data-aos="zoom-in" data-aos-duration="800" data-aos-delay="800" className={style.mb24} src="./assets/images/services/service3.png" alt="" />
                                        <img data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400" src="./assets/images/services/service4.png" alt="" />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} lg={{ span: 5, offset: 1 }}>
                            <div className="desktop">
                                <Heading w="100vw" padding="30px 0 0 15px" textalign="left" text="Our Service" />
                            </div>
                            <div className="mobile">
                                <Heading w="100vw" padding="30px 0 15px 0 " textalign="center" text="Our Service" />
                            </div>
                            <div className={style.listofitems}>
                                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className={style.singleitem}>
                                    <img src="./assets/images/services/sericon1.png" alt="" />
                                    <h4>University Selection</h4>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" className={style.singleitem}>
                                    <img src="./assets/images/services/sericon2.png" alt="" />
                                    <h4>Application Assistance</h4>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" className={style.singleitem}>
                                    <img src="./assets/images/services/sericon3.png" alt="" />
                                    <h4>Visa Guidance</h4>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="800" className={style.singleitem}>
                                    <img src="./assets/images/services/sericon4.png" alt="" />
                                    <h4>Visa Guidance</h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Service