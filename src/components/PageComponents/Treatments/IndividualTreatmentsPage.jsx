import React from 'react'

import Banner from '../../banner'
import SideColumn from './SideColumn'
import MainSection from './MainSection'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const IndivTreatmentsPage = () => (
<>
<Banner />
<Container>
<Row>
    <Col xs={4} className='NoMobile'>
    <SideColumn />
    </Col>
    <Col>
        <MainSection />
    </Col>
    </Row>
    </Container>
</>
)

export default IndivTreatmentsPage