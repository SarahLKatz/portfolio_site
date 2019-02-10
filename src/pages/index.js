import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{display: "flex"}}>
    {/*
      *TOP*
      - Resume | - Tech Stack (separate lines on mobile)
      - Projects | - Contact (separate lines on mobile)
    */}
    <div style={{flex: 1}}>
      <div style={{height: "65vh", width: "100%", backgroundImage: "url('../../static/img/resume.jpg')", backgroundPosition: "350px", display: "flex", justifyContent: "center", alignItems: "center", margin: "2px", padding: "50px"}}>
        <Link to="/resume" style={{textDecoration: "none"}}><h3 style={{color: "darkgrey"}}>RESUME</h3></Link>
      </div>
    </div>
    <div style={{flex: 1}}>
      <div style={{height: "65vh", width: "100%", backgroundImage: "url('../../static/img/techstack.jpg')", backgroundPosition: "550px", display: "flex", justifyContent: "center", alignItems: "center", margin: "2px", padding: "50px"}}>
        <Link to="/tech" style={{textDecoration: "none"}}><h3 style={{color: "darkgrey"}}>TECH STACK</h3></Link>
      </div>
    </div>
    <div style={{flex: 1}}>
      <div style={{height: "65vh", width: "100%", backgroundImage: "url('../../static/img/blog.jpg')", backgroundPosition: "500px", display: "flex", justifyContent: "center", alignItems: "center", margin: "2px", padding: "50px"}}>
        <a href="https://medium.com/@sarahscode" style={{textDecoration: "none"}}><h3 style={{color: "darkgrey"}}>BLOG</h3></a>
      </div>
    </div>
  </div>
)

export default IndexPage
