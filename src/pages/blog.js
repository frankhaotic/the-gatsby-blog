import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        html
                        excerpt
                    }
                }
            }
        }
    `)
    
    const items = data.allMarkdownRemark.edges.map(item => 
        <li>
            <h2>{item.node.frontmatter.title}</h2>
            <p>{item.node.frontmatter.date}</p>
        </li>
    ) 

    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {items}
            </ol>
        </Layout>
    )
}

export default BlogPage