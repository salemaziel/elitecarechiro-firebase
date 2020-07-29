import React from "react"
import SideNav, { MenuIcon } from "react-simple-sidenav"
import { Link, navigateTo } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { LogoLG } from "../images/index"

import NavDropdown from "react-bootstrap/NavDropdown"


//import navmobileStyles from "./navmobile.module.css"

class NavMobile extends React.Component {
  constructor() {
    super()
    this.state = {
      showNav: false,
      title: "",
      items: "",
      openFromRight: "",
    }
  }
  render() {
    return (
      <Container
        fluid
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Row >
          <Col />

          <Col
            xs={6}
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/" rel="preload">
              <img
                src={LogoLG}
                alt="Logo"
                className="mobileLogo"
              />
            </Link>
          </Col>
          <Col
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <div className=""></div>
            <div
              className="navbar-toggle"
              onClick={() =>this.setState({ showNav: true })}
            >
              
              {/*<div className={navmobileStyles.menu}>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" /> 
          </div>*/}
              <img src={MenuIcon} alt="" className="menuIcon" />
            </div>
          </Col>
        </Row>
        <SideNav
          openFromRight={true}
          title={
            <div>
              <Link>
                <img src={LogoLG} width={100} alt='' />
              </Link>
            </div>
          }
          titleStyle={{
            background: "inherit",
            color: "black",
            width: "200px",
            margin: "auto",
          }}
          items={[
            <Link rel="preload" className="nav-link" to="/">
              Home
            </Link>,
            <Link rel="preload" className="nav-link" to="/treatments">
              Treatments
            </Link>,
            <Link rel="preload" className="nav-link" to="/injuries">
              Injuries
            </Link>,
            <Link rel="preload" className="nav-link" to="/contact">
              Contact
            </Link>,
            <Link rel="preload" className="nav-link" to="/schedule">
              Schedule
            </Link>
          ]}
          itemStyle={{
            background: "inherit",
            color: "#fff",
            fontSize: "inherit",
            padding: "0",
            textAlign: "center",
          }}
          navStyle={{ width: "75%" }}
          showNav={this.state.showNav}
          onHideNav={() =>this.setState({ showNav: false })}
          
        />
      </Container>
    )
  }
}

export default NavMobile
