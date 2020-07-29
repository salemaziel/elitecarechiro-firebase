import React from 'react';
import Layout from '../../components/layout';
import SignIn from '../../components/scenes/Auth/scenes/SignIn/SignIn';

const SignInPage = () => (
  <Layout hideNav hideFooter hideCTA>
    <SignIn />
  </Layout>
);

export default SignInPage;
