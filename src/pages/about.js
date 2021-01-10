import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Page</h1>
            <p>This is a GatsbyJS Tutorial Site</p>
            <p><Link to='/contact'>Contact me.</Link></p>
        </Layout>
    )
}

export default AboutPage