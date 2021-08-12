import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title='About' />
            <h1>About Page</h1>
            <p>Thank you for visiting this blog!</p>
            <p>Feel free to <Link to='/contact'>get in touch!</Link></p>
        </Layout>
    )
}

export default AboutPage