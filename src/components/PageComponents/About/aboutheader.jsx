import React from 'react';
import aboutStyle from './about.module.css'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Fade from 'react-reveal/Fade'

class AboutHeader extends React.Component {
  render() {
    return (
      <>
      <Row className={aboutStyle.Titlerow}>
      <Col>
      <div className={aboutStyle.Title}>
        <Fade left ssrReveal>
        <h1>
          About Elite Care Chiropractic
        </h1>
        </Fade>
      </div>
      </Col>
      <span id="whatschiropractic" />
    </Row>
    </>
    );
  }
}

export default AboutHeader


