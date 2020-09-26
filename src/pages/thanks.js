import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Banner from '../components/banner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import Button from 'react-bootstrap/Button'
import { navigateTo } from 'gatsby'
//import thanksStyles from '../components/nav.module.css'

import Layout from '../components/layout'


const Thanks = () => (
    <Layout>
        <Banner />
        <Container>
            <Row>
                <Col>
        <Jumbotron
            style={{
                backgroundColor: 'rgba(3, 151, 215, 0.5)',
                color: 'white',
                textAlign: 'center'
            }}>
            <h2>
                Thanks for reaching out!
            </h2>
            <br />
            <p>
                We Will Be In Touch Shortly
            </p>
            <br />
            <br />
            <br />
            <br />
            <Button
            onClick={() => navigateTo("/")}
            className="blue-btns btn btn-primary"
            >
                Back to HomePage
            </Button>
        </Jumbotron>
        </Col>
        </Row>
        </Container>

    </Layout>
)


export default Thanks