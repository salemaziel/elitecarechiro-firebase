import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'gatsby';

const MyServices = (props) => {
  return (
    <section className="" id="" style={{ marginBottom: '4.5rem' }}>
      <Container>
        <Row className="" id="">
          {props.items.map((item, index) => (
            <Col key={index} lg={6}>
              <Card
                style={{ marginBottom: '2rem' }}
                as={Link}
                to={item.link}
              >
                <Card.Img
                  src={item.image}
                  alt={item.alt}
                  variant="top"
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MyServices;
