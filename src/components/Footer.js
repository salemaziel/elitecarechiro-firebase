import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import footerStyle from './footer.module.css'

import { LogoLG } from '../images/index'

import BookOnlineButton from './BookOnlineButton'

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
/*import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"*/
import { Link } from "gatsby"

import { 
  FaFacebook,
  FaTwitter,
  FaLinkedin
   } from 'react-icons/fa'

const Footer = () => (
    <section className={footerStyle.SectionFooter}>
        <Container fluid>
            <Row className={footerStyle.FooterRow}>
           {/* <Col xs={1} className={footerStyle.ColNoMobile}></Col> */}
          <Col>
          <div className={footerStyle.CenterFooter}>
            <div className={footerStyle.LogoBlock}>
              <img src={LogoLG} className="img-fluid" alt="" className={footerStyle.Logo} />
            </div>
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
            </div>
          </Col>
          <Col >
            <div className={footerStyle.Middle}>
              <p>
                Elite Care Chiropractic provides Service to Escondido, San
                Marcos, Vista, Oceanside, Rancho Bernardo, Poway, Temecula,
                Leucadia, Encinitas, Rancho Penasquitos, Carlsbad, Mira Mesa,
                downtown San Diego, and the rest of the Greater County of San
                Diego.
              </p>
            </div>
          </Col>
          <Col>
            <div className={footerStyle.Spacer} />
            <div className={footerStyle.LinkBox}>
              <h2>
                {" "}
                <div className={footerStyle.QuickLinks}>Quick Links</div>{" "}
              </h2>

              <div className="nav-list">
                <Col>
                  <ul>
                  <li style={{ padding: "1rem" }}>
                      <Link
                        rel="preload"
                        to="/"
                        style={{ color: "white" }}
                      >
                        Home
                      </Link>
                    </li>

                    <li style={{ padding: "1rem" }}>
                      <Link
                        rel="preload"
                        to="/about"
                        style={{ color: "white" }}
                      >
                        About
                      </Link>
                    </li>

                    <li style={{ padding: "1rem" }}>
                      <Link
                        rel="preload"
                        to="/services"
                        style={{ color: "white" }}
                      >
                        Services
                      </Link>
                    </li>

                    <li style={{ padding: "1rem" }}>
                      <Link
                        rel="preload"
                        to="/treatments"
                        style={{ color: "white" }}
                      >
                        Treatments
                      </Link>
                    </li>

                 {/*   <li style={{ padding: "1rem" }}>
                      <Link
                        rel="preload"
                        to="/systems"
                        style={{ color: "white" }}
                      >
                        Systems
                      </Link>
                    </li> */}

                    {/*<li style={{padding: '1rem'}}>
                    <Link rel="preload" to="/">Site Map</Link>
                  </li>*/}

                    <li style={{ padding: "1rem" }}>
                      {/*<a
                        rel="preload"
                        style={{ color: "white" }}
                        data-appointlet-organization="elite-care-chiropractic"
                      >
                        Book Online
                      </a>*/}
                      <BookOnlineButton />
                    </li>
                  </ul>
                </Col>
              </div>
            </div>{" "}
          </Col>
      {/*    <Col xs={1} className={footerStyle.ColNoMobile}></Col> */}
            </Row>
        </Container>
    </section>
)

export default Footer