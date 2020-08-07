import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from 'gatsby'
//import { Link, useRouter } from "./../util/router.js";
//import { useAuth } from "./../util/auth.js";
import "./DashboardSection.scss";

function DashboardSection(props) {
//  const auth = useAuth();
//  const router = useRouter();

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
          className="text-center"
        ></SectionHeader>

        {/*{router.query.paid && auth.user.planIsActive && (*/}
          <Alert
            variant="success"
            className="text-center mx-auto"
            style={{ maxWidth: "300px" }}
          >
            You are now subscribed&nbsp;&nbsp;🥳
          </Alert>
       {/* )}*/}

        <Row className="align-items-center mt-5">
          <Col lg={6}>
            <p>This is where to give customer details on the subscription</p>
            <p></p>
            <p></p>
          </Col>
          <Col className="mt-5 mt-lg-0">
            <figure className="DashboardSection__image-container mx-auto">
              <Image
                src="https://cdn.pixabay.com/photo/2016/03/31/17/53/baking-1293986_960_720.png"
                fluid={true}
              ></Image>
            </figure>
          </Col>
        </Row>
        <div
          className="mt-5 mx-auto text-center"
          style={{
            maxWidth: "460px",
          }}
        >
          <small>Some helpful debug info 🐛</small>
          <ListGroup className="mt-2">
            <ListGroup.Item>
              Logged in as {/*<strong>{auth.user.email}</strong>*/}
            </ListGroup.Item>
            <ListGroup.Item>
              {/*{auth.user.stripeSubscriptionId && (*/}
                <>
                  Subscription data
                  <br />
                  ID: {/*<strong>{auth.user.stripeSubscriptionId}</strong>*/}
                  <br />
                  Price ID: {/*<strong>{auth.user.stripePriceId}</strong>*/}
                  <br />
                  Status: {/*<strong>{auth.user.stripeSubscriptionStatus}</strong>*/}
                </>
              {/*})}*/}

              {/*{!auth.user.stripeSubscriptionId && (*/}
                <Link to="/pricing">Subscribe to a plan</Link>
              {/*})}*/}
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/settings/general">Account settings</Link>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Container>
    </Section>
  );
}

export default DashboardSection;
