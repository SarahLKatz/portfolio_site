import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Social from '../components/social'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: "Sarah Katz's personal portfolio website - javascript developer" },
        { name: 'keywords', content: 'javascript, developer, react, gatsby' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} /> {/* Remove this and replace it with my "top" element*/}
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()} {/* this will be where either the boxes or the individual box goes */}
    </div>
    <Social />
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
