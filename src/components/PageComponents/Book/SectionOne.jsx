import React from "react";
import Container from "react-bootstrap/Container";
import bookStyles from "./booking.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SectionOne = () => (
  <section className={bookStyles.S1Booking} id="background">
    <Container className={bookStyles.C1Booking}>
      <Row>
        <Col>
          <iframe
            title="Book Appointment"
            src="https://booking.appointy.com/salemaziel"
            width="100%"
            height={1000}
            frameBorder={0}
            style={{
              border: "0",
              boxShadow:
                "inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em rgba(0,0,0,0.3);",
            }}
            scrolling="auto"
            sameSite="Secure"
          />
        </Col>
      </Row>
    </Container>
  </section>
);

export default SectionOne;
