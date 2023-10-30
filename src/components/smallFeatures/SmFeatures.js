import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import style from './SmFeatures.module.scss'
import SmFeatureSingle from '../subComponents/SmFeatureSingle/SmFeatureSingle'
const SmFeatures = () => {
  return (
    <>
    <Container className={style.smfeaturemain}>

        <Row>
            <Col lg={3} className={style.smfeaturescol}>
                <SmFeatureSingle text="Applied Student" number="1000" imgurl="./assets/images/smbox1.png"/>
            </Col>
            <Col lg={3} className={style.smfeaturescol}>
                <SmFeatureSingle text="Applied Student" number="1200" imgurl="./assets/images/smbox2.png"/>
            </Col>
            <Col lg={3} className={style.smfeaturescol}>
                <SmFeatureSingle text="Applied Student" number="1300" imgurl="./assets/images/smbox3.png"/>
            </Col>
            <Col lg={3} className={style.smfeaturescol}>
                <SmFeatureSingle text="Applied Student" number="1500" imgurl="./assets/images/smbox4.png"/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default SmFeatures