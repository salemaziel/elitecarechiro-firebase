import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from 'gatsby'


import treatmentStyles from "./treatment.module.css";

const MiniBanner = () => (
  <section className={treatmentStyles.MiniBanner}>
    <Container >
      <Row>
      <div className="col-md-12 my-auto text-center">
        <Button as={Link} to="/newpatients" rel="preload" className={treatmentStyles.MiniBannerButton}>
          New Patient Forms
        </Button>{" "}
      </div>
      </Row>
    </Container>
  </section>
);

export default MiniBanner;
