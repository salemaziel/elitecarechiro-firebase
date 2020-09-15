import React from 'react';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPhoneAlt } from 'react-icons/fa'

import {
  WomanOnTrack,
  GreenShirtGuy,
  BackPain,
  BackPic1
} from '../../../../images/index';

import neckStyles from '../treatment.module.css';

const SectionOne = () => (
  <div className={neckStyles.sidebarPageContainer}>
    <div className={neckStyles.autoContainer}>
      <Row>
        {/*Sidebar Side*/}
        <div className="sidebar-side col-lg-3 col-md-4 col-sm-12 col-xs-12">
          <aside className={neckStyles.AsideCategories}>
            {/*Blog Category Widget*/}
            <div className={neckStyles.sidebarWidget}>
              <ul className={neckStyles.Categories}>
                <li>
                  <Link to="/services/adjustive-technique">
                    Adjustive Technique
                  </Link>
                </li>
                <li>
                  <Link to="/services/gait-evaluation">
                    Gait Evaluation
                  </Link>
                </li>
                <li>
                  <Link to="/services/myofascial-release">
                    Myofascial Release
                  </Link>
                </li>
                <li>
                  <Link to="/treatments/motor-vehicle-collisions">
                    Motor Vehicle Collisions
                  </Link>
                </li>
                <li className={neckStyles.active}>
                  <Link to="/treatments/neck-and-back-pain">
                    Neck and Back Pain
                  </Link>
                </li>
                <li>
                  <Link to="/services/orthotics">Orthotics</Link>
                </li>
                <li>
                  <Link to="/services/physiotherapy-protocols">
                    PhysioTherapy Protocols
                  </Link>
                </li>
                <li>
                  <Link to="/treatments/sports-injuries">
                    Sport Injuries
                  </Link>
                </li>
              </ul>
            </div>
            {/*Brochure*/}
            {/*  <div className="sidebar-widget brochure-widget">
            <div className="brochure-box">
              <div className="inner">
                <span className="icon fa fa-file-pdf-o" />
                <div className="text">Download Brochure</div>
              </div>
              <a href="#" className="overlay-link" />
            </div>
            </div> */}
            {/*Info Widget*/}
            <div className={neckStyles.ListWidget}>
              <ul>
                <li>
                  
                  760-710-1901
                </li>
                <li>
                  <span
                    className="icon fa fa-send"
                    style={{ fontSize: '16px' }}
                  />{' '}
                  info@elitecarechiropractic.com
                </li>
              </ul>
            </div>
          </aside>
        </div>
        {/*Content Side*/}
        <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
          <div className={neckStyles.ServicesSingle}>
            <div className={neckStyles.InnerBox}>
              <h2>Relief From Acute and Chronic Neck and Back Pain</h2>
              <div className={neckStyles.InnerText}>
                <Row>
                <Col xs={12} lg={6}>
                {/*<p style={{marginBottom: '0rem'}}>
                  The most common reason people make
                  appointments with chiropractors is for conditions
                  involving pain in their back, neck, and hips. Many
                  people deal with pain by taking drugs to cover up
                  the problem (ibuprofen, aspirin, etc). While this
                  approach may help with dealing with their symptoms,
                  it may not be helpful in correcting the underlying
                  cause of the problem. Identifying the cause of the
                  problem is undertaken by a complete examination
                  which includes orthopedic, neurologic, postural
                  assessment and, if indicated, appropriate imaging
                  (X-ray, MRI). Once diagnosed, a specific and
                  comprehensive treatment protocol is initiated.
          </p>*/}
                <p>
                Back, neck, and hip pain are the leading reason people schedule a chiropractor appointment. With good reason; that pain hurts!
                </p>
                </Col>
                <Col >
                <div className="flex-auto justify-content-center" style={{marginLeft: '2rem'}}>
                  <img src={BackPain} style={{border: '1px white', borderRadius: '50%', margin: 'auto', width: '70%'}} />
                </div>
                </Col>
                </Row>
                <br />
                <Row>
                  <Col xs={12}>
                {/*<p style={{marginBottom: '3rem'}}>
                  At Elite Care, we pride ourselves in addressing
                  every component of the injury. Utilizing the latest
                  technology and information, we design treatment
                  protocols specific for your condition. Specific
                  chiropractic adjustments, myofascial release and
                  physiotherapy are administered to improve function
                  and reduce inflammation and pain. We follow up
                  treatment with appropriate core stabilization,
                  stretching and rehabilitative exercise to prevent
                  the injury from returning.
          </p>*/}
                <p>
                Disc injuries can happen anywhere in the spine but are most commonly found in the neck or lower back. The intervertebral discs separate and connect the vertebrae of the spine to form the spinal column. They act like "shock absorbers" to the spine and are an important part of spinal movement. While disc injuries may be caused by acute trauma, they also may be a result of repetitive overuse or poor postural mechanics.
                </p>
                </Col>
                </Row>
                {/*Two Column*/}
              </div>
              {/*<div className={neckStyles.ServicesTopImage}>
                <img
                  src={GreenShirtGuy}
                  alt=""
                  className="img-fluid"
                />
               </div>*/}
              {/*   <h2>Therapy Details</h2> */}
              <div className={neckStyles.InnerText}>
  
                <div className={neckStyles.ColumnTwo}>
                  <Row>
                  <Col>
                  <div className="img-fluid">
                      <img
                        src={BackPic1}
                        alt=""
                        className="img-fluid"
                      ></img>
                    </div>
                    </Col>
                    <Col xs={12} lg={6}>
                    <h2>Why Does It Hurt?</h2>
                    {/*<p >
                  Disc injuries can happen anywhere in the spine but
                  are most commonly found in the neck or lower back.
                  The intervertebral discs separate and connect the
                  vertebrae of the spine to form the spinal column.
                  They act like "shock absorbers" to the spine and are
                  an important part of spinal movement. While disc
                  injuries may be caused by acute trauma, they also
                  may be a result of repetitive overuse or poor
                  postural mechanics. 
                  </p>
                  <p>
                  The intervertabral disc is made
                  up of a cartilage exterior and a center filled with
                  "gel-like" material. It has a center, called the
                  nucleus pulposis, which acts like a ball bearing
                  that the spinal segments pivot on. Through injury,
                  this "ball bearing" may slowly or quickly, in the
                  case of acute trauma, shift out of position pushing
                  material in front of it forward which can create a
                  disc "bulge" or herniation. 
                  </p>
                  <p>This bulging material
                  may create compression of nerves producing radiating
                  pain patterns that emanate from the spine. Having a
                  bulging disc does not necessarily mean surgery!
                  Specific treatment, stretching and exercise can
                  often provide relief for disc related conditions.
                </p>*/}

                <p>
                The intervertabral disc is made up of a cartilage exterior and a center filled with "gel-like" material. It has a center, called the nucleus pulposis, which acts like a ball bearingthat the spinal segments pivot on. Through injury, this "ball bearing" may shift out of position, pushing material in front of it forward creating a disc "bulge" or herniation. This bulging material may create compression of nerves producing radiating pain patterns that emanate from the spine. Having a bulging disc does not necessarily mean surgery! Specific treatment, stretching and exercise can often provide relief for disc related conditions.
                </p>
                <p>
                Many people try to deal with that pain with drugs to cover up the problem (ibuprofen, aspirin, etc). While this approach may help in dealing with the painful symptoms, they do not correct the problem's underlying cause.
                </p>
                <p>
                At Elite Care, we pride ourselves in addressing every component of the injury. Utilizing the latest technology and information, we design treatment protocols specific for your condition. 
 Identifying that cause of is done by a complete examination, including orthopedic, neurologic, postural assessment and, if indicated, appropriate imaging (X-ray, MRI). 
                </p>

                <p>
                Once diagnosed, we initiate a specific and comprehensive treatment protocol. We administer specific chiropractic adjustments and physiotherapy to improve body function and reduce pain and inflammation. Follow up treatment includes appropriate core stabilization, stretching, and rehabilitative exercise to prevent past injuries from returning.
                </p>


                  </Col>
                  </Row>
                  {/*<Col>
                    <div className="img-fluid">
                      <img
                        src={BackPic1}
                        alt=""
                        className="img-fluid"
                      ></img>
                    </div>
                  </Col>*/}
                </div>
              </div>


            </div>
          </div>
          {/*   </div> */}
          {/* </div> */}
        </div>
      </Row>
    </div>
  </div>
);

export default SectionOne;
