import React from 'react'
import { Link } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { WomanOnTrack, GreenShirtGuy } from '../../../../images/index'


import gaitStyles from '../services.module.css'

const SectionOne = () => (
<div className={gaitStyles.sidebarPageContainer}>
  <div className={gaitStyles.autoContainer}>
    <Row>
      {/*Sidebar Side*/}
      <div className="sidebar-side col-lg-3 col-md-4 col-sm-12 col-xs-12">
        <aside className={gaitStyles.AsideCategories}>
          {/*Blog Category Widget*/}
          <div className={gaitStyles.sidebarWidget}>
            <ul className={gaitStyles.Categories}>
            <li><Link to="/services/adjustive-technique">Adjustive Technique</Link></li>
            <li className={gaitStyles.active}><Link to="/services/gait-evaluation">Gait Evaluation</Link></li>
              <li><Link to="/services/myofascial-release">Myofascial Release</Link></li>
              <li><Link to="/treatments/motor-vehicle-collisions">Motor Vehicle Collisions</Link></li>
              <li><Link to="/treatments/neck-and-back-pain">Neck and Back Pain</Link></li>
              <li><Link to="/services/orthotics">Orthotics</Link></li>
              <li ><Link to="/services/physiotherapy-protocols">PhysioTherapy Protocols</Link></li>
              <li><Link to="/treatments/sports-injuries">Sport Injuries</Link></li>

            </ul>
          </div>
          {/*Brochure*/}
        {/*  <div className="sidebar-widget brochure-widget">
            <div className="brochure-box">
              <div className="inner">
                <span className="icon fa fa-file-pdf-o" />
                <div className="text">Download Brochure</div>
              </div>
              <a href="#" className="overlay-link" />
            </div>
            </div> */}
          {/*Info Widget*/}
          <div className={gaitStyles.ListWidget}>
            <ul>
              <li><span className="icon fa fa-phone" style={{fontSize: '16px'}}/> 1-760-710-1901</li>
              <li><span className="icon fa fa-send" style={{fontSize: '16px'}}/> info@elitecarechiropractic.com</li>
            </ul>
          </div>
        </aside>
      </div>
      {/*Content Side*/}
      <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
        <div className={gaitStyles.ServicesSingle}>
          <div className={gaitStyles.InnerBox}>
          <h2>Gait Evaluation:</h2>
            <div className={gaitStyles.InnerText}>
              <p>
    Gait analysis is the study of locomotion, for our purposes in humans to measure the movement of the body in space (kinematics) and the forces involved in producing these movements (Kinetics). In the patients carrying injuries due to the involvement in running, walking, and occasionally cycling, a gait evaluation can help in finding how the injury happened and evaluating the plan of its treatment.</p><p>
We provide extensive extremely comprehensive gait evaluations involving how a patient may stand, walk, and run or ride. Furthermore, the study of shoes is a big factor involved in our tests including the need for foot insoles to correct the biomechanics of a patient’s body. Particularly for cyclists, a custom insole has proved to be a valuable solution as it provides a greater contact surface for your foot with the pedal. </p>
              {/*Two Column*/}
            </div>
            <div className={gaitStyles.ServicesTopImage}>
              <img src={GreenShirtGuy} alt='' className="img-fluid" />
            </div>
         {/*   <h2>Therapy Details</h2> */}
            <div className={gaitStyles.InnerText}>
            {/*  <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
              <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. </p>
              {/*Two Column* /} */}
              <div className={gaitStyles.ColumnTwo}>
                <Col>
                  <h2>Benefit of Therapy</h2>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved.</p>
                  <ul className={gaitStyles.ServicesTherapyList}>
                    <li>Those who do not know how to pursue</li>
                    <li>Pleasure rationally encounter</li>
                    <li>Consequences that are extremely painful.</li>
                    <li>Nor again is there anyone who loves or pursues</li>
                  </ul>
                </Col>
                <Col>
                  <div className="img-fluid">
                    <img src={WomanOnTrack} alt='' className="img-fluid"></img> 
                  </div>
                </Col>
              </div>
            </div>
         {/*   <h3>Why Choose Us</h3>
            <div className="accordian-section">
              <div className="row clearfix">
                <div className="column col-lg-8 col-md-12 col-sm-12 col-xs-12">
                  {/*Accordian Box* /}
                  <ul className="accordion-box">
                    {/*Block* /}
                    <li className="accordion block">
                      <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa fa-plus" /> <span className="icon icon-minus fa fa-minus" /></div>Dynamically procrastinate B2C users after installed.</div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids.</div>
                        </div>
                      </div>
                    </li>
                    {/*Block* /}
                    <li className="accordion block">
                      <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa fa-plus" /> <span className="icon icon-minus fa fa-minus" /></div>Nanotechnology immersion along the information.</div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids.</div>
                        </div>
                      </div>
                    </li>
                    {/*Block* /}
                    <li className="accordion block">
                      <div className="acc-btn active"><div className="icon-outer"><span className="icon icon-plus fa fa-plus" /> <span className="icon icon-minus fa fa-minus" /></div>Taking seamless key performance indicators offline.</div>
                      <div className="acc-content current">
                        <div className="content">
                          <div className="text">Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids.</div>
                        </div>
                      </div>
                    </li>
                    {/*Block* /}
                    <li className="accordion block">
                      <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa fa-plus" /> <span className="icon icon-minus fa fa-minus" /></div>Collaboratively administrate empowered markets.</div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids.</div>
                        </div>
                      </div>
                    </li>
                  </ul>
         </div> */}
                <div className="column col-lg-4 col-md-12 col-sm-12 col-xs-12">
                  <div className="visit-box">
                    <div className={gaitStyles.InnerBox}>
                      <h2>Visit Today</h2>
                      <div className={gaitStyles.InnerText}>You'll know the minute you arrive this is the place. We are here to surpass your desires.</div>
                      <a href="contact.html" className="theme-btn btn-style-six">Make Appointment</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       {/*   </div> */}
       {/* </div> */}
      </div>
    </Row>
  </div>
</div>

)

export default SectionOne