import React, { Component } from 'react';



import AboutSection3 from './aboutSection3';

import AboutHeader from './aboutheader'
import Banner from '../../banner'
import AboutMid from './aboutmid'

import AboutDoctors from './AboutDoctors'
import Whatis from './whatis'
import HallFame from './hallFame'

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
        <span id="meetdoctors" />
        <br />
        <br />
       
        <AboutDoctors />
        <br />
        <br />

        <HallFame />
       
        
      
      </>
    );
  }
}

export default AboutPage

