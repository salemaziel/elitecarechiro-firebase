import React from 'react'

import Layout from '../components/layout'
import TreatmentsPage from '../components/PageComponents/Treatments/TreatmentsPage'
import SEO from "../components/seo";


const Treatments = () => (
    <Layout>
    
            <SEO title="Treatments" />

        <TreatmentsPage />

    </Layout>
)

export default Treatments