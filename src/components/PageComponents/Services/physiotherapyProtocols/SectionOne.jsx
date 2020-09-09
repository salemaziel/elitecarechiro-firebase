import React from "react";
import { Link } from "gatsby";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { WomanOnTrack, GreenShirtGuy } from "../../../../images/index";

import physioStyles from "../services.module.css";

const SectionOne = () => (
  <div className={physioStyles.sidebarPageContainer}>
    <div className={physioStyles.autoContainer}>
      <Row>
        {/*Sidebar Side*/}
        <div className="sidebar-side col-lg-3 col-md-4 col-sm-12 col-xs-12">
          <aside className={physioStyles.AsideCategories}>
            {/*Blog Category Widget*/}
            <div className={physioStyles.sidebarWidget}>
              <ul className={physioStyles.Categories}>
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
                <li className={physioStyles.active}>
                  <Link to="/services/physiotherapy-protocols">
                    PhysioTherapy Protocols
                  </Link>
                </li>
                <li>
                  <Link to="/treatments/sports-injuries">Sport Injuries</Link>
                </li>
              </ul>
            </div>

            <div className={physioStyles.ListWidget}>
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
          <div className={physioStyles.ServicesSingle}>
            <div className={physioStyles.InnerBox}>
              <h2>PhysioTherapy Protocols</h2>
              <div className={physioStyles.InnerText}>
                <p>
                  Physiotherapy is the treatment of disease, injury, or
                  deformity by physical methods such as massage, heat treatment,
                  and exercise rather than by drugs or surgery. It helps people
                  affected by injury, illness or disability through movement and
                  exercise, manual therapy, education, and advice by maintaining
                  health for people of all ages, helping patients to manage pain
                  and prevent disease.
                </p>
                <p>
                  {" "}
                  In addition to releasing tight muscle and tendons and
                  increasing flexibility, we use current physiotherapy modulates
                  to help increase circulation, remove swelling (Edema) and
                  provide a sedative effect on nerves to reduce pain. </p>
                  <p>These
                  modulates include:
                  </p>
                  <p>
                  <ul>
                    <li>Interferential Electrical Muscle Stimulation</li>
                    <li>Therapeutic Ultrasound</li>
                    <li>
                      Microcurrent: Application of frequency-specific electrical
                      currents to injured parts of the body.
                    </li>
                    <li>
                      Russian Stimulation: Used to stimulate motor nerves by
                      using a high frequency for deep muscle penetration,
                      stimulation, and intense muscle fiber contraction.
                    </li>
                  </ul>{" "}
                  </p>
                {/*Two Column*/}
              </div>
              {/*<div className={physioStyles.ServicesTopImage}>
                <img src={GreenShirtGuy} alt="" className="img-fluid" />
</div>*/}
              {/*   <h2>Therapy Details</h2> */}
              <div className={physioStyles.InnerText}>

                <div className={physioStyles.ColumnTwo}>
                 
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
          {/*   </div> */}
          {/* </div> */}
        </div>
      </Row>
    </div>
  </div>
);

export default SectionOne;
