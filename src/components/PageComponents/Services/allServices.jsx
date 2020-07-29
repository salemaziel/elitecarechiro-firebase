import React from 'react'
import { Link } from 'gatsby'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import allserviceStyles from './services.module.css'

const AllServices = () => (
<section className={allserviceStyles.ServiceSection}>
  <div style={{
    textAlign: 'center',
    margin: 'auto',
    padding: '1rem 0 2rem',
  }}>
    <h1>Services We Offer</h1>
  </div>
  <Container>
    <Row className="clearfix">
      {/*Services Block Two*/}
      <Col xs={12} sm={6} md={4} /*className="services-block-two"*/>
        <div className="inner-box">
          <div className="image">
            <img src="images/resource/services-5.jpg" alt="" style={{width: '100%'}}  />

          </div>
          <div className="lower-box">
            <h3><Link to="/services/adjustive-technique">Adjustive Technique</Link></h3>
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
          </div>
        </div>
      </Col>
      {/*Services Block Two*/}
      <Col xs={12} sm={6} md={4} /*className="services-block-two"*/>
        <div className="inner-box">
          <div className="image">
            <img src="images/resource/services-6.jpg" alt="" style={{width: '100%'}} />

          </div>
          <div className="lower-box">
            <h3><Link to="/services/gait-evaluation">Gait Evaluation</Link></h3>
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
          </div>
        </div>
      </Col>
      {/*Services Block Two*/}
      <Col xs={12} sm={6} md={4} /*className="services-block-two"*/>
        <div className="inner-box">
          <div className="image">
            <img src="images/resource/services-7.jpg" alt="" style={{width: '100%'}} />

          </div>
          <div className="lower-box">
            <h3><Link to="/services/myofascial-release">Myofascial Release</Link></h3>
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
          </div>
        </div>
      </Col>
      {/*Services Block Two*/}
      <Col xs={12} sm={6} md={4} /*className="services-block-two"*/>
        <div className="inner-box">
          <div className="image">
            <img src="images/resource/services-8.jpg" alt="" style={{width: '100%'}} />

          </div>
          <div className="lower-box">
            <h3><Link to="/services/orthotics">Orthotics</Link></h3>
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
          </div>
        </div>
      </Col>
      {/*Services Block Two*/}
      <Col xs={12} sm={6} md={4} /*className="services-block-two"*/>
        <div className="inner-box">
          <div className="image">
            <img src="images/resource/services-9.jpg" alt="" style={{width: '100%'}} />

          </div>
          <div className="lower-box">
            <h3><Link to="/services/physiotherapy-protocols">Physiotherapy Protocols</Link></h3>
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
          </div>
        </div>
      </Col>

    </Row>
  </Container>
</section>


)

export default AllServices