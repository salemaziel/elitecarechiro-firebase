import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutStyle from "./about.module.css";


const Whatis = () => (
  <section className="">
    <Container>
      <Row>
        <Col>
        <div className={aboutStyle.WhatisArticle}>
          <article>
              <h2>What is Chiropractic?</h2>
            <p>
            Chiropractic is a system of healing which
              focuses on the nervous system and our body's own innate healing
              capabilities, with the goal of restoring the body to its natural
              state of optimal health. Chiropractors utilize a variety of
              natural healing methods with the main focus being their
              chiropractic adjustment. The adjustment is a quick movement
              applied to a vertebra or extremity with the purpose of restoring
              normal range of motion, reducing spasm, and relieving nerve
              irritation. </p>
              <p>It is so much more than pain relief! </p>
              <p>The nervous system is the master system in the
              body and controls and coordinates all other systems such as the
              muscular, digestive and immune systems. So the primary goal of the
              chiropractic adjustment is to keep the "lines of transmission free
              of interference" by removing disruptions in the flow of
              information that may be caused by slight vertebrae misalignment.</p>
              <p>
              In addition to the chiropractic adjustment other skills utilized
              are manual therapies that address stress within the muscular and
              facial systems, these systems are the surrounding tissues of
              muscle and connective tissue which also can be involved with nerve
              entrapment and responsible for abnormal biomechanics. The U.S.
              Dept of Labor Occupational outlook handbook states: "Because the
              Chiropractors emphasize the importance of healthy lifestyles and
              do not prescribe drugs or perform surgery, chiropractic care is
              appealing to many health conscious Americans". </p>
              <p>Some chiropractors
              also adjust extremities and use other forms of physiological
              treatments such as electrical stimulation, ultrasound, traction,
              trigger point massage, exercise, stretching and a variety of
              manual therapies. Keeping the body healthy or "wellness care" as
              opposed to just treating symptoms is also a primary focus of
              chiropractic.
            </p>
          </article>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Whatis;
