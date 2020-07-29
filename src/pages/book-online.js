import React from "react";
import Layout from "../components/layout";


import BookOnlinePage from '../components/PageComponents/Book/BookOnlinePage'

const Schedule = () => (
  <Layout>
   {/* <div
      style={{
        height: "50px",
        width: "100%",
        margin: "auto",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    />

    <Banner />
    <section style={{ backgroundColor: "blue" }}>
      <Container
        style={{
          minHeight: "800px",
          width: "100%",
          margin: "auto",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Row
          style={{ display: "flex", margin: "auto", justifyContent: "center" }}
        >
          <Booking />
          {/*<iframe
            src="https://booking.appointy.com/salemaziel/?isGadget=1"
            width={800}
            height={760}
            frameBorder={0}
            style={{border: '0'}}
            scrolling="auto"
          />* /}

          <iframe
            title="Book Appointment"
            src="https://elite-care-chiropractic.appointlet.com"
            width="100%"
            height={1000}
            frameBorder={0}
            style={{ border: "0" }}
            scrolling="auto"
          />
        </Row>
      </Container>
    </section>*/}
    <BookOnlinePage />
  </Layout>
);

export default Schedule;
