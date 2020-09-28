import React from 'react';
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';

import { Medical } from '../../../images/index';
import { Link } from 'gatsby';

import '../../../images/index';
import meetStyles from './home.module.css';

import Fade from 'react-reveal/Fade';

const MeetDoctor = () => (
  <section className={meetStyles.MeetDoctorSection}>
    <Container>
      <div className="row d-flex flex-row">
        <div className="col-md-5 my-auto text-center">
          <Fade cascade left ssrReveal>
            <div className={meetStyles.DoctorImage}>
              <img src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601317866/elite-care-chiropractic/IMG_20200925_180154_qiucs0.jpg" className="img-fluid" style={{borderRadius: '50%'}} />{' '}
            </div>
          </Fade>
        </div>
        <div className="col-md-7 my-auto">
          <Fade cascade left ssrReveal>
            <div className={meetStyles.DoctorDetails}>
              <h2> Meet Your Doctor </h2>
              <h3>Dr. Linda Jannelli, D.C.</h3>
              <br />
              {/* <p>Dr. Linda Jannelli is a graduate of Life Chiropractic College
              West, where she graduated Magna Cum Laude. </p>*/}
              <Button
                as={Link}
                to="/about#janelli"
                rel="preload"
                className="blue-btns"
              >
                About Dr. Janelli
              </Button>{' '}
            </div>
          </Fade>
        </div>
      </div>

      <div className="row d-flex flex-row flex-row-reverse">
        <div className="col-md-5 my-auto text-center">
          <Fade cascade right ssrReveal>
            <div className={meetStyles.DoctorImage}>
              <img src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601318246/elite-care-chiropractic/IMG_20200925_180157-square_rout2v.jpg" className="img-fluid" style={{borderRadius: '50%'}}  />
            </div>
          </Fade>
        </div>
        <div className="col-md-7 my-auto">
          <Fade cascade right ssrReveal>
            <div className={meetStyles.DoctorDetails}>
              <h2> Meet Your Doctor </h2>
              <h3>Dr. Rob Rich, D.C.</h3>
              <br />
              {/*  <p>Rob Rich, D.C. is graduate of Life West Chiropractic College in 1993 and has been practicing in San Diego since 1994. </p>*/}
              <Button
                as={Link}
                to="/about#rich"
                rel="preload"
                className="blue-btns"
              >
                About Dr. Rich
              </Button>{' '}
            </div>
          </Fade>
        </div>
      </div>
    </Container>
  </section>
);

export default MeetDoctor;
