import React from "react";
import { Link } from "gatsby";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { WomanOnTrack, GreenShirtGuy } from "../../../../images/index";

import myofascialStyles from "../services.module.css";

const SectionOne = () => (
  <div className={myofascialStyles.sidebarPageContainer}>
    <div className={myofascialStyles.autoContainer}>
      <Row>
        {/*Sidebar Side*/}
        <div className="sidebar-side col-lg-3 col-md-4 col-sm-12 col-xs-12">
          <aside className={myofascialStyles.AsideCategories}>
            {/*Blog Category Widget*/}
            <div className={myofascialStyles.sidebarWidget}>
              <ul className={myofascialStyles.Categories}>
                <li>
                  <Link to="/services/adjustive-technique">
                    Adjustive Technique
                  </Link>
                </li>
                <li>
                  <Link to="/services/gait-evaluation">Gait Evaluation</Link>
                </li>
                <li className={myofascialStyles.active}>
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
            <div className={myofascialStyles.ListWidget}>
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
          <div className={myofascialStyles.ServicesSingle}>
            <div className={myofascialStyles.InnerBox}>
              <h2>Myofascial Release</h2>
              <div className={myofascialStyles.InnerText}>
                <p>
                  Myofascial release is a manipulative treatment that attempts
                  to release tension in the fascia due to trauma, posture, or
                  inflammation. Connective tissues called fascia to surround the
                  muscles, bones, nerves, and organs of the body.
                </p>
                <p>
                  {" "}
                  We currently utilize several techniques to release the
                  muscle-tendon-fascial systems to break up adhesions, fibrous
                  tissue, and increase range of motion, flexibility, and
                  circulation to clear up the soft tissue portion of the injury
                  complex. These techniques include:
                  <ul>
                    <li>
                      Art (Active Release Technique): Treating your body’s soft
                      tissue by combining manipulation and movement.
                    </li>
                    <li>
                      Trigger Point Release Technique: The techniques of the
                      manual trigger point therapy
                    </li>
                    <li>Cross Function Massage</li>
                    <li>
                      PNF Stretching: An advanced form of flexibility training.
                    </li>
                  </ul>
                  Active Muscle testing can be used to determine the possibility
                  of tendinitis, rupture, fracture, and neurological involvement
                  to name a few.
                </p>
                {/*Two Column*/}
              </div>
              {/*<div className={myofascialStyles.ServicesTopImage}>
                <img src={GreenShirtGuy} alt="" className="img-fluid" />
          </div>*/}
              {/*   <h2>Therapy Details</h2> */}
              <div className={myofascialStyles.InnerText}>
              {/*Two Column* /} */}
                {/*<div className={myofascialStyles.ColumnTwo}>
                  
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
