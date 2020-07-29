import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"

import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

import HeroMobile from './HeroMobile'

import ScheduleModal from '../../ScheduleModal'
import Fade from 'react-reveal/Fade'

import { Link } from 'gatsby'

import heroStyles from "./home.module.css";

const Hero = () => (
  <>
  <section className={heroStyles.HeroSection}>
    <Container className="NoMobile">
      <Row>
        <div className="col-lg-6 col-md-8">
          <Fade left ssrReveal>
          <h1>
            Welcome to
            <br />
            <span>Elite Care Chiropractic</span>
          </h1>
          </Fade>
          <Fade left ssrReveal>
          <p>
           Providing Encinitas with the highest quality in Chiropractic care for <strong>over 15 years. </strong>
          </p>
          </Fade>
          {/*<Button data-appointlet-organization="elite-care-chiropractic" as={Link} rel="preload" className="blue-btns">
            Book Online
          </Button>{" "}*/}
          {/*<ScheduleModal />*/}
        </div>
      </Row>
    </Container>
    <HeroMobile />
  </section>
  {/*
  <section className={heroStyles.BelowHero}>
    <Container>
      <Row>
        <Col>
        <h3>
Because You Deserve The Best.</h3>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>
        We provide comprehensive care and lasting treatment. We take pride in spending time with all our patients to develop individual total body support and maintenance programs. 
        <br />
        </p>
        </Col>
      </Row>
    </Container>
  </section>*/}
  </>
);

export default Hero;
