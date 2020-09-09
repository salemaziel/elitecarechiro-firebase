import React from 'react';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  WomanOnTrack,
  GreenShirtGuy,
  GaitGirl1,
  GaitMan1,
} from '../../../../images/index';

import gaitStyles from '../services.module.css';

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
                <li>
                  <Link to="/services/adjustive-technique">
                    Adjustive Technique
                  </Link>
                </li>
                <li className={gaitStyles.active}>
                  <Link to="/services/gait-evaluation">
                    Gait Evaluation
                  </Link>
                </li>
                <li>
                  <Link to="/services/myofascial-release">
                    Myofascial Release
                  </Link>
                </li>
                <li>
                  <Link to="/treatments/motor-vehicle-collisions">
                    Motor Vehicle Collisions
                  </Link>
                </li>
                <li>
                  <Link to="/treatments/neck-and-back-pain">
                    Neck and Back Pain
                  </Link>
                </li>
                <li>
                  <Link to="/services/orthotics">Orthotics</Link>
                </li>
                <li>
                  <Link to="/services/physiotherapy-protocols">
                    PhysioTherapy Protocols
                  </Link>
                </li>
                <li>
                  <Link to="/treatments/sports-injuries">
                    Sport Injuries
                  </Link>
                </li>
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
                <li>
                  <span
                    className="icon fa fa-phone"
                    style={{ fontSize: '16px' }}
                  />{' '}
                  1-760-710-1901
                </li>
                <li>
                  <span
                    className="icon fa fa-send"
                    style={{ fontSize: '16px' }}
                  />{' '}
                  info@elitecarechiropractic.com
                </li>
              </ul>
            </div>
          </aside>
        </div>
        {/*Content Side*/}
        <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
          <div className={gaitStyles.ServicesSingle}>
            <div className={gaitStyles.InnerBox}>
              <h2>Gait Evaluation</h2>
              <div className={gaitStyles.InnerText}>
                <p>
                  Gait analysis is the study of locomotion, for our
                  purposes in humans to measure the movement of the
                  body in space (kinematics) and the forces involved
                  in producing these movements (Kinetics).
                  </p>
                  <p>
                   In the
                  patients carrying injuries due to the involvement in
                  running, walking, and occasionally cycling, a gait
                  evaluation can help in finding how the injury
                  happened and evaluating the plan of its treatment.
                </p>

                {/*Two Column*/}
              </div>

              {/*   <h2>Therapy Details</h2> */}
              <div className={gaitStyles.InnerText}>
              <p>
                  We provide extensive extremely comprehensive gait
                  evaluations involving how a patient may stand, walk,
                  and run or ride. Furthermore, the study of shoes is
                  a big factor involved in our tests including the
                  need for foot insoles to correct the biomechanics of
                  a patient’s body. Particularly for cyclists, a
                  custom insole has proved to be a valuable solution
                  as it provides a greater contact surface for your
                  foot with the pedal.{' '}
                </p>
              </div>
            </div>
            <div className={gaitStyles.ServicesTopImage}>
                <Row>
                  <Col>
                    <img
                      src={GaitMan1}
                      alt=""
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <img
                      src={GaitGirl1}
                      alt=""
                      className="img-fluid"
                    />
                  </Col>
                </Row>
              </div>
          </div>
          {/*   </div> */}
          {/* </div> */}
        </div>
      </Row>
    </div>
  </div>
);

export default SectionOne;
