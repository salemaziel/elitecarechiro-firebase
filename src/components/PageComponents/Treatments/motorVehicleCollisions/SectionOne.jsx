import React from 'react';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  WomanOnTrack,
  GreenShirtGuy,
} from '../../../../images/index';

import motorStyles from '../treatment.module.css';

const SectionOne = () => (
  <div className={motorStyles.sidebarPageContainer}>
    <div className={motorStyles.autoContainer}>
      <Row>
        {/*Sidebar Side*/}
        <div className="sidebar-side col-lg-3 col-md-4 col-sm-12 col-xs-12">
          <aside className={motorStyles.AsideCategories}>
            {/*Blog Category Widget*/}
            <div className={motorStyles.sidebarWidget}>
              <ul className={motorStyles.Categories}>
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
                <li className={motorStyles.active}>
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
            <div className={motorStyles.ListWidget}>
              <ul>
                <li>
                  <span
                    className="icon fa fa-phone"
                    style={{ fontSize: '16px' }}
                  />{' '}
                  760-710-1901
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
          <div className={motorStyles.ServicesSingle}>
            <div className={motorStyles.InnerBox}>
              <h2>Motor Vehicle Collision Injury Relief</h2>
              <div className={motorStyles.InnerText}>
                <p>
                  Whiplash injuries occur due to rapid acceleration
                  and deceleration of the body during a collision. The
                  head often jerks back and forth causing damage to
                  soft tissues and bones in your neck. The pain of a
                  motor vehicle collision may take several days to set
                  in. and may produce neck pain ,headaches, lower back
                  pain, shoulder pain and jaw pain (TMJ) to name a
                  few.
                </p>
                <p>
                  An estimated 3 million whiplash injuries occur in
                  the U.S. every year. An estimated 45% of people with
                  chronic neck pain attribute it to a past motor
                  vehicle collision. Unfortunately, many whiplash
                  patients do not receive many treatment options, and
                  are often advised to just endure the pain.
                </p>

                {/*Two Column*/}
              </div>
              {/*<div className={motorStyles.ServicesTopImage}>
                <img
                  src={GreenShirtGuy}
                  alt=""
                  className="img-fluid"
                />
          </div>*/}
              {/*   <h2>Therapy Details</h2> */}
              <div className={motorStyles.InnerText}>
                <p>
                  Effective treatment requires targeted adjustments,
                  physiotherapy, and inflammation management. Our
                  doctors also provide daily life recommendations on
                  ergonomics, exercise and home care.{' '}
                </p>
                {/*  <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
              <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. </p>
              {/*Two Column* /} */}
                <div className={motorStyles.ColumnTwo}>
                  {/*<Col>
                    <div className="img-fluid">
                      <img
                        src={WomanOnTrack}
                        alt=""
                        className="img-fluid"
                      ></img>
                    </div>
                  </Col>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </div>
  </div>
);

export default SectionOne;
