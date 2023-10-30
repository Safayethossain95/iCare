import React from "react";
import style from "./Banner.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Slider from "react-slick";
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
  return (
    <>
      <div className={style.bannerpart}>
        <div className={style.overlay}>
          <Container>
            <Row style={{ alignItems: "center" }}>
              <Col lg={6}>
                <h3>
                  Discover a world of knowledge and cultural immersion with
                  iCare
                </h3>
                <p>
                  Unlock Boundless Opportunities with IPE Your Trusted Partner
                  for International Education Adventures and Unforgettable
                  Experiences
                </p>
              </Col>
              <Col lg={{ span: 5, offset: 1 }}>
                <div className={style.form}>
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
        <Slider {...settings}>
        <img className="w-100 img-fluid" src="./assets/images/banner1.png" alt="" />
        <img className="w-100 img-fluid" src="./assets/images/banner2.jpg" alt="" />
        <img className="w-100 img-fluid" src="./assets/images/banner3.jpg" alt="" />

        </Slider>
      </div>
    </>
  );
};

export default Banner;
