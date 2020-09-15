import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import footerStyle from "./footer.module.css";

import { LogoLG } from "../images/index";

/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";*/

import { 
  FaFacebook,
  FaTwitter,
  FaLinkedin
   } from 'react-icons/fa'
import { Link } from "gatsby";

const Footer3 = () => (
  <section className={footerStyle.SectionFooter}>
    <Container>
      <Row>
        <div className={footerStyle.Box}>
          <Col>
            <div className={footerStyle.QuickLinks}>
              <h2>Get in Touch</h2>
              <div className="widget-content">
                <ul>
                  <li>
                    <a href="tel:760-710-1901">760 710-1901</a>
                  </li>
                  <li>
                    {" "}
                    <a href="mailto:contact@elitecarechiropractic.com">
                      contact@elitecarechiropractic.com{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://www.google.com/maps/place/Elite+Care+Chiropractic+Center/@33.054452,-117.26086,16z/data=!4m5!3m4!1s0x0:0x8acc9cf120956245!8m2!3d33.0544518!4d-117.2608602?hl=en-US">
                      {" "}
                      317 N El Camino Real, Encinitas, CA 92024
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col>
            <Link to="/">
              <img
                src={LogoLG}
                alt="Elite Care Chiropractic Logo"
                width={100}
                className={footerStyle.Logo}
              />
            </Link>
            <div className={footerStyle.SocialIcon}>
              {" "}
              <a href="#">
                {/*<FontAwesomeIcon
                  icon={faFacebook}
                  className={footerStyle.Icon}
                />*/}
                <FaFacebook className={footerStyle.Icon} />
              </a>{" "}
              <a href="#">
                {/*<FontAwesomeIcon
                  icon={faTwitter}
                  className={footerStyle.Icon}
                />*/}
                <FaTwitter className={footerStyle.Icon} />
              </a>{" "}
              <a href="#">
                {/*<FontAwesomeIcon
                  icon={faLinkedin}
                  className={footerStyle.Icon}
                />*/}
                <FaLinkedin className={footerStyle.Icon} />
              </a>{" "}
              {/*} <a href="#">
                  <FontAwesomeIcon icon={faEnvelope} className={footerStyle.Icon} />
    </a>{" "}*/}
            </div>
          </Col>
          <Col>
            <div className={footerStyle.QuickLinks}>
              <h2>Quick Links</h2>
              <div className="">
                <ul className="list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  </section>
);
export default Footer3;
