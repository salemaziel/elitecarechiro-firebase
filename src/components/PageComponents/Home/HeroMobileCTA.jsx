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
  FaMapMarkerAlt,
  FaMapMarkedAlt
} from 'react-icons/fa';

import {
  MdCall,
  MdChat,
  MdLocationOn,
  MdEvent,
  MdEventAvailable,
  MdQuestionAnswer

} from 'react-icons/md'
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

import heromobileCTAStyles from './home.module.css';
import mobileCTAStyles from './ctabutton.module.css';
//import CTAScheduleModal from '../../CTAScheduleModal';
import { openPopupWidget } from 'react-calendly';

const HeroMobileCTA = ({ url }) => {
  const onClick = () =>
    openPopupWidget({
      url:
        'https://calendly.com/elite-care-chiropractic/30min-appointment',
    });

  return (
    <section>
      <Row className={heromobileCTAStyles.HeroMobileCTA}>
        <Col>
          <Fade>
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
            buttonOnClick={onClick}
            buttonText={[
              <FaCalendarAlt
                className={heromobileCTAStyles.CTACalendar}
              />,
            ]}
          ></CTAButtons>
        </Col>

        <Col>
          <CTAButtons
            buttonColor="success"
            size="lg"
            className={mobileCTAStyles.containLocation}
            buttonOnClick={onClick}
            buttonText={[
              <MdLocationOn
                className={heromobileCTAStyles.CTACalendar}
              />,
            ]}
          ></CTAButtons>
        </Col>
      </Row>
      {/*<Row className={heromobileCTAStyles.HeroMobileCTA}>
        <Col>
          <Fade left>
            <p>
              Tap To{' '}
              <span style={{ color: '#04DB20' }}>
                {' '}
                Give Us A Call,
              </span>
              <br />{' '}
              <span style={{ color: '#2196F3' }}>
                Send Us A Message,{' '}
              </span>{' '}
              <span style={{ color: '#903F95' }}> Book Online,</span> <span style={{ color: '#44CFCB' }}> or Locate Us On A Map</span>
            </p>
          </Fade>
        </Col>
          </Row>*/}
    </section>
  );
};
export default HeroMobileCTA;
