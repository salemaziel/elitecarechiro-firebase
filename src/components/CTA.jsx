import React from "react";

import Button from 'react-bootstrap/Button'
import { Link } from 'gatsby'

import ctaStyles from "./cta.module.css";


const CTA = () => (
  <>


  <section id="two" className={ctaStyles.cta}>
    <div className={ctaStyles.inner}>
      <header>
        <h2>Schedule Your Appointment Today</h2>
      </header>
      <div style={{margin: '10%'}}>

          <Button as={Link} to="/book-online" /*data-appointlet-organization="elite-care-chiropractic"*/
          className="blue-btns btn btn-primary"
          type="button"

        >
          Book Online
        </Button>
      </div>
    </div>
  </section>

  </>
);

export default CTA;
