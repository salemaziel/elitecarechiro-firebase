import React from 'react';
import { Link } from 'gatsby';
import { LANDING, HOME, ACCOUNT } from '../../../../constants/routes';
import SignOutButton from './SignOutButton';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavigationAuth = () => (
  <Navbar>
    {/*<div className="navbar__inner">
      <div className="navbar__left">*/}
        <div className="navbar__logo">
          <Navbar.Brand as={Link} to="/">
          {/*<Link to={LANDING}>*/}
            <img
              src="https://res.cloudinary.com/dexdumfqy/image/upload/v1585549217/elite-care-chiropractic/logo_1_mgsyvm.png"
              alt="logo"
              width={100}
            />
          {/*</Link>*/}
          </Navbar.Brand>
        </div>
        <Nav>
        <div className="navbar__links">
          <div className="navbar__link">
            <Nav.Item>
            <Nav.Link as={Link} to={LANDING}>Back to Website</Nav.Link>
            </Nav.Item>
          </div>
          {/*<div className="navbar__link">
            <Link to={HOME}>Home</Link>
    </div>*/}
          <div className="navbar__link">
          <Nav.Item>
            <Nav.Link as={Link} to={ACCOUNT}>Account Settings</Nav.Link>
            </Nav.Item>
          </div>
          {/*<div className="navbar__link navbar__link--github">
            <span className="navbar__link--github__a">
              Created By{' '}
              <a href="https://github.com/ovidiumihaibelciug">
                Ovidiu Mihai Belciug
              </a>
            </span>
            <div>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=ovidiumihaibelciug&type=follow&count=true"
                frameborder="0"
                scrolling="0"
                width="170px"
                height="20px"
              />
            </div>
            <div>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=ovidiumihaibelciug&repo=gatsby-firebase-starter&type=star&count=true"
                frameborder="0"
                scrolling="0"
                width="170px"
                height="20px"
              />
            </div>
          </div>*/}
        </div>
        </Nav>
      {/*</div>*/}

      <div className="navbar__user">
        <div className="navbar__item">
          <SignOutButton />
        </div>
      </div>
   {/* </div>*/}
  </Navbar>
);

export default NavigationAuth;
