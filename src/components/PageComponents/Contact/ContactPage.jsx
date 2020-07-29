import React from 'react'


import ContactForm from './contactform'

import contactStyle from './contact.module.css'
import Banner from '../../banner'

/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,

} from "@fortawesome/free-brands-svg-icons"
*/
import {
  FaFacebook
} from 'react-icons/fa'

const ContactPage = () => (
    <>
        <Banner />
        <section className="section-contact">
        <div className="container py-5">
          <div
            className="row pb-5 mb-5"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <div className="col-12 col-md-8">
              {/* Form */}
              {/*<form
                name="Contact"
                method="post"
                action="/thanks"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <div
                  className="row mt-5 mb-4"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="Contact" />
             {/*     <p hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={handleChange} />
                    </label>
                  </p> * /}
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Your Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="textarea"
                      name="message"
                      placeholder="Your Message"
                      className="textarea"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div
                  className="row"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <div className="col-12">
                    <button
                      type="submit"
                      value="Send Message"
                      className="form button"
                      onChange={handleSubmit}
                    >
                      SUBMIT{" "}
                    </button>
                  </div>
                </div>
             </form>*/}



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
                    <a href="mailto:info@elitecarechiropractic.com">
                      info@elitecarechiropractic.com
                    </a>
                  </p>
                  <h4 className="mb-2">Phone</h4>
                  <p className="mb-2">
                    <a href="tel:760 710-1901">
                    760 710-1901
                    </a>
                  </p>
                </div>
                <hr />
                <h4 className={contactStyle.SocialLink}>Follow Us On Facebook!</h4>
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
          </div>
        </div>
      </section>

    </>
)

export default ContactPage