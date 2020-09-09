import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

import { MotorVehicle, SportsInjury, NeckPain } from "../../../images/index";
import { Link } from "gatsby";

import Fade from 'react-reveal/Fade'
import specializeStyles from "./home.module.css";

const Specialize = () => (
  <section className={specializeStyles.SpecializeSection}>
    <div className="NoMobile">
    <Fade bottom ssrReveal>
    <Container fluid>
      <Row>
        <div className="col-md-12">
          <h2>We Specialize in Treatment for:</h2>

        </div>
      </Row>
      <Row className={specializeStyles.SpecializeTopMargin}>
       {/* <div className="col-md-3 col-sm-6"> */}
       <Col>
          <div className={specializeStyles.SpecializeBox}>
            <Link to="/treatments/sports-injuries">
            <img src={SportsInjury} className="img-fluid" />
            <h4>
              Sports <br />
              Injuries
            </h4>
            <div style={{margin: 'auto', padding: '5px 1.5rem', textDecoration: 'none', color: 'black'}}>
            <p>
            Our specialists bring the unique perspective of being competitive endurance athletes themselves, having comprehensive knowledge of how best to modify your workouts to maintain your fitness while allowing your body to heal.
            </p>
            </div>
            </Link>
          </div>
          </Col>
        <Col>
          <div className={specializeStyles.SpecializeBox}>
          <Link to="/treatments/neck-and-back-pain">

            <img src={NeckPain} className="img-fluid" />
            <h4>
              Neck and <br />
              Back Pain
              
            </h4>
            <div style={{margin: 'auto', padding: '5px 1.5rem', textDecoration: 'none', color: 'black'}}>
            <p>
              Neck and back pain are the most common reason people make appointments with chiropractors. Utilizing the latest technology and techniques, we design treatment protocols specific for conditions involving back, neck, and hip pain to get you back on your feet again.

            </p>
            </div>
            </Link>
          </div>
        </Col>
        <Col>
          <div className={specializeStyles.SpecializeBox}>
          <Link to="/treatments/motor-vehicle-collisons">

            <img src={MotorVehicle} className="img-fluid" />
            <h4>
              Motor Vehicle <br />
              Collisions
            </h4>
            <div style={{margin: 'auto', padding: '5px 1.5rem', textDecoration: 'none', color: 'black'}}>
            <p>
              Neck and back pain are the most common reason people make appointments with chiropractors. Utilizing the latest technology and techniques, we design treatment protocols specific for conditions involving back, neck, and hip pain to get you back on your feet again.

            </p>
            </div>
            </Link>

          </div>
        </Col>
      </Row>
      <Row>
        <div className="col-md-12 text-center">
          {" "}
          <Button as={Link} to="/services" rel="preload" className="blue-btns">
            More Services
          </Button>{" "}
        </div>
      </Row>
    </Container>
    </Fade>
    </div>
    <div className="NoDesktop">
    <Fade left ssrReveal>
    <Container>
      <Row>
        <div className="col-md-12">
          <h2>We Specialize in Treatment for:</h2>

        </div>
      </Row>
      <Row className={specializeStyles.SpecializeTopMargin}>
       {/* <div className="col-md-3 col-sm-6"> */}
       <Col>
          <div className={specializeStyles.SpecializeBox}>
            <Link to="/treatments/sports-injuries">
            <img src={SportsInjury} className="img-fluid" />
            <h4>
              Sports <br />
              Injuries
            </h4>
            <div style={{margin: 'auto', padding: '5px 1.5rem', textDecoration: 'none', color: 'black'}}>
            <p>
            Our specialists bring the unique perspective of being competitive endurance athletes themselves, having comprehensive knowledge of how best to modify your workouts to maintain your fitness while allowing your body to heal.
            </p>
            </div>
            </Link>
          </div>
          </Col>
        <Col>
          <div className={specializeStyles.SpecializeBox}>
          <Link to="/treatments/neck-and-back-pain">

            <img src={NeckPain} className="img-fluid" />
            <h4>
              Neck and <br />
              Back Pain
              
            </h4>
            </Link>
          </div>
        </Col>
        <Col>
          <div className={specializeStyles.SpecializeBox}>
          <Link to="/treatments/motor-vehicle-collisons">

            <img src={MotorVehicle} className="img-fluid" />
            <h4>
              Motor Vehicle <br />
              Collisions
            </h4>
            </Link>

          </div>
        </Col>
      </Row>
      <Row>
        <div className="col-md-12 text-center">
          {" "}
          <Button as={Link} to="/services" rel="preload" className="blue-btns">
            More Services
          </Button>{" "}
        </div>
      </Row>
    </Container>
    </Fade>
    </div>
  </section>
);

export default Specialize;
