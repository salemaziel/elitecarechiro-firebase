import React, { Component } from 'react';
import { Link } from 'gatsby';
import { withFirebase } from '../../../utils/Firebase';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BasicFull from './basicComplete'


//import Jitsi from 'react-jitsi'

//const roomName = 'my-super-secret-meeting-123e4567-e89b-12d3-a456-426655440000'
//const userFullName = 'Joseph Strawberry'

/*export const BasicBetter = () => (
  <>
    <h2>My First Meeting!</h2>
    <Jitsi roomName={roomName} displayName={userFullName} />
  </>
)
*/
class TeleHealth extends Component {
render() {
    //    const { posts, description, title, loading } = this.state;

    //    if (loading) return <Loading />;

//const Home = (props) => {

    return (
        <section
        id="background"
        style={{
          width: '100%',
          height: '100%',
          margin: 'auto',
          paddingBottom: '5rem',
          minHeight: '400px',
        }}
      >
        <Container fluid>
          <Row>
            <Col>
              <h1 style={{ textAlign: 'center' }}>TeleHealth</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={2} className="NoMobile" />
            <Col>
            {/*<BasicFull />*/}
              <iframe id="ifStreaming" className="video" src="https://meet.jit.si/elite-care-chiropractic-encinitas" frameBorder="0" width="100%" height="100%" allow="microphone;camera" style={{marginBottom: '3rem', minHeight: '900px', paddingBottom: '5rem' }} sameSite="Secure"/>
            </Col>
            <Col xs={2} className="NoMobile" />
          </Row>
          </Container>
      </section>


    )
}
}

export default withFirebase(TeleHealth);
