import React from "react";
import { Link } from "gatsby";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { WomanOnTrack, GreenShirtGuy } from "../../../../images/index";

import motorStyles from "../treatment.module.css";

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
                  <Link to="/services/gait-evaluation">Gait Evaluation</Link>
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
                  <Link to="/treatments/sports-injuries">Sport Injuries</Link>
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
                    style={{ fontSize: "16px" }}
                  />{" "}
                  1-760-710-1901
                </li>
                <li>
                  <span
                    className="icon fa fa-send"
                    style={{ fontSize: "16px" }}
                  />{" "}
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
              <h2>Therapy Details</h2>
              <div className={motorStyles.InnerText}>
                <p>
                  Podcasting operational change management inside of workflows
                  to establish a framework. Taking seamless key performance
                  indicators offline to maximise the long tail. Keeping your eye
                  on the ball while performing a deep dive on the start-up
                  mentality to derive convergence on cross-platform integration.
                </p>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits. Dramatically visualize customer
                  directed convergence without revolutionary ROI. Efficiently
                  unleash cross-media information without cross-media value.
                  Quickly maximize timely deliverables for real-time schemas.{" "}
                </p>
                {/*Two Column*/}
              </div>
              <div className={motorStyles.ServicesTopImage}>
                <img src={GreenShirtGuy} alt="" className="img-fluid" />
              </div>
              {/*   <h2>Therapy Details</h2> */}
              <div className={motorStyles.InnerText}>
                {/*  <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
              <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. </p>
              {/*Two Column* /} */}
                <div className={motorStyles.ColumnTwo}>
                  <Col>
                    <h2>Benefit of Therapy</h2>
                    <p>
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved.
                    </p>
                    <ul className={motorStyles.ServicesTherapyList}>
                      <li>Those who do not know how to pursue</li>
                      <li>Pleasure rationally encounter</li>
                      <li>Consequences that are extremely painful.</li>
                      <li>Nor again is there anyone who loves or pursues</li>
                    </ul>
                  </Col>
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
        </div>
      </Row>
    </div>
  </div>
);

export default SectionOne;
