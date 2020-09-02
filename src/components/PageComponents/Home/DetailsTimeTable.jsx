import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Map from '../../../images/googlemap.png'

import { Link } from 'gatsby'

import timetableLargeStyles from "./home.module.css";

const DetailsTimeTable = () => (
<div className="NoMobile">
  <section className={timetableLargeStyles.CenterDetails}>
    <Container>
      <Row>
        <div className="col-md-12">
          <h2> Get Back To Doing What You Love, Pain Free </h2>
          <br />
          
         
          
        </div>
      </Row>
    </Container>
  </section>
  <section className={timetableLargeStyles.Table}>
    <Container>
      <Row>
        <div className="col-md-12">
          <div className={timetableLargeStyles.TimeTable}>
            <div className="row d-flex flex-row">
              <div className="col-md-6 my-auto">
                <div className={timetableLargeStyles.LeftDetails}>
                <div className={timetableLargeStyles.AddressTitle}>
                    <h2 style={{textAlign: 'center', color: '#086788'}}>Suite 302</h2>
                    <h3 style={{textAlign: 'center', color: '#007bff'}}>317 N El Camino Real, Encinitas, CA 92024</h3>
                  </div>
                  <table>
                    <tbody>
                      <tr>
                        <td>Monday</td>
                        <td>:</td>
                        <td><div className={timetableLargeStyles.TableDetails}> 9:00AM - 5:00PM </div></td>
                      </tr>
                      <tr>
                        <td>Tuesday</td>
                        <td>:</td>
                        <td><div className={timetableLargeStyles.TableDetails}> 9:00AM - 5:00PM </div></td>
                      </tr>
                      <tr>
                        <td>Wednesday</td>
                        <td>:</td>
                        <td><div className={timetableLargeStyles.TableDetails}> 9:00AM - 5:00PM </div></td>
                      </tr>
                      <tr>
                        <td>Thursday</td>
                        <td>:</td>
                        <td><div className={timetableLargeStyles.TableDetails}> 9:00AM - 5:00PM </div></td>
                      </tr>
                      <tr>
                        <td>Friday</td>
                        <td>:</td>
                        <td><div className={timetableLargeStyles.TableDetails}> 9:00AM - 5:00PM </div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/*<div className="col-md-6 my-auto">*/}
<Col style={{padding: '0'}}>
                <div className={timetableLargeStyles.MapResponsive}>
                  {/*<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=place_id:ChIJNT5NO48L3IARRWKVIPGczIo" frameBorder={0} style={{border: 0}} allowFullScreen sameSite="Secure"/>*/}
                  <a href="https://www.google.com/maps/dir//Elite+Care+Chiropractic+Center,+317+N+El+Camino+Real,+Encinitas,+CA+92024/@33.0544518,-117.2630489,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dc0b8f3b4d3e35:0x8acc9cf120956245!2m2!1d-117.2608602!2d33.0544518" rel="nofollow">
                  <img src={Map} alt="Google Map Directions" />
                  </a>
                </div>
              {/*</div>*/}
              </Col>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  </section>
</div>


)

export default DetailsTimeTable