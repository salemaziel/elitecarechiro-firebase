import React from 'react'
import { RoadRunners, Newton, Intraining, Multisports, Giddyup } from '../../../images/index'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import affiliateStyles from './home.module.css'


const Affiliates = () => (
<section className={affiliateStyles.AffilatesSection}>
  <Container>
    <div className="row">
      <div className="col-md-12">
        <h2>Our Affiliates</h2>
        <h3>We are proud to be the lead healthcare providers and supporters of the following organizations</h3>
      </div>
    </div>
    <Row className={affiliateStyles.AffiliatesRow}>
      <Col /*md={4} className="top-margin"*/ >
        {/*<div className={affiliateStyles.AffiliatesLeftArrow}><span className="fa fa-angle-left" /></div>
        <div className={affiliateStyles.AffiliatesRightArrow}><span className="fa fa-angle-right" /></div>* /}
       {/* <div className={affiliateStyles.AffiliatesSlider}>*/}
          <div className={affiliateStyles.AffiliatesBox}> <img src={RoadRunners} className="img-fluid" /> </div>
          </Col>
          <Col>
          <div className={affiliateStyles.AffiliatesBox}> <img src={Intraining} className="img-fluid" /> </div>
          </Col>
          <Col>
          <div className={affiliateStyles.AffiliatesBox}> <img src={Giddyup} className="img-fluid" /> </div>
          </Col>
          <Col>
          <div className={affiliateStyles.AffiliatesBox}> <img src={Multisports} className="img-fluid" /> </div>
          </Col>
        {/*</div>*/}
    </Row>
  </Container>
</section>

)
export default Affiliates