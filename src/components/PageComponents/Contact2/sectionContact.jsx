import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

const SectionContact = () => (
  <section id="background" style={{padding: '4.5rem 0 6.5rem'}}>
    <Container>
      <Row>
        <Col>
          <h2>Contact Us</h2>
         
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <Form >
            <fieldset>
              <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
        Have You Seen Us Before?
      </Form.Label>
                <Col >

                  <Form.Check
                    type="radio"
                    label="New Patient"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="Returning Patient"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <Form.Group as={Row} controlId="formHorizontalFirstName">
              <Form.Label column sm={2}>
                First Name
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  required /*placeholder="First Name"*/
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalLastName">
              <Form.Label column sm={2}>
                Last Name
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  required /*placeholder="Last Name"*/
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col>
                <Form.Control
                  type="email"
                  required /*placeholder="Email"*/
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPhone">
              <Form.Label column  sm={2}>
                Phone
              </Form.Label>
              <Col>
                <Form.Control
                  type="tel"
                  /*placeholder="Phone"*/
                  required
                />
              </Col>
            </Form.Group>

            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Respond To Me Via:
                </Form.Label>

                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Email"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios4"
                  />

                  <Form.Check
                    type="radio"
                    label="Phone Call"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                  <Form.Check
                    type="radio"
                    label="Text Message"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios5"
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Submit Form</Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>
);

export default SectionContact;
