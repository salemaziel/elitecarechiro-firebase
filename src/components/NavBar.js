import { Link, navigateTo } from "gatsby";
import React from "react";
import SideNav from "react-simple-sidenav";

//import { Button, Navbar, Nav, NavItem, Container } from "react-bootstrap";
import navStyles from "./nav.module.css";
import { LogoLG } from "../images/index";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";

import NavDropdown from "react-bootstrap/NavDropdown";



//const NavBar = () => (
class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {
      showNav: false,
      title: "",
      items: "",
      openFromRight: "",
    };
  }
  render() {
    return (
      <>

        <Navbar
          bg="white"
          variant="light"
          expand="lg"
          /*fixed="top"*/ style={{
            position: "fixed",
            top: "-10px",
            right: "0",
            left: "0",
            zIndex: "5",
            border: "1px solid",
            borderColor: "rgba(0,0,0,0.05)",
            borderRadius: "5px",
          }}
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src={LogoLG}
                alt="Elite Care Chiropractic Logo"
                className={navStyles.Logo}
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => this.setState({ showNav: true })}
            />
            <div className={navStyles.NavBar}>
              <Nav
                className="mr-auto"
                defaultActiveKey="/"
                onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
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
                    {" "}
                    What Is Chiropractic{" "}
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
                    {" "}
                    Motor Vehicle Collision{" "}
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
                    {" "}
                    Myofascial Release{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/services/physiotherapy-protocols">
                    Physiotherapy Protocols{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/services/adjustive-technique">
                    Adjustive Technique{" "}
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
                    {" "}
                    New Patients{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/patients/signin">
                    Sign In
                  </NavDropdown.Item>

                  {/*<NavDropdown.Item eventKey="/treatments/sports-injuries">
                    Sports Injuries
        </NavDropdown.Item>*/}
                </NavDropdown>

                {/*<NavItem href="/newpatients">
                  <Nav.Link
                    as={Link}
                    activeClassName="active"
                    to="/newpatients"
                  >
                    New Patients
                  </Nav.Link>
      </NavItem>*/}
                <NavItem>
                  <Nav.Link as={Link} activeClassName="active" to="/contact">
                    Contact
                  </Nav.Link>
                </NavItem>
                {/*<NavItem>
                  <Nav.Link as={Link} activeClassName="active" to="/signin">
                    Sign In
                  </Nav.Link>
                </NavItem>*/}

              </Nav>
              <Nav className="ml-auto">
                <Button
                  as={Link}
                  to="/book-online"
                  className={navStyles.NavBook}
                  /*data-appointlet-organization="elite-care-chiropractic"*/
                >
                  Book Online
                </Button>
                
                {/*<ScheduleModal />*/}
              </Nav>
            </div>
          </Container>
        </Navbar>
        <SideNav
          openFromRight={true}
          title={
            <div
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            ></div>
          }
          titleStyle={{
            background: "inherit",
            backgroundColor: "transparent",
            color: "black",
            margin: "auto",
          }}
          items={[
            <Link rel="preload" className={navStyles.SideNavLink} to="/">
              Home
            </Link>,
            <Link rel="preload" className={navStyles.SideNavLink} to="/about">
              About
            </Link>,
            <Link rel="preload" className={navStyles.SideNavLink} to="/contact">
              Contact
            </Link>,
                        <Link
                        rel="preload"
                        className={navStyles.SideNavLink}
                        to="/signin"
                      >
                        Sign In
                      </Link>,
            <Link
              rel="preload"
              className={navStyles.SideNavLink}
              to="/patients/new-patients"
            >
              New Patients
            </Link>,

            <Link
              rel="preload"
              className={navStyles.SideNavLink}
              to="/services"
            >
              Services &#38; Treatments
            </Link>,
            <Button as={Link} /*data-appointlet-organization="elite-care-chiropractic" */
              className="blue-btns"
              type="button"
              to="/book-online"
            >
              Book Online
            </Button>,
          ]}
          itemStyle={{
            background: "transparent!important",
            backgroundColor: "transparent!important",
            color: "#fff",
            fontSize: "2rem",
            padding: "10px 0",
            textAlign: "center",
            margin: "1rem auto",
          }}
          navStyle={{
            width: "70%",
            background: "rgba(3,151,215,0.9)",
            color: "white!important",
            maxHeight: "100vh",
          }}
          showNav={this.state.showNav}
          onHideNav={() => this.setState({ showNav: false })}
        />
      </>
    );
  }
}

export default NavBar;
