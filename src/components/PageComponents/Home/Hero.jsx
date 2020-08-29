import React from "react"
import Container from "react-bootstrap/Container"

import Row from "react-bootstrap/Row"

import HeroMobile from './HeroMobile'

import Fade from 'react-reveal/Fade'

import { Link } from 'gatsby'

import heroStyles from "./home.module.css";

const Hero = () => (
  <>
  <section className={heroStyles.HeroSection}>
    <Container className="NoMobile">
      <Row>
        <div className="col-lg-6 col-md-8">
          <Fade cascade ssrReveal>
          <h1>
            Welcome to
            <br />
            <span>Elite Care Chiropractic</span>
          </h1>

          <p>
           Providing Encinitas with the highest quality in Chiropractic care for <strong>over 15 years. </strong>
          </p>
          {/*<p>
            Ayy {new Date().toTimeString().split(" ")[7]}+, Built with
        {` `}test
          </p>
          <p>
            Ayy {new Date().toTimeString().split(" ")[0]}+, Built with
        {` `}test
          </p>
          <p>

        <Clock
          format={'HH:mm:ss'}
          ticking={true}
          timezone={'US/Pacific'} />
      
          </p>*/}
          </Fade>
        </div>
      </Row>
    </Container>
    <HeroMobile />
  </section>
  </>
);

export default Hero;
