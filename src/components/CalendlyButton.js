import React from 'react'
import { openPopupWidget } from 'react-calendly';
import Button from 'react-bootstrap/Button'

import calendlystyle from './nav.module.css'

//const CalendlyButton = ({ url, prefill, pageSettings, utm }) => {
//  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });
const CalendlyButton = ({ url }) => {
    const onClick = () => openPopupWidget({ url:"https://calendly.com/elite-care-chiropractic" });
  return <Button onClick={onClick} /*className={calendlystyle.NavBook}*/ className="blue-btns btn btn-primary">Book Online</Button>
}

export default CalendlyButton