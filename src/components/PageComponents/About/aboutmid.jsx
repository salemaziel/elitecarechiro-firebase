import React from 'react';
import aboutStyle from './about.module.css'
import Container from "react-bootstrap/Container"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Fade from 'react-reveal/Fade'

class AboutMid extends React.Component {
  render() {
    return (
      <>
      <Container>
      <Row className={aboutStyle.Titlerow}>
      <Col>
      <Fade left cascade>
      <div className={aboutStyle.Title}>
        <h2>
        At Elite Care Chiropractic Center we take pride in spending  time with each one of our patients to develop a unique, individual total-body suppport and maintenance program. </h2>
      </div>
      </Fade>
      </Col>
    </Row>
    </Container>
    </>
    );
  }
}

export default AboutMid


