import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MiniBanner from "./MiniBanner";

/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import treatmentStyles from "./treatment.module.css";
import Button from "react-bootstrap/Button";
*/
import { WomanOnTrack } from "../../../images/index";

const MainSection = () => (
  <section>
    <Row>
      <Col>
        <h2 style={{ textAlign: "center", margin: '0.5rem auto 1rem'}}>Sports Injuries</h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <div style={{ margin: "1.5rem auto" }}>
          <img src={WomanOnTrack} alt="" width="100%"  />
        </div>
      </Col>

    </Row>
    <Container style={{ margin: "3% auto 5%" }}>
    <Row>
      <Col>
        <h4 style={{ textAlign: "center", margin: '0.5rem auto 1rem'}}>Sports Injuries</h4>
      </Col>
    </Row>
      <Row>
        <Col>
          <article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </Col>
      </Row>
    </Container>
    <Row>
      <MiniBanner />
    </Row>
  </section>
);

export default MainSection;
