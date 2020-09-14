import React from 'react'
import { openPopupWidget } from 'react-calendly';
import Button from 'react-bootstrap/Button'

import calendlystyle from './nav.module.css'

//const CalendlyButton = ({ url, prefill, pageSettings, utm }) => {
//  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });
const BookOnlineButton = ({ url }) => {
    const onClick = () => openPopupWidget({ url:"https://form.jotform.com/202576816787167" });
  return <Button onClick={onClick} /*className={calendlystyle.NavBook}*/ className="blue-btns btn btn-primary" url={url} >Book Online</Button>
}

export default BookOnlineButton