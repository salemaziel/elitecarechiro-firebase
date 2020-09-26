import React from 'react'
import { openPopupWidget } from 'react-calendly';
import Button from 'react-bootstrap/Button'


//const CalendlyButton = ({ url, prefill, pageSettings, utm }) => {
//  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });
const CalendlyButton = ({ url }) => {
    const onClick = () => openPopupWidget({ url:"https://calendly.com/elitecarechiropractic/30-minute-appointment" });
  return <Button onClick={onClick} /*className={calendlystyle.NavBook}*/ className="blue-btns btn btn-primary" url={url} >Book Online</Button>
}

export default CalendlyButton