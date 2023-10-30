import React from 'react'
import style from './WhyStudyAbroad.module.scss'
import Heading from '../subComponents/Heading/Heading'
import {Row,Col} from 'react-bootstrap'
import './WhyStudyGeneral.scss'
const WhyStudyAbroad = () => {
  return (
    <>
        <div className="myContainerMini">
            <div className={style.whystudyabroadmain}>
                <Heading textalign="center" text="Why Study Abroad?"/>

                <Row>
                    <Col xs={12} lg={6}>
                    <div className="wsubox"  data-aos="fade-up"  data-aos-duration="800" data-aos-easing="ease-in-out">
                        <div className="innersm">
                            <img src="./assets/images/why/wsu1.png" alt=""/>
                        </div>
                        <h5>Academic Excellence</h5>
                        <p>The USA is home to many prestigious universities and colleges known for their academic excellence and cutting-edge research. From Ivy League institutions to state-of-the-art research facilities, you will have access to a wide range of programs and disciplines taught by renowned faculty members.</p>
                    </div>
                    
                    </Col>
                    <Col xs={12} lg={6}>
                    <div className="wsubox"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" data-aos-easing="ease-in-out">
                        <div className="innersm">
                            <img src="./assets/images/why/wsu2.png" alt=""/>
                        </div>
                        <h5>Global Recognition</h5>
                        <p>A degree from a US institution carries significant weight worldwide, opening doors to a multitude of career opportunities. US universities are highly respected and recognized for their rigorous curriculum, innovative teaching methods, and emphasis on practical skills development.</p>
                    </div>
                    </Col>
                    <Col xs={12} lg={6}>
                    <div className="wsubox"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" data-aos-easing="ease-in-out">
                        <div className="innersm">
                            <img src="./assets/images/why/wsu3.png" alt=""/>
                        </div>
                        <h5>Variety of Programs</h5>
                        <p>Whether you are interested in business, engineering, humanities, arts, or sciences, American universities offer an extensive range of academic programs and majors. You can choose from undergraduate, graduate, and doctoral programs tailored to match your interests and career aspirations.</p>
                    </div>
                    </Col>
                    <Col xs={12} lg={6}>
                    <div className="wsubox"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" data-aos-easing="ease-in-out">
                        <div className="innersm">
                            <img src="./assets/images/why/wsu4.png" alt=""/>
                        </div>
                        <h5>Research Opportunities</h5>
                        <p>Whether you are interested in business, engineering, humanities, arts, or sciences, American universities offer an extensive range of academic programs and majors. You can choose from undergraduate, graduate, and doctoral programs tailored to match your interests and career aspirations.</p>
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}

export default WhyStudyAbroad