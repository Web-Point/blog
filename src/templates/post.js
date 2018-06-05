import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Header from '../components/header'

const Post = ({ data }) => {
  const { title, createdAt, image, content } = data.contentfulPost
  return (
    <div>
      <Header
        title={title}
        image={image.resolutions}
        description={content.childMarkdownRemark.excerpt}
      />
      <article>
        <div class="container">
          <div class="row">
            <div
              class="col-lg-8 col-md-10 mx-auto"
              dangerouslySetInnerHTML={{
                __html: content.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </article>
    </div>
  )
}

Post.PropTypes = {
  data: PropTypes.object.isRequired,
}

export default Post

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM DD, YYYY")
      image {
        resolutions(height: 200) {
          ...GatsbyContentfulResolutions
        }
      }
      content {
        childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`
