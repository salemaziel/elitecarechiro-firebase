import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/*
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
*/
import { FaArrowRight } from 'react-icons/fa'

import treatmentStyles from './treatment.module.css'
import Button from 'react-bootstrap/Button'

import { WomanOnTrack } from '../../../images/index'

const SideColumn = () => (
    <section>
        <Container>
        <aside>
            <div>
            <Button className={treatmentStyles.TreatmentBlocks} active={true} >
                Sports Injuries
                {/*<FontAwesomeIcon icon={faArrowRight} style={{marginLeft: 'auto'}}/>*/}
                <FaArrowRight style={{marginLeft: 'auto'}}/>
            </Button>
            </div>

            <div>
            <Button className={treatmentStyles.TreatmentBlocks}>
                Neck and Back Pain
                {/*<FontAwesomeIcon icon={faArrowRight} style={{marginLeft: 'auto'}}/>*/}
                <FaArrowRight style={{marginLeft: 'auto'}}/>
            </Button>
            </div>

            <div>
            <Button className={treatmentStyles.TreatmentBlocks}>
                Motor Vehicle Collisions
                {/*<FontAwesomeIcon icon={faArrowRight} style={{marginLeft: 'auto'}}/>*/}
                <FaArrowRight style={{marginLeft: 'auto'}}/>
            </Button>
            </div>

            <div>
                <img src={GreenShirtGuy} alt='' width="100%" style={{ margin: '2rem 0'}}/>
            </div>
        </aside>
        </Container>

    </section>
)

export default SideColumn