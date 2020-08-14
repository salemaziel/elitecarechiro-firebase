import React from 'react';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  WomanOnTrack,
  GreenShirtGuy,
} from '../../../../images/index';

import orthoticStyles from '../services.module.css';

const SectionOne = () => (
  <div className={orthoticStyles.sidebarPageContainer}>
    <div className={orthoticStyles.autoContainer}>
      <Row>
        {/*Sidebar Side*/}
        <div className="sidebar-side col-lg-3 col-md-4 col-sm-12 col-xs-12">
          <aside className={orthoticStyles.AsideCategories}>
            {/*Blog Category Widget*/}
            <div className={orthoticStyles.sidebarWidget}>
              <ul className={orthoticStyles.Categories}>
                <li>
                  <Link to="/services/adjustive-technique">
                    Adjustive Technique
                  </Link>
                </li>
                <li>
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
                <li className={orthoticStyles.active}>
                  <Link to="/orthotics/orthotics">Orthotics</Link>
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

            {/*Info Widget*/}
            <div className={orthoticStyles.ListWidget}>
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
          <div className={orthoticStyles.ServicesSingle}>
            <div className={orthoticStyles.InnerBox}>
              <h2>Custom Orthotics For A Perfect Fit</h2>
              <div className={orthoticStyles.InnerText}>
                <p>
                  Orthotics is the branch of medicine that deals with
                  the provision and use of artificial devices such as
                  splints and braces for limbs or spine. We provide
                  Orthotics solutions for patients involved in
                  walking, running, and for everyday use.
                </p>
                <p>
                  Elite Care's gait analysis and accurate orthotic
                  fitting have resolved persistent athletic injuries.
                  The added pressures and range of movement caused by
                  sports activities can magnify otherwise
                  imperceptible imbalances and increase the athlete’s
                  risk of injuries. By correcting these minor
                  imbalances with Orthotics, the need for muscles to
                  compensate is eliminated. The benefits of orthotics
                  can be increased performance, strength, and
                  endurance. Orthotics can also provide relief to
                  those who suffer from painful foot problems or
                  injury and have to endure long hours of standing or
                  walking.
                </p>
                {/*Two Column*/}
              </div>
              <div className={orthoticStyles.ServicesTopImage}>
                <img
                  src={GreenShirtGuy}
                  alt=""
                  className="img-fluid"
                />
              </div>
              {/*   <h2>Therapy Details</h2> */}
              <div className={orthoticStyles.InnerText}>
 
                <div className={orthoticStyles.ColumnTwo}>
                  <Col>
                    <div className="img-fluid">
                      <img
                        src={WomanOnTrack}
                        alt=""
                        className="img-fluid"
                      ></img>
                    </div>
                  </Col>
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
);

export default SectionOne;
