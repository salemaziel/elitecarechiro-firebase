import React from 'react';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  WomanOnTrack,
  GreenShirtGuy,
  RunningTrail
} from '../../../../images/index';

import sportStyles from '../treatment.module.css';

const SectionOne = () => (
  <div className={sportStyles.sidebarPageContainer}>
    <div className={sportStyles.autoContainer}>
      <Row>
        {/*Sidebar Side*/}
        <div className="sidebar-side col-lg-3 col-md-4 col-sm-12 col-xs-12">
          <aside className={sportStyles.AsideCategories}>
            {/*Blog Category Widget*/}
            <div className={sportStyles.sidebarWidget}>
              <ul className={sportStyles.Categories}>
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
                <li>
                  <Link to="/services/orthotics">Orthotics</Link>
                </li>
                <li>
                  <Link to="/services/physiotherapy-protocols">
                    PhysioTherapy Protocols
                  </Link>
                </li>
                <li className={sportStyles.active}>
                  <Link to="/treatments/sports-injuries">
                    Sport Injuries
                  </Link>
                </li>
              </ul>
            </div>

            <div className={sportStyles.ListWidget}>
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
          <div className={sportStyles.ServicesSingle}>
            <div className={sportStyles.InnerBox}>
              <h2>Recovering From Sports Injuries</h2>
              <div className={sportStyles.InnerText}>
                <p>
                  One of the most common questions new patient's ask
                  when they call in to make their appointment is "why
                  am I calling a chiropractor for my knee, hip, foot
                  or shoulder injury?"
                </p>
                <p>
                  At Elite care Chiropractic, our primary focus is on
                  sports injuries. We spend about 75% of our time
                  working on athletic injuries. We also have the
                  unique perspective of being competitive endurance
                  athletes ourselves and have comprehensive knowledge
                  of not only how to treat your injury but also how to
                  modify your workouts so that you not only allow
                  healing to progress, but continue to workout in a
                  way that maintains your fitness - especially if you
                  have an upcoming event.
                </p>
                <p>
                  Our office is geared toward working with "weekend
                  warrior" to the Olympic and professional level
                  athlete. We have treated thousands of sports
                  injuries over the past 14 years ranging from new
                  runners training for their first race to
                  professionals preparing for competitions to make
                  their living. We have a special empathy for patients
                  with athletic injuries due to the fact that we have
                  had most of these at one point in our own training
                  and racing.
                </p>


                {/*Two Column*/}
              </div>
              <div className={sportStyles.ServicesTopImage}>
                <img
                  src={RunningTrail}
                  alt=""
                  className="img-fluid"
                />
              </div>
              {/*   <h2>Therapy Details</h2> */}
              <div className={sportStyles.InnerText}>
              <p>
                  Our approach involves a comprehensive history,
                  in-depth biomechanical evaluation, which includes a
                  review of equipment (shoes, bikes, etc...), a clear
                  diagnosis of the injury, and most importantly, the
                  cause of the injury and how to treat it. We also
                  will give homework ( stretches, exercise, ice,
                  etc...), as well as training modification and
                  applicable cross training to enhance a quick
                  recovery. Many times with overuse in particular,
                  doing nothing does not speed up recovery. In fact,
                  most of the time without active intervention,
                  muscles remain tight, scar tissue and adhesions form
                  and the pattern of injury is still there. So even
                  though the pain may go away - as soon as the athlete
                  goes back into the sport where the injury arose from
                  - microtrauma in scar tissue begins and inflammation
                  and pain returns.
                </p>
              <p>
                  We feel it is a vital part of treatment to not only
                  work on the injury but also to address the cause,
                  otherwise there is a high probability that injuries
                  will persist. This may be as simple as a shoe change
                  or modification of a bike fit or swim stroke, or the
                  addition of generic shoe insert or custom orthotics.
                </p>
                <p>
                  We measure success in how fast we can return you to
                  your sport - the faster you get better, the better
                  we look!
                </p>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate
                  B2C users after installed base benefits.
                  Dramatically visualize customer directed convergence
                  without revolutionary ROI. Efficiently unleash
                  cross-media information without cross-media value.
                  Quickly maximize timely deliverables for real-time
                  schemas.{' '}
                </p>

                {/*<div className={sportStyles.ColumnTwo}>
                  
                  <Col>
                    <div className="img-fluid">
                      <img
                        src={WomanOnTrack}
                        alt=""
                        className="img-fluid"
                      ></img>
                    </div>
                  </Col>
                </div>*/}
              </div>

              {/*<div className="column col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="visit-box">
                  <div className={sportStyles.InnerBox}>
                    <h2>Visit Today</h2>
                    <div className={sportStyles.InnerText}>
                      You'll know the minute you arrive this is the
                      place. We are here to surpass your desires.
                    </div>
                    <a
                      href="contact.html"
                      className="theme-btn btn-style-six"
                    >
                      Make Appointment
                    </a>
                  </div>
                </div>
              </div>*/}
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
