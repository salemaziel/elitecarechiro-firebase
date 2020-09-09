import React from "react"
import { navigate } from "gatsby"
import Form from "react-bootstrap/Form"
import Col from 'react-bootstrap/Col'

//import Button from 'react-bootstrap/Button'
import "./contact.css"


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function ContactForm() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error))
  }

  return (
    <>
      <form
        name="ContactForm"
        method="post"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="contact"
        data-secure
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="ContactForm" />

        <Form.Row>
          <Col>
            <Form.Group>
              <label style={{ display: "none" }} htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                required
              />
            </Form.Group>
         </Col> 
          <Col>
          <Form.Group>
              <label htmlFor="name" style={{ display: "none" }}>
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                required
                onClick={handleChange}
                data-secure-field
              />
            </Form.Group>
          </Col> 
        </Form.Row>

        <Form.Row>
          {/*<Col>*/}
          <Form.Group>
              <label htmlFor="email" style={{ display: "none" }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                onChange={handleChange}
                data-secure-field
              />
            </Form.Group>
        {/*  </Col> 
          <Col>*/}
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <label htmlFor="tel" style={{ display: "none" }}>
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone"
                onChange={handleChange}
                data-secure-field
              />
            </Form.Group>
       {/* </Col> */}
        </Form.Row>

       {/* <Form.Row>
          <Col>
            <Form.Group>
              <label htmlFor="streetname" style={{ display: "none" }}>
                Street Address
              </label>
              <input
                type="text"
                name="streetname"
                id="streetname"
                placeholder="123 Your Street"
                required
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Group>
              <label htmlFor="city" style={{ display: "none" }}>
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                required
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group>
              <label htmlFor="state" style={{ display: "none" }}>
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                value="CA"
                required
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <label htmlFor="address" style={{ display: "none" }}>
                Zip Code
              </label>
              <input
                type="text"
                name="zipcode"
                id="zipcode"
                placeholder="Zip Code"
                required
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
       </Form.Row> */}

        <Form.Row>
            <Form.Group>
              <label htmlFor="textarea" style={{ display: "none" }}>
                Message
              </label>
              <input
                type="textarea"
                name="message"
                id="message"
                placeholder="Message"
                onChange={handleChange}
                data-secure-field
              />
            </Form.Group>
       {/* </Col> */}
        </Form.Row>

        <Form.Group>
          <ul className="actions">
            <li style={{listStyle: 'none'}}>
              <button
                type="submit"
                value="Send Message"
                className="special blue-btns"
                onChange={handleSubmit}
              >
                Submit{" "}
              </button>
            </li>
          </ul>
        </Form.Group>
      </form>
    </>
  )
}
