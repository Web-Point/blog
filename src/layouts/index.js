import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/navbar'

// import '../../node_modules/bootstrap/dist/css/bootstrap.css'
// import './index.css'
import './scss/clean-blog.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      // title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {/* <Navbar siteTitle={data.site.siteMetadata.title} /> */}

    {children()}
    
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
