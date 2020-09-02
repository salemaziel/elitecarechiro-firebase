import React from 'react';
import Section from './Section';
import Container from 'react-bootstrap/Container';
import SectionHeader from './SectionHeader';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'gatsby';
import { AuthUserContext } from '../utils/Session';

import MyServices from './scenes/Home/MyServices';

//import { Link, useRouter } from "./../util/router.js";
//import { useAuth } from "./../util/auth.js";
import './DashboardSection.scss';

//function DashboardSection(props) {
//  const auth = useAuth();
//  const router = useRouter();
const DashboardSection = (props) => {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center justify-content-center text-center mt-1 mb-5">
          <AuthUserContext.Consumer>
            {(authUser) => (
              <div>
                <h2>
                  Welcome <strong>{authUser.email} </strong>!
                </h2>
              </div>
            )}
          </AuthUserContext.Consumer>
        </Row>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={props.size}
          spaced={true}
          className="text-center"
        ></SectionHeader>

        {/*{router.query.paid && auth.user.planIsActive && (*/}
        {/*<Alert
            variant="success"
            className="text-center mx-auto"
            style={{ maxWidth: "300px" }}
          >
            You are now subscribed&nbsp;&nbsp;🥳
          </Alert>
       {/* )}*/}

        {/*<Row className="align-items-center mt-5">
          <Col lg={6}>
            <p>
              This is where to give customer details on the
              subscription
            </p>
            <p></p>
            <p></p>
          </Col>
        </Row>*/}
        <AuthUserContext.Consumer>
          {(authUser) => (
            <div>
              <Row>
                <MyServices
                  items={[
                    {
                      image:
                        'https://res.cloudinary.com/dexdumfqy/image/upload/v1599069538/elite-care-chiropractic/calendar_izb5dd.jpg',
                      alt: 'My appointments',
                      title: 'My Appointments',
                      text: '',
                      link: '#',
                    },
                    {
                      image:
                        'https://res.cloudinary.com/dexdumfqy/image/upload/v1599069399/elite-care-chiropractic/videochat-button_adsynr.png',
                      alt: 'My Telehealth',
                      title: 'My TeleHealth',
                      text: '',
                      link: '/telehealth',
                    },
                  ]}
                />
              </Row>
            </div>
          )}
        </AuthUserContext.Consumer>

        <div
          className="mt-5 mx-auto text-center"
          style={{
            maxWidth: '460px',
          }}
        >
          <small>Some info 🐛</small>
          <ListGroup className="mt-2">
            <AuthUserContext.Consumer>
              {(authUser) => (
                <ListGroup.Item>
                  Logged in as <strong>{authUser.email}</strong>
                </ListGroup.Item>
              )}
            </AuthUserContext.Consumer>
            <ListGroup.Item>
              {/*{auth.user.stripeSubscriptionId && (*/}
              <>
                {/*Subscription data
                <br />
                ID:{' '}
                {/*<strong>{auth.user.stripeSubscriptionId}</strong>* /}
                <br />
                Price ID:{' '}
                {/*<strong>{auth.user.stripePriceId}</strong>* /}
                <br />
                Status:{' '}
                {/*<strong>{auth.user.stripeSubscriptionStatus}</strong>*/}
              </>
              {/*})}* /}

              {/*{!auth.user.stripeSubscriptionId && (* /}
              <Link to="/pricing">Subscribe to a plan</Link>
              {/*})}*/}
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/account">Account settings</Link>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Container>
    </Section>
  );
};

export default DashboardSection;
