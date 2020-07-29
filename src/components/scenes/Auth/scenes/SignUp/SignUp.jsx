import React, { Component } from 'react';
import SignUpFormBase from './molecules/SignUpFormBase';
import SignInGoogle from '../../molecules/SignInGoogle';
import SignInFacebook from '../../molecules/SignInFacebook';
import SignInTwitter from '../../molecules/SignInTwitter';
import SignUpLink from '../../scenes/SignUp/atoms/SignUpLink';
import SignInGithub from '../../molecules/SignInGithub';
import { Link } from 'gatsby'

class SignUp extends Component {
  render() {
    return (
      <div className="register">
        <div className="register__image" />
        <div className="register__content">
          <div className="register__content__inner">
            <div className="register__content__header">
              <Link to="/" style={{justifyContent: 'center', margin: 'auto'}}>
              <img
                className="register__content__header__logo"
                src="https://res.cloudinary.com/dexdumfqy/image/upload/v1585549217/elite-care-chiropractic/logo_1_mgsyvm.png"
                alt="logo"
              />
              </Link>
              <div className="register__content__header__title">
                Elite Care Chiropractic
              </div>
              
            </div>
            <div className="register__content__fields">
              <div className="register__content__form">
                <SignUpFormBase />
              </div>
              <div className="register__content__or">
                <span className="register__content__or__line" />
                <span className="register__content__or__text">
                  or
                </span>
                <span className="register__content__or__line" />
              </div>
              <div className="register__content__providers">
                  <SignInGoogle />
                  
                  <SignInTwitter />
                  <SignInFacebook />
              </div>
            </div>
            <div className="register__content__register">
              <SignUpLink />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
