import React from 'react'
import style from './Banner.module.scss'
import { Container, Row,Col } from 'react-bootstrap'
const Banner = () => {
  return (
    <>
    <div className={style.bannerpart}>
        <div className={style.overlay}>
            <Container>
                <Row style={{alignItems:"center"}}>
                    <Col lg={6}>
                     <h3>Discover a world of knowledge and cultural immersion with iCare</h3>
                     <p>Unlock Boundless Opportunities with IPE Your Trusted Partner for International Education Adventures and Unforgettable Experiences</p>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div className={style.form}>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <img className='w-100' src="./assets/images/banner1.png" alt="" />


    </div>
    </>
  )
}

export default Banner