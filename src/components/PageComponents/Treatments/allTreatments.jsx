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
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
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
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
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
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
          </div>
        </div>
      </Col>

    </Row>
  </Container>
</section>


)

export default AllTreatments