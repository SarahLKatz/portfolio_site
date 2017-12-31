import React, { Component } from 'react';
import Header from './Header'

const Layout = (props) => {
  return (
    <div>
      <Header />
      { props.children }
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Lato');

      * {
        box-sizing: border-box;
      }

      img {
        max-width: 100%
      }

      body {
        margin: 1vh;
        padding: 1vh;
        font-family: 'Lato', sans-serif;
      }
    `}</style>
    </div>
  )
}

export default Layout;