import React, { useState } from 'react';
import { Link, navigateTo } from 'gatsby';
import { LANDING, HOME, ACCOUNT } from '../../../../constants/routes';
import SignOutButton from './SignOutButton';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import NavItem from 'react-bootstrap/NavItem';

import NavDropdown from 'react-bootstrap/NavDropdown';

import CalendlyButton from '../../../CalendlyButton';

import mynavStyles from '../../../nav.module.css';
//const NavigationAuth = (props) => {
//    const [showNav, setShowNav] = useState();

//    return (
class NavigationAuth extends React.Component {
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
                src="https://res.cloudinary.com/dexdumfqy/image/upload/v1585549217/elite-care-chiropractic/logo_1_mgsyvm.png"
                alt="Elite Care Chiropractic Logo"
                className={mynavStyles.Logo}
              />
            </Navbar.Brand>
            <Nav className="mr-1" id="">
              <MenuIcon
                aria-controls="basic-navbar-nav"
                onClick={() => this.setState({ showNav: true })}
                style={{
                  width: '50px',
                  height: '50px',
                  color: '#0397d7',
                  fill: '#0397d7',
                }}
              />
            </Nav>
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
            <Link rel="preload" className="signout-btn" to="/home">
              My Account
            </Link>,
            <Link rel="preload" className="signout-btn" to="/account">
              Account Settings
            </Link>,

            <Link rel="preload" className="signout-btn" to="/contact">
              Contact Us
            </Link>,
            <Link
              rel="preload"
              className="signout-btn"
              to="/patients/new-patients"
            >
              Patient Forms
            </Link>,
            <Link
              rel="preload"
              className="signout-btn"
              to="/telehealth"
            >
              TeleHealth
            </Link>,

            <SignOutButton />,
          ]}
          itemStyle={{
            background: 'rgba(3,151,215,0.1)',
            backgroundColor: 'rgba(3,151,215,0.1)',
            color: '#fff',
            fontSize: '2rem',
            padding: '10px 0',
            textAlign: 'center',
            margin: '1rem auto',
          }}
          navStyle={{
            width: '70%',
            background: 'rgba(3,151,215,0.9)',
            backgroundColor: 'rgba(3,151,215,0.9)',
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

export default NavigationAuth;
