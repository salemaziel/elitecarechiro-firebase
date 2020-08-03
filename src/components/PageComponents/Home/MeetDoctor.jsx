import React from 'react'
import Container from "react-bootstrap/Container"

import Button from "react-bootstrap/Button"

import { Medical } from '../../../images/index'
import { Link } from 'gatsby'

import '../../../images/index'
import meetStyles from "./home.module.css";

import Fade from 'react-reveal/Fade'

const MeetDoctor = () => (
<section className={meetStyles.MeetDoctorSection}>
  <Container>
    <Fade left>
    <div className="row d-flex flex-row">
      <div className="col-md-5 my-auto text-center">
        <div className={meetStyles.DoctorImage}> 
        <img src={Medical} className="img-fluid" /> </div>
      </div>
      <div className="col-md-7 my-auto">
        <div className={meetStyles.DoctorDetails}>
          <h2> Meet Your Doctor </h2>
          <h3>Dr. Linda Janelli, D.C.</h3>
          <br />
         {/* <p>Dr. Linda Jannelli is a graduate of Life Chiropractic College
              West, where she graduated Magna Cum Laude. </p>*/}
            <Button as={Link} to="/about#janelli" rel="preload" className="blue-btns">About Dr. Janelli</Button> </div>
      </div>
    </div>
    </Fade>
    <Fade right>
    <div className="row d-flex flex-row flex-row-reverse">
      <div className="col-md-5 my-auto text-center">
        <div className={meetStyles.DoctorImage}> 
        <img src={Medical} className="img-fluid" /> 
        </div>
      </div>
      <div className="col-md-7 my-auto">
        <div className={meetStyles.DoctorDetails}>
          <h2> Meet Your Doctor </h2>
          <h3>Dr. Rob Rich, D.C.</h3>
          <br />
        {/*  <p>Rob Rich, D.C. is graduate of Life West Chiropractic College in 1993 and has been practicing in San Diego since 1994. </p>*/}
            <Button as={Link} to="/about#rich" rel="preload" className="blue-btns">About Dr. Rich</Button> </div>
      </div>
    </div>
    </Fade>
  </Container>
</section>
);

export default MeetDoctor