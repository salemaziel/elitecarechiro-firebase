import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from "react-bootstrap/Button";
import CTAButtons from './CTAbutton';
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faComment,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
*/
import {
  FaPhoneAlt,
  FaComments,
  FaCalendarAlt,
} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

import heromobileCTAStyles from './home.module.css';
import mobileCTAStyles from './ctabutton.module.css';
import CTAScheduleModal from '../../CTAScheduleModal';

const HeroMobileCTA = () => (
  <section>
    <Row className={heromobileCTAStyles.HeroMobileCTA}>
      <Col>
        <Fade left>
          <p>
            {' '}
            Providing Encinitas with the highest quality in
            Chiropractic care for <strong>over 15 years. </strong>
          </p>
        </Fade>
      </Col>
    </Row>

    <Row className={heromobileCTAStyles.HeroMobileCTA}>
      <Col>
        <CTAButtons
          buttonColor="success"
          size="lg"
          className={mobileCTAStyles.containCall}
          buttonText={[
            <a
              href="tel:1-760-710-1901"
              className={heromobileCTAStyles.CTALink}
            >
              <FaPhoneAlt className={heromobileCTAStyles.CTACall} />
            </a>,
          ]}
        ></CTAButtons>
      </Col>
      <Col>
        <CTAButtons
          buttonColor="success"
          size="lg"
          className={mobileCTAStyles.containMessage}
          buttonText={[
            <a
              href="sms:1-760-710-1901"
              className={heromobileCTAStyles.CTALink}
            >
              <FaComments
                className={heromobileCTAStyles.CTAMessage}
              />
            </a>,
          ]}
        ></CTAButtons>
      </Col>
      <Col>

        <CTAButtons
          buttonColor="success"
          size="lg"
          className={mobileCTAStyles.containCalendar}
          buttonText={[
            <FaCalendarAlt
              className={heromobileCTAStyles.CTACalendar}
            />,
          ]}
        ></CTAButtons>
      </Col>
    </Row>
    <Row className={heromobileCTAStyles.HeroMobileCTA}>
      <Col>
      <Fade left>
        <p>
        Tap To <span style={{color: '#04DB20'}}> Give Us A Call,</span><br /> <span style={{color: '#2196F3'}}>Send Us A Message, </span>  <span style={{color: '#903F95'}}>Or Book Online</span>
        </p>
      </Fade>
      </Col>
    </Row>
  </section>
);

export default HeroMobileCTA;
