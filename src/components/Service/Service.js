import React from 'react'
import style from './Service.module.scss'
import { Col, Row } from 'react-bootstrap'
import Heading from '../subComponents/Heading/Heading'
const Service = () => {
  return (
    <>
        <div id="service" className={style.servicemain}>
            <div className='myContainerMinimini'>
            <Row>
                <Col lg={6}>
                    <Row className='align-items-center '>
                        <Col lg={6} className={style.paddingcustom}>
                            <div className='text-end'>
                            <img className={style.mb24} src="./assets/images/services/service1.png" alt=""/>
                            <img src="./assets/images/services/service2.png" alt=""/>

                            </div>
                        </Col>
                        <Col lg={6} className={style.paddingcustom}>
                        <img className={style.mb24} src="./assets/images/services/service3.png" alt=""/>
                            <img src="./assets/images/services/service4.png" alt=""/>
                        </Col>
                    </Row>
                </Col>
                <Col lg={{span:5,offset:1}}>
                    <Heading padding="30px 0" textalign="left" text="Our Service"/>

                    <div className={style.listofitems}>
                        <div className={style.singleitem}>
                            <img src="./assets/images/services/sericon1.png" alt=""/>
                            <h4>University Selection</h4>
                        </div>
                        <div className={style.singleitem}>
                            <img src="./assets/images/services/sericon2.png" alt=""/>
                            <h4>Application Assistance</h4>
                        </div>
                        <div className={style.singleitem}>
                            <img src="./assets/images/services/sericon3.png" alt=""/>
                            <h4>Visa Guidance</h4>
                        </div>
                        <div className={style.singleitem}>
                            <img src="./assets/images/services/sericon4.png" alt=""/>
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