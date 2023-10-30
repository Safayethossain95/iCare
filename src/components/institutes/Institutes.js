import React from "react";
import style from "./Institute.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../subComponents/Heading/Heading";
import CommonButton from "../subComponents/CommonButton/CommonButton";
import { useNavigate } from "react-router-dom";

import Slider from "react-slick";
const Institutes = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/other");
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div id="institutes">
        <div className={style.institutemain}>
          <Container>
            <Row>
              <Col lg={4}>
                <Heading padding="20px 0 0 0" textalign="left" text="Top" />
                <Heading padding="0" textalign="left" text="Universities" />
                <p className={style.paragraph}>
                  A Gateway to Limitless Opportunities: Join the Elite League of
                  Top Universities
                </p>
                <CommonButton
                  right="unset"
                  left="0"
                  w="150px"
                  h="50px"
                  br="43px"
                  text="Apply Now"
                  click={handleClick}
                />
              </Col>
              <Col lg={8}>
                <Slider {...settings}>
                  
                    <div className={style.singleslide}>
                        <div className={style.mydiv}>
                        <div className={style.overlay}>
                            <p>Harvard University</p>
                        </div>
                        <img src="./assets/images/topuniversity/topunislider1.png" alt=""/>
                        </div>
                    </div>
                  
                  
                    <div className={style.singleslide}>
                    <div className={style.mydiv}>
                        <div className={style.overlay}>
                            <p>Stanford University</p>
                        </div>
                        <img src="./assets/images/topuniversity/topunislider2.png" alt=""/>
                        </div>
                    </div>
                  
                  
                    <div className={style.singleslide}>
                    <div className={style.mydiv}>
                        <div className={style.overlay}>
                            <p>University of Oxford</p>
                        </div>
                        <img src="./assets/images/topuniversity/topunislider3.png" alt=""/>
                        </div>
                    </div>
                  
                  
                    <div className={style.singleslide}>
                    <div className={style.mydiv}>
                        <div className={style.overlay}>
                            <p>Cambridge University</p>
                        </div>
                        <img src="./assets/images/topuniversity/topunislider4.png" alt=""/>
                        </div>
                    </div>
                  
                  
                    <div className={style.singleslide}>
                    <div className={style.mydiv}>
                        <div className={style.overlay}>
                            <p>Harvard University</p>
                        </div>
                        <img src="./assets/images/topuniversity/topunislider2.png" alt=""/>
                        </div>
                    </div>
                  
                 
                </Slider>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Institutes;
