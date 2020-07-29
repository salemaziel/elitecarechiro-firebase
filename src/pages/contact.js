import React from 'react'
import Layout from '../components/layout'
import ContactPage from '../components/PageComponents/Contact/ContactPage'
import SEO from "../components/seo";



const Contact = () => (
    <Layout>
            <SEO title="Contact" />

        <ContactPage />

    </Layout>
)

export default Contact