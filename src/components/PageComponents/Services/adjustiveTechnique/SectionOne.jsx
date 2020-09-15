import React from "react";
import { Link } from "gatsby";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'

import { WomanOnTrack, GreenShirtGuy } from "../../../../images/index";

import adjustiveStyles from "../services.module.css";

const SectionOne = () => (
  <>
      <div className="NoDesktop">
          <Button as={Link} to="/services" className="blue-btns">
            Back to Services
          </Button>
        </div>
  <div className={adjustiveStyles.sidebarPageContainer}>
    
    <div className={adjustiveStyles.autoContainer}>

      <Row>
        {/*Sidebar Side*/}
        <div className="sidebar-side col-lg-3 col-md-4 col-sm-12 col-xs-12">
          <aside className={adjustiveStyles.AsideCategories}>
            {/*Blog Category Widget*/}
            <div className={adjustiveStyles.sidebarWidget}>
              <ul className={adjustiveStyles.Categories}>
                <li className={adjustiveStyles.active}>
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

            <div className={adjustiveStyles.ListWidget}>
              <ul>
                <li>
                  <span
                    className="icon fa fa-phone"
                    style={{ fontSize: "16px" }}
                  />{" "}
                  760-710-1901
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
          <div className={adjustiveStyles.ServicesSingle}>
            <div className={adjustiveStyles.InnerBox}>
              <h2>Adjustive Technique</h2>
              <div className={adjustiveStyles.InnerText}>
                <p>
                  There are physical maneuvers designed to induce joint motion
                  through either non-thrust techniques (mobilization) or thrust
                  techniques (adjustment or thrust manipulation). They are
                  intended to treat disorders of the neuromusculoskeletal (NMS)
                  system by decreasing pain and improving the joint range and
                  quality of motion.{" "}
                </p>
                <p>
                  It is extremely important to mobilize joint complexes around
                  an injury. Whether the injury is trauma-related, or the result
                  of an overuse syndrome addressing spinal and other associated
                  joint misalignment or subluxations is an integral part of
                  regaining health. At Elite Care we are trained in several
                  adjustive techniques, which allows us to pick the protocol
                  that will suit your needs most effectively.
                </p>
                <p>
                  A few of the techniques we utilize are:
                  <ul>
                    <li>Diversified Adjustive Technique</li>
                    <li>Extremity Adjustive Technique</li>
                    <li>Activator Technique</li>
                    <li>Thompson Drop-Table Technique</li>
                    <li>Applied Kinesiology</li>
                  </ul>
                </p>
                {/*Two Column*/}
              </div>


            </div>
          </div>
          {/*   </div> */}
          {/* </div> */}
        </div>
      </Row>
    </div>
  </div>
  </>
);

export default SectionOne;
