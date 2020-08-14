import React, { Component } from 'react';



import AboutSection3 from './aboutSection3';

import AboutHeader from './aboutheader'
import Banner from '../../banner'
import AboutMid from './aboutmid'

import AboutDoctors from './AboutDoctors'
import Whatis from './whatis'

class AboutPage extends Component {
    render() {
    return (
        <>
        <Banner />
        <AboutHeader />
        <Whatis />
        <AboutMid />
        <AboutSection3 />
        <br />
        <br />
        <hr />
        <span id="meetdoctors" />
        <br />
        <br />
       
        <AboutDoctors />
       
        
      
      </>
    );
  }
}

export default AboutPage

