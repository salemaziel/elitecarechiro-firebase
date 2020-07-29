import React, { Component } from 'react';

import SignInForm from '../../molecules/SignInForm';
import SignInGoogle from '../../molecules/SignInGoogle';
import SignInFacebook from '../../molecules/SignInFacebook';
import SignInTwitter from '../../molecules/SignInTwitter';
import SignUpLink from '../../scenes/SignUp/atoms/SignUpLink';
import PasswordForgetLink from '../../../../molecules/PasswordForget/atoms/PasswordForgetLink';
import SignInGithub from '../../molecules/SignInGithub';

import Fade from 'react-reveal/Fade'

class SignIn extends Component {
  render() {
    return (
      <div className="login">
        <div className="login__content">
        <Fade left cascade>
          <div className="login__content__inner">
            
            <div className="login__content__header">
              <img
                className="login__content__header__logo"
                src="https://res.cloudinary.com/dexdumfqy/image/upload/v1585549217/elite-care-chiropractic/logo_1_mgsyvm.png"
                alt="logo"
              />
              <div className="login__content__header__title">
                Elite Care Chiropractic
              </div>
            </div>
            <div className="login__content__login-form">
              <div className="login__content__form">
                <SignInForm />
              </div>
              <div className="login__content__password-forget">
                <PasswordForgetLink />
              </div>
              <div className="login__content__or">
                <span className="login__content__or__line" />
                <span className="login__content__or__text">or</span>
                <span className="login__content__or__line" />
              </div>
              <div className="login__content__providers">
                  <SignInGoogle />

                  <SignInTwitter />
                  <SignInFacebook />
              </div>{' '}
            </div>
            <div className="login__content__register">
              <SignUpLink isRegister />
            </div>
          </div>
          </Fade>
        </div>
        <div className="login__image" />
      </div>
    );
  }
}

export default SignIn;
