import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'

import { SSL_OP_PKCS1_CHECK_2 } from 'constants'

const IndexPage = ({ data }) => (
  <div>
    <Header title="Home Page" description="What was most significant about the lunar voyage" />

    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          {data.allContentfulPost.edges.map(edge => (
            <React.Fragment key={edge.node.id}>
              <div className="post-preview">
                <Link to={`post/${edge.node.slug}`}>
                  <h2 className="post-title">{edge.node.title}</h2>
                  <h3 className="post-subtitle">
                    {edge.node.content.childMarkdownRemark.excerpt}
                  </h3>
                </Link>
                <p className="post-meta">
                  Posted by
                  <a href="#">Start Bootstrap</a> on {edge.node.createdAt}
                </p>
              </div>
              <hr />
            </React.Fragment>
          ))}
          <div className="clearfix">
            <a className="btn btn-primary float-right" href="#">
              Older Posts &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMMM DD, YYYY")
          image {
            resolutions(width: 300) {
              ...GatsbyContentfulResolutions
            }
          }
          content {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
