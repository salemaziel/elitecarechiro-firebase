import React from 'react';
import Button from 'react-bootstrap/Button';
import ctabuttonStyles from './ctabutton.module.css';
import props from 'prop-types';

const CTAButtons = (props) => {
  return (
    <div className={ctabuttonStyles.box}>
      <Button
        variant={props.buttonColor}
        size="lg"
        onClick={props.buttonOnClick}
        className={props.className}
      >
        {props.buttonText}
      </Button>
    </div>
  );
}

export default CTAButtons;
