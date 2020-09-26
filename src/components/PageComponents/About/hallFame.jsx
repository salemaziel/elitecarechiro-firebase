import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button';
import { OldCouple, Janelli, Hiking, GregWelch, HeatherFuhr, MichelieJones, RobynBenincasa, PaulaNewbyFrasier } from '../../../images/index';
import { Link } from 'gatsby';
import hallfameStyles from '../About/about.module.css';

const HallFame = () => (
  <>
  <section className="pm-5 py-5" style={{backgroundColor: '#0397d7', marginBottom: '25px'}} id="halloffame"
  >
    <Container>
      <Row>
        <Col>
        <h2 style={{color: 'white'}}>Our Pro Athlete Patient Hall of Fame!</h2>
        </Col>
      </Row>
    </Container>
  </section>
    <section className={hallfameStyles.MeetDoctorSection}>
      <Container>
        <div className="row d-flex flex-row" id="janelli">
          <Fade left cascade>
            <div className="col-md-5 my-auto text-center">
              <div className={hallfameStyles.DoctorImage}>
                <img src={PaulaNewbyFrasier} className="img-fluid" />{' '}
              </div>
            </div>
            <div className="col-md-7 my-auto">
              <div className={hallfameStyles.DoctorDetails}>
                <h2> Hall Of Fame </h2>
                <h3>Paula Newby-Fraser</h3>
                <p>
                  The greatest athlete to compete in the Ironman,
                  Paula has won the event eight times more than any
                  other human.
                </p>

                <div
                  style={{
                    justifyContent: 'center',
                    margin: 'auto',
                    display: 'flex',
                  }}
                ></div>
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
              <div className={hallfameStyles.DoctorImage}>
                <img src={MichelieJones} className="img-fluid" />
              </div>
            </div>
            <div className="col-md-7 my-auto">
              <div className={hallfameStyles.DoctorDetails}>
                <h2> Hall Of Fame </h2>
                <h3>Michellie Jones</h3>
                <p>
                  Michellie Jones became the first Australian woman to
                  win a World Ironman Championship with her victory in
                  the 2006 Ironman Triathlon in Kona, Hawaii. Heather
                  Fuhr Heather Fuhr is considered one of the best
                  woman runners in triathlon. Heather was the Ironman
                  Triathlon World Champion in 1997. Home About Us New
                  Patients Contact Us Affiliates web site designed by
                  Morgera Designs
                </p>

                <div
                  style={{
                    justifyContent: 'center',
                    margin: 'auto',
                    display: 'flex',
                  }}
                >

                </div>
              </div>
            </div>
          </Fade>
        </div>
      </Container>
      <br />
      <br />

     
    </section>
    <section className={hallfameStyles.MeetDoctorSection}>
      <Container>
        <div className="row d-flex flex-row" id="janelli">
          <Fade left cascade>
            <div className="col-md-5 my-auto text-center">
              <div className={hallfameStyles.DoctorImage}>
                <img src={GregWelch} className="img-fluid" />{' '}
              </div>
            </div>
            <div className="col-md-7 my-auto">
              <div className={hallfameStyles.DoctorDetails}>
                <h2> Hall Of Fame </h2>
                <h3>Greg Welch </h3>
                <p>
                One of the greatest triathletes of all time at all distances. Welch has won virtually every world title, including the ITU short-course world championship and the Ironman World Championship.
                </p>

                <div
                  style={{
                    justifyContent: 'center',
                    margin: 'auto',
                    display: 'flex',
                  }}
                ></div>
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
              <div className={hallfameStyles.DoctorImage}>
                <img src={RobynBenincasa} className="img-fluid" />
              </div>
            </div>
            <div className="col-md-7 my-auto">
              <div className={hallfameStyles.DoctorDetails}>
                <h2> Hall Of Fame </h2>
                <h3>Robyn Benincasa</h3>
                <p>
                Robyn Benincasa is recognized as one of the most consistent and decorated adventure racers in the world. Robyn realized a career-long goal by winning the 2000 Eco-Challenge in Borneo.
                </p>

                <div
                  style={{
                    justifyContent: 'center',
                    margin: 'auto',
                    display: 'flex',
                  }}
                >

                </div>
              </div>
            </div>
          </Fade>
        </div>
      </Container>

     
      <br />
      <br />

     
    </section>
    <section className={hallfameStyles.MeetDoctorSection}>
      <Container>
        <div className="row d-flex flex-row" id="janelli">
          <Fade left cascade>
            <div className="col-md-5 my-auto text-center">
              <div className={hallfameStyles.DoctorImage}>
                <img src={HeatherFuhr} className="img-fluid" />{' '}
              </div>
            </div>
            <div className="col-md-7 my-auto">
              <div className={hallfameStyles.DoctorDetails}>
                <h2> Hall Of Fame </h2>
                <h3>Heather Fuhr </h3>
                <p>
                Heather Fuhr is considered one of the best woman runners in triathlon. Heather was the Ironman Triathlon World Champion in 1997.
                </p>

                <div
                  style={{
                    justifyContent: 'center',
                    margin: 'auto',
                    display: 'flex',
                  }}
                ></div>
              </div>
            </div>
          </Fade>
        </div>
        <br />
        <br />
        <br />
        <br />

      </Container>

     
    </section>
  </>
);

export default HallFame;
