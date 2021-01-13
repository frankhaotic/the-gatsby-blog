import React from 'react';
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../components/layout'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishedDate
            body {
                raw
                references {
                    title
                    file {
                        url
                    }
                }
            }
        }
    }
    `

const Blog = (props) => {

    const options = {
        renderNode: {
            "embedded-asset-block": () => {
                    return <img alt={props.data.contentfulBlogPost.body.references[0].title} src={props.data.contentfulBlogPost.body.references[0].file.url} />
                }
            }
    }
    
    return (
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {renderRichText(props.data.contentfulBlogPost.body, options)}
        </Layout>
    )
}

export default Blog