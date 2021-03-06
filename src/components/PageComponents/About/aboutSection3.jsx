import React, { Component } from "react";

import { WomanOnTrack, GolfOrange, GreenShirtGuy, Golfing, PatientCentered } from "../../../images/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from 'react-reveal/Fade'

import aboutStyle from "./about.module.css";

class AboutSection3 extends Component {
  render() {
    return (
      <>
        <section className={aboutStyle.Section}>
          <Container>
            <Row className={aboutStyle.Titlerow}>
              
              <Col>
              <Fade left cascade>
                <div className={aboutStyle.Box}>
                  <div className={aboutStyle.BoxImg}>
                    <img
                      src={Golfing}
                      alt="why choose"
                      className="img-fluid"
                    />
                  </div>
                </div>
                </Fade>
              </Col>

              <Col>
              <Fade left cascade>
                <div className={aboutStyle.Header}>
                  <h3 className={aboutStyle.Subtitles}>Highest Quality Care</h3>
                  <p>
                  We have created treatment protocols by combining state of the art soft-tissue techniques, athletic injury and prevention specialties, and dedicated time for each and every patient.
                  </p>
                </div>
                </Fade>
              </Col>
             
            </Row>
            <Row className={aboutStyle.Titlerow}>
              
              <Col className={aboutStyle.Nomobile}>
              <Fade left cascade>
                <div className={aboutStyle.Header}>
                  <h3 className={aboutStyle.Subtitles}>
                    {" "}
                    Patient Centered Treatment
                  </h3>
                  <p>
                  We take pride in spending time with all our patients to develope individual total body support and maintenance programs.
                  </p>
                </div>
                </Fade>
              </Col>

              <Col>
              <Fade left cascade>
                <div className={aboutStyle.Box}>
                  <div className={aboutStyle.BoxImg}>
                    <img
                      src={PatientCentered}
                      alt="why choose"
                      className="img-fluid"
                    />
                  </div>
                </div>
                </Fade>
              </Col>
              
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default AboutSection3;
