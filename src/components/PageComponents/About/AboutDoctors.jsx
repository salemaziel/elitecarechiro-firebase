import React from 'react';
import Container from 'react-bootstrap/Container';
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

import { Jannelli, Hiking } from '../../../images/index';
import { Link } from 'gatsby';

import '../../../images/index';
import aboutStyles from './about.module.css';
import Fade from 'react-reveal/Fade';
//import { openPopupWidget } from 'react-calendly';

const AboutDoctors = ({ url }) => {
//  const onClickSchedule = () =>
//    openPopupWidget({
//      url: 'https://form.jotform.com/202576816787167',
//    });

  return (
    <section className={aboutStyles.MeetDoctorSection}>
      <Container>
        <div className="row d-flex flex-row" id="janelli">
          <Fade left cascade>
            <div className="col-md-5 my-auto text-center">
              <div className={aboutStyles.DoctorImage}>
                <img src={Jannelli} className="img-fluid" alt="Dr Linda Janelli"/>{' '}
              </div>
            </div>
            <div className="col-md-7 my-auto">
              <div className={aboutStyles.DoctorDetails}>
                <h2> Meet your Doctor </h2>
                <h3>Dr. Linda Jannelli, D.C.</h3>
                <p>
                  Dr. Linda Jannelli is a graduate of Life
                  Chiropractic College West, where she graduated Magna
                  Cum Laude. She also holds a Master Degree in social
                  work from Adelphi University.
                </p>
                <p>
                  "Jannelli", as she is known by many friends and
                  patients, combines her deep experience as a
                  competitive runner and triathlete, with the
                  intuition and listening skills learned as social
                  worker to form her unique brand of chiropractic
                  care.
                </p>
                <p>
                  Together with her husband, Dr. Rob Rich, they have
                  created treatment protocols combining state of the
                  art soft tissue techniques, athletic injury and
                  prevention specialties and enough time for each and
                  every patient. Dr. Jannelli is energetic, athletic
                  and informal. She has completed the Hawaii Ironman
                  five times and holds age group awards from the many
                  triathlons and running races she has competed in
                  since 1980.
                </p>
                <div
                  style={{
                    justifyContent: 'center',
                    margin: 'auto',
                    display: 'flex',
                  }}
                >
                  <Button
                    as={Link}
                    to="/contact"
                    /*onClick={onClickSchedule}*/ className="blue-btns"
                  >
                    Schedule with Dr. Jannelli
                  </Button>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div
          className="row d-flex flex-row flex-row-reverse"
          id="rich"
        >
          <Fade right cascade>
            <div className="col-md-5 my-auto text-center">
              <div className={aboutStyles.DoctorImage}>
                <img src={Hiking} className="img-fluid"  alt="Dr Rob Rich"/>
              </div>
            </div>
            <div className="col-md-7 my-auto">
              <div className={aboutStyles.DoctorDetails}>
                <h2> Meet your Doctor </h2>
                <h3>Dr. Rob Rich, D.C.</h3>
                <p>
                  Rob Rich, D.C. is graduate of Life West Chiropractic
                  College in 1993 and has been practicing in San Diego
                  since 1994.
                </p>
                <p>
                  He is a certified practitioner of several adjusting
                  techniques as well as Active Release Technique (ART)
                  and Applied Kinesiology. He brings a strong
                  analytical and compassionate focus to his approach
                  in treating spinal and extremity related injuries.
                  Dr Rich is an avid trail runner who enjoys racing at
                  the marathon and 50k distances. He also is a skilled
                  guitarist and regularly performs in local venues
                  around Encinitas and the greater San Diego County area.
                </p>
                <div
                  style={{
                    justifyContent: 'center',
                    margin: 'auto',
                    display: 'flex',
                  }}
                >
                  <Button
                    as={Link}
                    to="/contact"
                    /*onClick={onClickSchedule}*/ className="blue-btns"
                  >
                    Schedule with Dr. Rich
                  </Button>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </Container>
    </section>
  );
};
export default AboutDoctors;
