import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return(
    <Layout>
      <Head title='Home' />
      <h1>Welcome to the Gatsby Blog</h1>
      <p>Together with Contentful CMS and Netlify, Gatsby is perfect for building static sites.</p>
      <p>This blog uses GraphQl to fetch content from Contentful CMS.</p>
    </Layout>
  )
}

export default IndexPage