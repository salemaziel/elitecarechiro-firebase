import React from 'react'

import Layout from '../components/layout'
import TestimonialsPage from '../components/PageComponents/Testimonials/TestimonialsPage'
import SEO from "../components/seo";
import {Helmet} from 'react-helmet'

const Testimonials = () => (
    <Layout>
        <Helmet>
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        </Helmet>
    
            <SEO title="Testimonials" />

        <TestimonialsPage />


    </Layout>
)

export default Testimonials