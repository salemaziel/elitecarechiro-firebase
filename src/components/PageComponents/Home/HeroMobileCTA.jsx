import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from "react-bootstrap/Button";
import CTAButtons from './CTAbuttons';


import {
  FaPhoneAlt,
  FaComments,
  FaCalendarAlt,

} from 'react-icons/fa';

import {

  MdLocationOn,

} from 'react-icons/md';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

import heromobileCTAStyles from './home.module.css';
import mobileCTAStyles from './ctabutton.module.css';
//import CTAScheduleModal from '../../CTAScheduleModal';
import { openPopupWidget } from 'react-calendly';

const HeroMobileCTA = ({ url }) => {
//  const onClick = () =>
//    openPopupWidget({
//      url:
//        'https://form.jotform.com/202576816787167',
//    });

  return (
    <section>
      <Row className={heromobileCTAStyles.HeroMobileCTA}>
        <Col>
          <Fade>
            <p>
              {' '}
              Providing Encinitas with the highest quality in
              Chiropractic care for <strong>over 20 years. </strong>
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
                href="tel:760-634-3701"
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
                href="sms:760-710-1901"
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
            /*buttonOnClick={onClick}*/
            buttonText={[
              <Link to="/contact">
              <FaCalendarAlt
                className={heromobileCTAStyles.CTACalendar}
              />
              </Link>,
            ]}
          ></CTAButtons>
        </Col>

        <Col>
          <CTAButtons
            buttonColor="success"
            size="lg"
            className={mobileCTAStyles.containLocation}
            /*buttonOnClick={onClick}*/
            buttonText={[
              <a
                href="https://www.google.com/maps/dir//Elite+Care+Chiropractic+Center,+317+N+El+Camino+Real,+Encinitas,+CA+92024/@33.0544518,-117.2608602,16z/data=!4m6!4m5!1m0!1m2!1m1!1s0x80dc0b8f3b4d3e35:0x8acc9cf120956245!3e0"
                rel="nofollow"
              >
              
                <MdLocationOn
                  className={heromobileCTAStyles.CTACalendar}
                />
              </a>,
            ]}
          ></CTAButtons>
        </Col>
      </Row>
    </section>
  );
};
export default HeroMobileCTA;
