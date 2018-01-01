import React, { Component } from 'react';
import Header from './Header'
import Head from 'next/head'

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Sarah L Katz</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <div className="content">
        { props.children }
      </div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Lato');

        * {
          box-sizing: border-box;
          font-family: 'Lato', sans-serif;
        }

        img {
          max-width: 100%
        }

        .content {
          background-color: rgba(8, 107, 129, 0.1);
          height: 93vh;
          padding: 3vh 2vh 0 2vh;
        }

        h1, h2, h3, p {
          margin: 0;
        }

        .highlight {
          color: rgb(129, 8, 107);
        }
      `}</style>
    </div>
  )
}

export default Layout;