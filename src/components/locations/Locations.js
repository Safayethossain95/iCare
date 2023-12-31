import React from "react";
import Heading from "../subComponents/Heading/Heading";
import LocationCard from "../subComponents/LocationCard/LocationCard";
import { Col, Row } from "react-bootstrap";
import style from './Locations.module.scss'
const Locations = () => {
  return (
    <>

    <div id="location">
      <Heading textalign="center" text="Where Can You Study?" />

      <div className="myContainerMini">
        <Row className={style.locationmainstart}>
            <Col lg={3} xs={6}  data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className={style.colpadding}>
                <LocationCard imgurl="./assets/images/locations/usa.jpg" text="USA"/>
            </Col>
            <Col lg={3} xs={6} data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" className={style.colpadding}>
                <LocationCard imgurl="./assets/images/locations/uk.jpg" text="UK"/>
            </Col>
            <Col lg={3} xs={6} data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" className={style.colpadding}>
                <LocationCard imgurl="./assets/images/locations/australia.jpg" text="AUSTRALIA"/>
            </Col>
            <Col lg={3} xs={6} data-aos="fade-up" data-aos-duration="800" data-aos-delay="800" className={style.colpadding}>
                <LocationCard imgurl="./assets/images/locations/newzealand.jpg" text="NEW ZEALAND"/>
            </Col>
            <Col lg={3} xs={6} data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000" className={style.colpadding}>
                <LocationCard imgurl="./assets/images/locations/canada.jpg" text="CANADA"/>
            </Col>
            <Col lg={3} xs={6} data-aos="fade-up" data-aos-duration="800" data-aos-delay="1200" className={style.colpadding}>
                <LocationCard imgurl="./assets/images/locations/ireland.jpg" text="IRELAND"/>
            </Col>
            <Col lg={3} xs={6} data-aos="fade-up" data-aos-duration="800" data-aos-delay="1400" className={style.colpadding}>
                <LocationCard imgurl="./assets/images/locations/germany.jpg" text="EUROPE"/>
            </Col>
            <Col lg={3} xs={6} data-aos="fade-up" data-aos-duration="800" data-aos-delay="1600" className={style.colpadding}>
                <LocationCard imgurl="./assets/images/locations/japan.jpg" text="JAPAN"/>
            </Col>
        </Row>

    </div>
        
      </div>
    </>
  );
};

export default Locations;
