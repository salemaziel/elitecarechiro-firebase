import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from 'react-reveal/Fade'

import heromobileStyles from "./home.module.css";

const HeroMobile = () => (
  <>
    <div className={heromobileStyles.HeroMobile}>
      <Row>
        <Col>
          <h1 className={heromobileStyles.HeroTitle} >
            {" "}
            Welcome to
            <br />
            <span>Elite Care Chiropractic</span>{" "}
          </h1>
        </Col>
      </Row>
      <div style={{height: '100px', width: 'auto', margin: '50px auto', }} />
    </div>
  </>
);

export default HeroMobile;
