import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    {/*
      *TOP*
      - Resume | - Tech Stack (separate lines on mobile)
      - Projects | - Contact (separate lines on mobile)
    */}
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
