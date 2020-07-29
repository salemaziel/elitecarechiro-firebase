import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Helmet } from 'react-helmet';
import HomePage from '../components/PageComponents/Home/HomePage'



const IndexPage = () => (
  <Layout>

    <SEO title="Home" />
    <HomePage />
  </Layout>
);

export default IndexPage;
