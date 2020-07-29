import React from 'react'

import Layout from '../components/layout'
import NewPatientsPage from '../components/PageComponents/NewPatients/NewPatientsPage'
import SEO from "../components/seo";


const Services = () => (
    <Layout>
    
            <SEO title="New Patients" />

        <NewPatientsPage />

    </Layout>
)

export default Services