import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BiLogoFacebook } from 'react-icons/bi'
import { BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs'
import './Footer.scss'
const Footer = () => {
    return (
        <>

            <div class="headeroffooter">
                <h3>Get In Touch Call <a href="tel:+8801742141355">+880 1742 141355</a></h3>
                </div>
            <div className="footer">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <h1>iCare</h1>

                            <div className="socialicons">
                                <div className="ftsmbox">
                                    <a target="_blank" href="https://www.facebook.com/Safayet956">
                                        <BiLogoFacebook />
                                    </a>
                                </div>
                                <div className="ftsmbox">
                                    <BsYoutube />
                                </div>
                                <div className="ftsmbox">
                                    <BsTwitter />
                                </div>
                                <div className="ftsmbox">
                                    <BsInstagram />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="ftsmheading">
                                <p>Contact</p>
                            </div>
                            <div className="ftlist">
                                <ul>
                                    <li><a href="tel:+880 1738 184 833">+880 17421 41 355</a></li>
                                    <li><a href="mailto:safayet.hossain95@gmail.com">safayet.hossain95@gmail.com</a></li>
                                    <li><a target="_blank" href="https://www.google.com/maps/place/Farmgate,+Dhaka+1205/@23.7566792,90.3846837,17z/data=!3m1!4b1!4m6!3m5!1s0x3755b8a426199b0d:0x6a2c655d06c88ec9!8m2!3d23.7561067!4d90.3871961!16s%2Fg%2F1tgw8871?entry=ttu">House: 123 (Level 01), Road: 11,  Block: A, <br />Mirpur abc, Dhaka</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="ftsmheading">
                                <p>Subscribe Now!</p>
                            </div>
                            <div className="emailinput">
                                <input type="text" placeholder="Email Address" />
                                <button>Sign Up</button>
                                <p>Sing up with your email address to receive updates about new admission information.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer