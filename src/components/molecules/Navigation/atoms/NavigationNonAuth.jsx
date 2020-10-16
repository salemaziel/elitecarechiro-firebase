import React, { useState } from 'react';
import { Link, navigateTo } from 'gatsby';
//import {
//  LANDING,
//  SIGN_IN,
//  SIGN_UP,
//} from '../../../../constants/routes';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import SideNav from 'react-simple-sidenav';

import NavItem from 'react-bootstrap/NavItem';

import NavDropdown from 'react-bootstrap/NavDropdown';

import BookOnlineButton from '../../../BookOnlineButton';
//import CalendlyButton from '../../../CalendlyButton'

import { LogoSM } from '../../../../images/index';

import nonauthnavStyles from './nav.module.css';

//const NavigationNonAuth = (props) => {
//  const [showNav, setShowNav] = useState();

//  return (
class NavigationNonAuth extends React.Component {
  constructor() {
    super();

    this.state = {
      showNav: false,
      title: '',
      items: '',
      openFromRight: '',
    };
  }
  render() {
    return (
      <>
        <div className="coronadiv NoMobile">
          <span
            style={{
              fontWeight: '700',
              fontSize: '16px',
            }}
          >
            WE ARE OPEN{' '}
          </span>{' '}
          - Learn more about Elite Care Chiropractic's response to
          COVID-19 by contacting us{' '}
          <Link
            to="/contact"
            style={{
              textDecoration: 'underline',
              cursor: 'pointer',
              color: 'white',
              fontWeight: '700',
            }}
          >
            {' '}
            HERE
          </Link>
        </div>
        <Navbar
          bg="white"
          variant="light"
          expand="lg"
          /*fixed="top"*/ style={{
            position: 'sticky',
            top: '0px',
            right: '0',
            left: '0',
            zIndex: '5',
            border: '1px solid',
            borderColor: 'rgba(0,0,0,0.05)',
            borderRadius: '5px',
          }}
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src={LogoSM}
                alt="Elite Care Chiropractic Logo"
                className={nonauthnavStyles.Logo}
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => this.setState({ showNav: true })}
            />
            <div className={nonauthnavStyles.NavBar}>
              <Nav
                className="mr-auto"
                defaultActiveKey="/"
                onSelect={(selectedKey) =>
                  navigateTo(`${selectedKey}`)
                }
              >
                {/*<NavItem href="/about">
                    <Nav.Link as={Link} activeClassName="active" to="/about">
                      About Us
                    </Nav.Link>
                  </NavItem>*/}

                <NavDropdown
                  as={Link}
                  href="/about"
                  to="/about"
                  eventKey="about"
                  title="About Us"
                  id="nav-dropdown-about"
                >
                  <NavDropdown.Item eventKey="/about#whatschiropractic">
                    {' '}
                    What Is Chiropractic{' '}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/about#meetdoctors">
                    Meet Your Doctors
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/testimonials">
                    Testimonials
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/about#halloffame">
                    Our Hall of Fame
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  as={Link}
                  href="/treatments"
                  to="/treatments"
                  eventKey="treatments"
                  title="Treatments"
                  id="nav-dropdown-treatments"
                >
                  <NavDropdown.Item eventKey="/treatments/motor-vehicle-collisions">
                    {' '}
                    Motor Vehicle Collision{' '}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/treatments/neck-and-back-pain">
                    Neck and Back Pain
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/treatments/sports-injuries">
                    Sports Injuries
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  as={Link}
                  href="/services"
                  to="/services"
                  eventKey="services"
                  title="Services"
                  id="nav-dropdown-services"
                >
                  <NavDropdown.Item eventKey="/services/gait-evaluation">
                    Gait Evaluation
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/services/orthotics">
                    Orthotics
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/services/myofascial-release">
                    {' '}
                    Myofascial Release{' '}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/services/physiotherapy-protocols">
                    Physiotherapy Protocols{' '}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/services/adjustive-technique">
                    Adjustive Technique{' '}
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  as={Link}
                  href="/patients"
                  to="/patients"
                  eventKey="patients"
                  title="Patients"
                  id="nav-dropdown-patients"
                >
                  <NavDropdown.Item eventKey="/patients/new-patients">
                    {' '}
                    New Patients{' '}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/patients/signin">
                    Sign In
                  </NavDropdown.Item>
                </NavDropdown>

                <NavItem>
                  <Nav.Link
                    as={Link}
                    activeClassName="active"
                    to="/contact"
                  >
                    Contact
                  </Nav.Link>
                </NavItem>
              </Nav>
              <Nav className="ml-auto">
                <NavItem>
                  <Button
                    as={Link}
                    to="/contact"
                    className="blue-btns btn btn-primary"
                  >
                    Book Appointment
                  </Button>
                </NavItem>

                {/*<BookOnlineButton />*/}
              </Nav>
            </div>
          </Container>
        </Navbar>
        <SideNav
          openFromRight={true}
          title={
            <div
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}
            ></div>
          }
          titleStyle={{
            background: 'inherit',
            backgroundColor: 'transparent',
            color: 'black',
            margin: 'auto',
          }}
          items={[
            <Link
              rel="preload"
              className={nonauthnavStyles.SideNavLink}
              to="/"
            >
              Home
            </Link>,
            <Link
              rel="preload"
              className={nonauthnavStyles.SideNavLink}
              to="/about"
            >
              About
            </Link>,
            <Link
              rel="preload"
              className={nonauthnavStyles.SideNavLink}
              to="/contact"
            >
              Contact
            </Link>,
            <Link
              rel="preload"
              className={nonauthnavStyles.SideNavLink}
              to="/signin"
            >
              Sign In
            </Link>,
            <Link
              rel="preload"
              className={nonauthnavStyles.SideNavLink}
              to="/patients/new-patients"
            >
              New Patients
            </Link>,

            <Link
              rel="preload"
              className={nonauthnavStyles.SideNavLink}
              to="/services"
            >
              Services &#38; Treatments
            </Link>,
            <Button
              as={Link}
              to="/contact"
              className="blue-btns btn btn-primary"
            >
              Book Appointment
            </Button>,
          ]}
          itemStyle={{
            background: 'transparent!important',
            backgroundColor: 'transparent!important',
            color: '#fff',
            fontSize: '2rem',
            padding: '10px 0',
            textAlign: 'center',
            margin: '1rem auto',
          }}
          navStyle={{
            width: '70%',
            background: 'rgba(3,151,215,0.95)',
            backgroundColor: 'rgba(3,151,215,0.95)',
            color: 'white!important',
            maxHeight: '100vh',
          }}
          showNav={this.state.showNav}
          onHideNav={() => this.setState({ showNav: false })}
        />
      </>
    );
  }
}

export default NavigationNonAuth;
