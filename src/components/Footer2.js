import React from "react";
import { Link } from "gatsby";
import { FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'


import footerStyles from "./footer2.module.css";

const Footer2 = () => (

      <footer id="footer" className={footerStyles.Footer}>
        <div className={footerStyles.content}>
          <div className={footerStyles.inner}>
            <section className={footerStyles.about}>
            <div className={footerStyles.QuickLinks}>
              <h2>Quick Links</h2>
              <div className="">
                <ul className="list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/treatments">Treatments</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/newpatients">New Patient Forms</Link>
                  </li>
                </ul>
              </div>
            </div>
              {/*<h3>Button to specific link</h3>
              <p>
               A link to something specific that someone may be looking for on your website.
              </p>
              <ul className={footerStyles.actions}>
                <li>
                  <a href="#" className={footerStyles.button}>
                    Link to thing
                  </a>
                </li>
              </ul>*/}
            </section>
            <div className={footerStyles.contact}>
            <ul className={footerStyles.iconBulleted}>
              <h3>Get In Touch</h3>
              <li className={footerStyles.Social}>
                <Link to="/contact" rel="preload"><FaEnvelope /></Link>
                  <a href="https://facebook.com" rel="noreferrer" ><FaFacebook /></a> 
              </li>
            </ul>
            </div>
          </div>
        </div>
        <p className={footerStyles.copyright}>
          Created by SalemAziel © All Rights Reserved
          </p>

      </footer>
    );
;
export default Footer2;
