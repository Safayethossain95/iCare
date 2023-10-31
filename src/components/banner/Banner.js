import React from "react";
import style from "./Banner.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    arrows:false
  };
  AOS.init();
  return (
    <>
      <div className={style.bannerpart}>
        <div className={style.overlay}>
          <Container>
            <Row style={{ alignItems: "center" }}>
              <Col lg={6}>
                <h3 data-aos="fade-up" data-aos-duration="400">
                  Discover a world of knowledge and cultural immersion with
                  iCare
                </h3>
                <p data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
                  Unlock Boundless Opportunities with IPE Your Trusted Partner
                  for International Education Adventures and Unforgettable
                  Experiences
                </p>
              </Col>
              <Col lg={{ span: 5, offset: 1 }}>
                <div data-aos="fade-in" data-aos-duration="1000" className={style.form}>
                  <Form>
                    <div className={style.formheading}>
                        <h2>Get Connected</h2>
                    </div>
                    <Row className={style.formrow}>
                      <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                      </Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="text" placeholder="Phone" />
                        </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                    </Row>
                    <div className={style.buttondiv}>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>

                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="desktop">
        <Slider {...settings}>
        <img className="w-100 img-fluid" src="./assets/images/banner1.png" alt="" />
        <img className="w-100 img-fluid" src="./assets/images/banner2.jpg" alt="" />
        <img className="w-100 img-fluid" src="./assets/images/banner3.jpg" alt="" />

        </Slider>
        </div>
        <div className="mobile">
        <Slider {...settings}>
        <img className="w-100 img-fluid" src="./assets/images/banner1mobi.png" alt="" />
        <img className="w-100 img-fluid" src="./assets/images/banner2mobi.jpg" alt="" />
        <img className="w-100 img-fluid" src="./assets/images/banner3mobi.jpg" alt="" />

        </Slider>
        </div>
      </div>
    </>
  );
};

export default Banner;
