import React from 'react'
import { Link } from 'gatsby'
import { NeckPain, MotorVehicle, SportsInjury } from '../../../images/index'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import alltreatmentStyles from './treatment.module.css'

const AllTreatments = () => (
<section className={alltreatmentStyles.TreatmentSection}>
<div style={{
    textAlign: 'center',
    margin: 'auto',
    padding: '1rem 1rem 2rem'
  }}>
    <h1>Treatments We Specialize In</h1>
  </div>
  <Container>
    <Row className={alltreatmentStyles.TreatmentRow}>
      {/*Services Block Two*/}
      <Col /*xs={12} sm={6} md={4}*/ /*className="services-block-two"*/>
        <div className="inner-box">
          <div className="image">
            <img src={MotorVehicle} alt='' style={{width: '100%'}} />

          </div>
          <div className="lower-box">
            <h3><Link to="/treatments/motor-vehicle-collisions">Motor Vehicle Collisions</Link></h3>
            <div className="text">Whiplash injuries resulting from rapid acceleration and deceleration of the neck can be painful, and worse, can take a long time to heal if not properly treated. We design specialized treatment plans specific for whiplash-induced pain.</div>
          </div>
        </div>
      </Col>
      {/*Services Block Two*/}
      <Col /*xs={12} sm={6} md={4}*/ /*className="services-block-two"*/>
        <div className="inner-box">
          <div className="image">
            <img src={NeckPain} alt='' style={{width: '100%'}}/>

          </div>
          <div className="lower-box">
            <h3><Link to="/treatments/neck-and-back-pain">Neck and Back Pain</Link></h3>
            <div className="text">Neck and back pain are the most common reason people make appointments with chiropractors. Utilizing the latest technology and techniques, we design treatment protocols specific for conditions involving back, neck, and hip pain to get you back on your feet again.</div>
          </div>
        </div>
      </Col>
      {/*Services Block Two*/}
      <Col /*xs={12} sm={6} md={4}*/ /*className="services-block-two"*/>
        <div className="inner-box">
          <div className="image">
            <img src={SportsInjury} alt='' style={{width: '100%'}}/>

          </div>
          <div className="lower-box">
            <h3><Link to="/treatments/sports-inuries">Sports Injuries</Link></h3>
            <div className="text">Our specialists bring the unique perspective of being competitive endurance athletes themselves, having comprehensive knowledge of how best to modify your workouts to maintain your fitness while allowing your body to heal.</div>
          </div>
        </div>
      </Col>

    </Row>
  </Container>
</section>


)

export default AllTreatments