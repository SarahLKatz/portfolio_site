import React from 'react';
import {Header, Footer} from './'
import Head from 'next/head'

const Layout = (props) => {
  return (
    <div className="page">
      <Head>
        <title>Sarah L Katz</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <div className="content">
        { props.children }
      </div>
      <Footer />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Lato:400,700');

        * {
          box-sizing: border-box;
          font-family: 'Lato', sans-serif;
        }

        img {
          max-width: 100%
        }

        .content {
          background-color: rgba(8, 107, 129, 0.1);
          min-height: 87vh;
          min-width: 90vw;
          padding: 3vh 2vh 0 2vh;
        }

        h1, h2, h3, h4, h5, p {
          margin: 0;
        }

        .highlight {
          color: rgb(129, 8, 107);
        }

        .bold {
          font-weight: 700;
        }

        @media only screen and (max-width: 768px) {
          .page {
            display: flex;
          }
        }
      `}</style>
    </div>
  )
}

export default Layout;