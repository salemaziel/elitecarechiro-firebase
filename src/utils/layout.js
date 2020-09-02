import React, { Component, Fragment } from 'react';

import Navigation1 from '../components/molecules/Navigation1/Navigation1';
import getFirebase, { FirebaseContext } from './Firebase';
import withAuthentication from './Session/withAuthentication';
import SEO from '../components/seoNew';
import '../styles/index.scss';

class Layout extends Component {
  state = {
    firebase: null,
  };

  componentDidMount() {
    const app = import('firebase/app');
    const auth = import('firebase/auth');
    const database = import('firebase/database');

    Promise.all([app, auth, database]).then(values => {
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
  ({ hideNav, seo, children }) => (
    <Fragment>
      <SEO {...seo} />
      {!hideNav && <Navigation1 />}
      {children}
    </Fragment>
  ),
);

export default Layout;
