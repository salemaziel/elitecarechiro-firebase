import React from 'react'
import { Link } from 'gatsby'

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
  <div className="auto-container">
    <div className="row clearfix">
      {/*Services Block Two*/}
      <div className="services-block-two col-md-4 col-sm-6 col-xs-12">
        <div className="inner-box">
          <div className="image">
            <img src="images/resource/services-5.jpg" alt />

          </div>
          <div className="lower-box">
            <h3><Link to="/services/adjustive-technique">Adjustive Technique</Link></h3>
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
          </div>
        </div>
      </div>
      {/*Services Block Two*/}
      <div className="services-block-two col-md-4 col-sm-6 col-xs-12">
        <div className="inner-box">
          <div className="image">
            <img src="images/resource/services-6.jpg" alt />

          </div>
          <div className="lower-box">
            <h3><Link to="/services/gait-evaluation">Gait Evaluation</Link></h3>
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
          </div>
        </div>
      </div>
      {/*Services Block Two*/}
      <div className="services-block-two col-md-4 col-sm-6 col-xs-12">
        <div className="inner-box">
          <div className="image">
            <img src="images/resource/services-7.jpg" alt />

          </div>
          <div className="lower-box">
            <h3><Link to="/services/myofascial-release">Myofascial Release</Link></h3>
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
          </div>
        </div>
      </div>
      {/*Services Block Two*/}
      <div className="services-block-two col-md-4 col-sm-6 col-xs-12">
        <div className="inner-box">
          <div className="image">
            <img src="images/resource/services-8.jpg" alt />

          </div>
          <div className="lower-box">
            <h3><Link to="/services/orthotics">Orthotics</Link></h3>
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
          </div>
        </div>
      </div>
      {/*Services Block Two*/}
      <div className="services-block-two col-md-4 col-sm-6 col-xs-12">
        <div className="inner-box">
          <div className="image">
            <img src="images/resource/services-9.jpg" alt />

          </div>
          <div className="lower-box">
            <h3><Link to="/services/physiotherapy-protocols">Physiotherapy Protocols</Link></h3>
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


)

export default AllServices