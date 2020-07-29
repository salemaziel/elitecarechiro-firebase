import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Button from "react-bootstrap/Button";
import CTAButtons from "./CTAbutton";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faComment,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
*/
import { FaPhoneAlt, FaComments, FaCalendarAlt } from "react-icons/fa";
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby";

import heroStyles from "./home.module.css";
import ctaStyles from "./ctabutton.module.css";
import CTAScheduleModal from "../../CTAScheduleModal";

const HeroMobileCTA = () => (
  <section>
          <Row className={heroStyles.HeroMobileCTA}>
        <Col>
        <Fade left>
          <p>
           {" "}
           Providing Encinitas with the highest quality in Chiropractic care for <strong>over 15 years. </strong>
          </p>
          </Fade>
        </Col>
      </Row>
    <Row className={heroStyles.HeroMobileCTA}>
      <Col>
        <CTAButtons
          buttonColor="success"
          size="lg"
          className={ctaStyles.containCall}
          buttonText={[
            <a href="tel:1-760-710-1901" className={heroStyles.CTALink}>
              <FaPhoneAlt className={heroStyles.CTACall} />
            </a>
          ]}
        ></CTAButtons>
      </Col>
      <Col>
        <CTAButtons
          buttonColor="success"
          size="lg"
          className={ctaStyles.containMessage}
          buttonText={[
            <a href="sms:1-760-710-1901" className={heroStyles.CTALink}>
              <FaComments className={heroStyles.CTAMessage} />
            </a>
          ]}
        ></CTAButtons>
      </Col>
      <Col>
        {/*<a as={Button} className={heroStyles.CTALink} data-appointlet-organization="elite-care-chiropractic">
            <FontAwesomeIcon
              icon={faCalendar}
              className={heroStyles.CTASchedule}
               
            />
            Book Online
</a>*/}
        {/*<CTAScheduleModal />*/}
        <CTAButtons
          buttonColor="success"
          size="lg"
          className={ctaStyles.containCalendar}
          buttonText={[
              <FaCalendarAlt className={heroStyles.CTACalendar} />
          ]}
        ></CTAButtons>
      </Col>
    </Row>
  </section>
);

export default HeroMobileCTA;
