import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Fade from 'react-reveal/Fade'

import { Link } from "gatsby";

import homeStyles from "./home.module.css";

const NewPatient = () => (
  <section className={homeStyles.NewPatientSection}>
    <Container>
      <Fade left cascade>
      <Row>
        <Col>
          <h2>Because You Deserve The Best.</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={homeStyles.DeserveText}>
            <p>
              At Elite Care Chiropractic we offer individual body support and
              maintenance programs to our clients provided by professionals.
              Utilizing a variety of natural healing methods with the main focus
              being their chiropractic adjustment. The adjustment is a quick
              movement applied to a vertebra or extremity with the purpose of
              restoring normal range of motion, reducing spasm, and relieving
              nerve irritation. It is so much more than pain relief!
            </p>
            <p>
              We take pride in monitoring our clients and track their progress
              throughout the program to produce optimum results. We make it our
              responsibility to study any new studies and findings done in the
              field of Chiropractic and update our programs and procedures in
              order to provide the latest and most advanced therapeutic
              protocols.
            </p>
          </div>
        </Col>
      </Row>
      </Fade>
    </Container>
    {/*<Container>
    <div className="row d-flex flex-row">
      <div className="col-md-6 my-auto">
        <h1> New Patient Center </h1>
        <p>Fill Out Forms In Advance </p>
      </div>
      <div className="col-md-6 my-auto text-center">
         <Button as={Link} to="/newpatients" rel="preload" className="blue-btns">New Patient Forms</Button> </div>
    </div>
  </Container>*/}
  </section>
);

export default NewPatient;
