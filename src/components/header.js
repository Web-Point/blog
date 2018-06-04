import React from 'react'
import Link from 'gatsby-link'

const Header = ({ title, image, description }) => (
  <header
    className="masthead"
    style={{
      backgroundImage: `url(${image})`,
    }}
    // style="background-image: url('img/home-bg.jpg')"
  >
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>{title}</h1>
            <span className="subheading">{description}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
