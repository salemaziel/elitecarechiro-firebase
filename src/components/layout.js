/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { Component } from 'react';
//import Navigation from './molecules/Navigation/Navigation';
import getFirebase, { FirebaseContext } from '../utils/Firebase';
import withAuthentication from '../utils/Session/withAuthentication';
//import SEO from './seoNew';
import PropTypes from 'prop-types';
//import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import NavBar from './NavBar';
//import Container from 'react-bootstrap/Container'
import CTA from './CTA';
import Footer2 from './Footer2';


import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';
import '../css/main.css';



//const Layout = ({ children }) => {
//  const data = useStaticQuery(graphql`
//    query SiteTitleQuery {
//      site {
//        siteMetadata {
//          title
//        }
//      }
//    }
//  `);

//  return (

class Layout extends Component {
  state = {
    firebase: null,
  };

  componentDidMount() {
    const app = import('firebase/app');
    const auth = import('firebase/auth');
    const database = import('firebase/database');

    Promise.all([app, auth, database]).then((values) => {
      const firebase = getFirebase(values[0]);

      this.setState({ firebase });
    });
  }

  render() {
    return (
      <FirebaseContext.Provider value={this.state.firebase}>
        <AppWithAuthentication {...this.props} />
      </FirebaseContext.Provider>
    );
  }
}

const AppWithAuthentication = withAuthentication(
  ({ hideNav, children, hideFooter, hideCTA }) => (
    <>
      <Header /*siteTitle={data.site.siteMetadata.title}*/ />
      {!hideNav && <NavBar />}
      {children}
      {!hideCTA && <CTA />}
      {!hideFooter && <Footer2 />}
    </>
  ),
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node])
    .isRequired,
};

export default Layout;
