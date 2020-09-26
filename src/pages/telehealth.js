import React from 'react';
import { compose } from 'recompose';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import {
  withAuthorization,
  withEmailVerification,
} from '../utils/Session';
import VideoChatPage from '../components/scenes/VideoChat/VideoChatPage';
import Navigation from '../components/molecules/Navigation/Navigation'

const condition = authUser => !!authUser;
const TeleHealth = compose(
  withEmailVerification,
  withAuthorization(condition),
)(VideoChatPage);

export default () => {
  return (
    <Layout hideNav hideCTA>
      <Navigation />
      <TeleHealth />
    </Layout>
  );
};

export const query = graphql`
  query TelehealthSeo {
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
