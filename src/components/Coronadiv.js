import React, {useState} from 'react'
import Alert from 'react-bootstrap/Alert'
import {Link} from 'gatsby'
import Button from 'react-bootstrap/Button'
import {render} from 'react-dom'

function Coronadiv() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="success">
          <div>
          <p>
          Important Message from Elite Care Chiropractic regarding COVID-19 (Novel Coronavirus) - WE'RE OPEN!
          </p>
          <Link 
          to="/covid-19" 
          style={{
            textDecoration: 'underline!important', 
            cursor: 'pointer'  
          }}>
            Read More
          </Link>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              X
            </Button>
          </div>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
    );
  }
  
export default Coronadiv