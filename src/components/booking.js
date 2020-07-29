import React, { Component } from 'react'
import Button from 'react-bootstrap'

class Booking extends Component {
  componentDidMount(){
    const script=document.createElement('script')
    script.src="https://www.appointletcdn.com/loader/loader.min.js"
    script.async=true;
    this.instance.appendChild(script)
    
  }
  render() {
    return (
      <div>
        <div
          id="localizejs"
          data-appointlet-organization="elite-care-chiropractic"
          className="embedded-widget-title"
          style={{
            fontSize: '23px',
            color: '#333',
            fontFamily: 'Arial, Helvetica, sans-serif',
            lineHeight:'24px',
            padding:'18px 10px 8px',
            textAlign:'center',
            boxSizing:'border-box'
          }}
        >
          Book Now
        </div>
        <div ref={el => (this.instance = el)} className="vagaro">
        </div>
      </div>
    )
  }
}
export default Booking