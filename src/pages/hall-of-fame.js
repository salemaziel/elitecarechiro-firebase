import React from 'react'
import Layout from '../components/layout'
import HallOfFamePage from '../components/PageComponents/HallOfFame/HallOfFamePage'
import SEO from '../components/seo'

const HallOfFame = () => (
    <Layout>
        <SEO title="Hall Of Fame Clients" />
        <HallOfFamePage />


    </Layout>
)

export default HallOfFame