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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
       
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  return (
    <>
      <div id="institutes">
        <div className={style.institutemain}>
          <Container>
            <Row>
              <Col xs={12} lg={4}>
                <Heading padding="20px 0 0 0" textalign="left" text="Top" />
                <Heading padding="0" textalign="left" text="Universities" />
                <p data-aos="fade-up" data-aos-duration="800" className={style.paragraph}>
                  A Gateway to Limitless Opportunities: Join the Elite League of
                  Top Universities
                </p>
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">

                  <CommonButton
                    right="unset"
                    left="0"
                    w="150px"
                    h="50px"
                    br="43px"
                    text="Apply Now"
                    click={handleClick}
                  />
                </div>
              </Col>
              <Col xs={12} lg={8}>
                <Slider {...settings}>

                  <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className={style.singleslide}>
                    <div className={style.mydiv}>
                      <div className={style.overlay}>
                        <p>Harvard University</p>
                      </div>
                      <img src="./assets/images/topuniversity/topunislider1.png" alt="" />
                    </div>
                  </div>


                  <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className={style.singleslide}>
                    <div className={style.mydiv}>
                      <div className={style.overlay}>
                        <p>Stanford University</p>
                      </div>
                      <img src="./assets/images/topuniversity/topunislider2.png" alt="" />
                    </div>
                  </div>


                  <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" className={style.singleslide}>
                    <div className={style.mydiv}>
                      <div className={style.overlay}>
                        <p>University of Oxford</p>
                      </div>
                      <img src="./assets/images/topuniversity/topunislider3.png" alt="" />
                    </div>
                  </div>


                  <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" className={style.singleslide}>
                    <div className={style.mydiv}>
                      <div className={style.overlay}>
                        <p>Cambridge University</p>
                      </div>
                      <img src="./assets/images/topuniversity/topunislider4.png" alt="" />
                    </div>
                  </div>


                  <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="800" className={style.singleslide}>
                    <div className={style.mydiv}>
                      <div className={style.overlay}>
                        <p>Harvard University</p>
                      </div>
                      <img src="./assets/images/topuniversity/topunislider2.png" alt="" />
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
