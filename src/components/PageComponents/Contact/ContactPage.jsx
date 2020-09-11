import React, {Component} from 'react';

import ContactForm from './contactform';

import contactStyle from './contact.module.css';
import Banner from '../../banner';
//import SectionOne from '../Book/SectionOne';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,

} from "@fortawesome/free-brands-svg-icons"
*/
import { FaFacebook } from 'react-icons/fa';

class CopyEmail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      copySuccess: false
    }
  }



  render() {
    return (
      <div>
        <div>
          <a
            /*ref={(textarea) => this.emailLink = a}*/
            onClick={() => {navigator.clipboard.writeText("info@elitecarechiropractic.com")}}
            className={contactStyle.emailLink}
          >
            info@elitecarechiropractic.com
            </a>
            {
            this.state.copySuccess ?
            <div style={{"color": "green"}}>
              Success!
            </div> : null
          }
        </div>
      </div>
    )
  }
}

const ContactPage = () => (
  <>
    <Banner />
    <section className="section-contact" id="background">
      <Container className="py-5">
        <Row
          className="pb-5 mb-5"
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <h1 className={contactStyle.Title}>Got A Question? Get In Touch :)</h1>
          <div className="col-12 col-md-8">
            <ContactForm />
            {/* End Form */}
          </div>
          <div className="col-12 col-md-4 mb-5 mb-md-0 mt-5 mt-md-0">
            <aside className="pb-md-5">
              <div className={contactStyle.ContactInfo}>
                {/**<p className="mb-2">Phone</p>
                                                <p className="mb-2"><a href="tel:#">760-555-5555</a></p>**/}
                <h4 className="mb-2">Email</h4>
                <p className="mb-2">
                  {/*<a href="mailto:info@elitecarechiropractic.com">
                    info@elitecarechiropractic.com
                                              </a>*/}
                                              <CopyEmail />
                </p>
                <h4 className="mb-2">Phone</h4>
                <p className="mb-2">
                  <a href="tel:760 710-1901">760 710-1901</a>
                </p>
              </div>
              <hr />
              <h4 className={contactStyle.SocialLink}>
                Follow Us On Facebook!
              </h4>
              <div className={contactStyle.SocialLink}>
                {/*<a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                                              </a>*/}
                <a href="https://www.facebook.com/Elite-Care-Chiropractic-111683082181070">
                  {/*<FontAwesomeIcon icon={faFacebook} />*/}
                  <FaFacebook />
                </a>
              </div>
            </aside>
          </div>
        </Row>

      </Container>
    </section>
    {/*<section id="background">
      <Container>
        <h1>Book Your Appointment Online Now!</h1>
      </Container>
    </section>
    <SectionOne />*/}
  </>
);

export default ContactPage;
