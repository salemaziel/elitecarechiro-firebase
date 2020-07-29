import React from 'react';
import aboutStyle from './about.module.css'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

class AboutHeader extends React.Component {
  render() {
    return (
      <>
      <Row className={aboutStyle.Titlerow}>
      <Col>
      <div className={aboutStyle.Title}>
        <h1>
          About Elite Care Chiropractic
        </h1>
      </div>
      </Col>
    </Row>
    </>
    );
  }
}

export default AboutHeader


