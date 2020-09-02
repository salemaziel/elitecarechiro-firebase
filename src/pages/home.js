import React from 'react';
import { compose } from 'recompose';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import {
  withAuthorization,
  withEmailVerification,
} from '../utils/Session';
import Home from '../components/scenes/Home/Home';
import Navigation1 from '../components/molecules/Navigation1/Navigation1'

const condition = authUser => !!authUser;
const HomePage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(Home);

export default () => {
  return (
    <Layout hideNav hideCTA>
      <Navigation1 />
      <HomePage />
    </Layout>
  );
};

export const query = graphql`
  query HomeSeo {
    site {
      siteMetadata {
        home {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          siteUrl: url
          defaultImage: image
          twitterUsername
        }
      }
    }
  }
`;
