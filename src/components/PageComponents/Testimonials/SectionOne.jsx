import React from "react";
import NewPatientsPDF from "../../../../static/new-patient-forms.pdf";
import Container from "react-bootstrap/Container";
import newpatientStyles from "./newpatients.module.css";

import HipaaNotice from '../../../../static/notice_of_privacy_practices.pdf'

const SectionOne = () => (
  <section id="background" className={newpatientStyles.PatientSection}>
    <Container>
      {/*<div className="row clearfix">
        {/*Content Column* /}
        <div className="content-column col-lg-9 col-md-8 col-sm-12 col-xs-12">
          <div className={newpatientStyles.InnerColumn}>
            <div className={newpatientStyles.Title}>
              <h2>New Patient Paper Work</h2>
            </div>
            <div className={newpatientStyles.BoldText}>
              {" "}
              We offer our patient forms online for you to fill out and complete
              in the comfort of your own home prior to your office visit. <br />
              <br />
              We look forward to treating you!{" "}
            </div>
            <hr  style={{width: '50%'}}/>
            <div className={newpatientStyles.Text}>
              <div style={{color: 'black', textDecoration:'underline'}}>
                Patient Forms include: 
                </div>
              <ul>
                <li>
                  New Patient Information
                </li>
                <li>
                  Patient Health History
                </li>
                <li>
                  Informed Consent Confirmation
                </li>
                <li>
                  Consent To Treat
                </li>
                <li>
                  Your Patient Rights
                </li>
              </ul>
            </div>
            <ul className="list-style-two">
              <li>
                All forms are PDF files. You will need AdobeReader to view them
              </li>
            </ul>
            <ul className={newpatientStyles.PatientList}>
              <li>
                <a href={NewPatientsPDF}>Adult New Patient Forms</a>
              </li>
            </ul>
            <br />
            <hr />
            <div className={newpatientStyles.Text}>
            Your privacy is important to us. <br />
            Any information gathered from the above forms or through any communications is subject to our Patient Privacy Policy.
            <ul className="">
              <li>
                <a href={HipaaNotice}>HIPAA Notice of Privacy Practices</a>
              </li>
            </ul>
            </div>
          </div>
        </div>
        {/*Info Column* /}
        <div className="info-column col-lg-3 col-md-4 col-sm-8 col-xs-12">
          <div className={newpatientStyles.PatientBox}>
            <div className={newpatientStyles.InnerBox}>
              <h2>New patient</h2>
              <h3>Special Offer</h3>
              <div className={newpatientStyles.InnerBoxText}>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non.
              </div>
              <a href="#" className={newpatientStyles.ColumnButton}>
                Click here
              </a>
            </div>
          </div>
          <h4>Contact Info</h4>
          <hr style={{width: '50%'}} />
          <ul className={newpatientStyles.OfferList}>
          <li>
              <a href="tel:1-760-710-1901">{" "}760 710-1901</a>
            </li>
            <br />
            <li>
              <a href="https://www.google.com/maps/place/Elite+Care+Chiropractic+Center/@33.054452,-117.26086,16z/data=!4m5!3m4!1s0x0:0x8acc9cf120956245!8m2!3d33.0544518!4d-117.2608602?hl=en-US">
                {" "}
                317 N El Camino Real <br /> Encinitas, CA 92024
              </a>
            </li>
            <br />

            <li>
              <a href="mailto:info@elitecarechiropractic.com">{" "}
                info@elitecarechiropractic.com
              </a>
            </li>
          </ul>
        </div>
</div>*/}

<div class="elfsight-app-df065379-3107-454d-94b1-03aa362fad64"></div>
    </Container>
  </section>
);

export default SectionOne;
