import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

const Header = () => (
  <h1 className="logo">
    <span className="hidden">Dot Dash | Cincinnati Web Design & Development</span>
    <img src="/static/dot-dash-logo.svg" alt="Dot Dash | Cincinnati Web Design & Development" />
  </h1>
)

const TemplateWrapper = ({
  children
}) => (
  <div className="container">
    <div className="inner-container">
      <Helmet>
       <title>Dot Dash | Web & Mobile Development, Design & Branding in Cincinnati</title>
       <link href="/static/favicon.ico" rel="icon" type="image/x-icon" />
       <meta name="description" content="Web & Mobile Development, Design & Branding in Cincinnati" />
      </Helmet>
      <Header />
      <div>
        {children()}
      </div>
      </div>
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
