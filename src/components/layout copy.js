/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 * / 

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header";
import NavBar from './NavBar'
//import Container from 'react-bootstrap/Container'
import "./layout.css";
import '../css/main.css'
import CTA from './CTA'

import Footer2 from './Footer2'

const Layout = ({ children }) => {
//  const data = useStaticQuery(graphql`
//    query SiteTitleQuery {
//      site {
//        siteMetadata {
//          title
//        }
//      }
//    }
//  `);

  return (
    <>
      <Header /*siteTitle={data.site.siteMetadata.title}* / />
      <NavBar />
        {children}
      <CTA />
      <Footer2 />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

export default Layout;

*/