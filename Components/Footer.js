import React, { Component, Fragment } from 'react';

export default class Footer extends Component {
  render () {
    return (
      <Fragment>
        <div className="footer">
          <a href="mailto:soshasarah+from-site@gmail.com">sarah@DOMAINNAMEHERE.com</a>
          <div className="social">
            <a href="https://linkedin.com/in/sarahlkatz" target="_blank"><img src="/static/logos/linkedin.png" /></a>
            <a href="https://github.com/sarahlkatz" target="_blank"><img src="/static/logos/github.png" /></a>
          </div>
          <a href="/"> Designed By: Sarah L. Katz (2017-2018) </a>
        </div>
        <style jsx>{`
          .footer {
            background-color: rgba(109, 131, 8, 0.5);
            height: 5vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          a {
            text-decoration: none;
            color: rgb(129, 8, 107);
            margin: 0 0.5vw;
          }

          img {
            max-height: 3vh;
            margin: 0.5vh;
          }

          @media only screen and (max-width: 768px) {
            .footer {
              display: block;
              background-color: none;
            }

            .social {
              display: flex;
              justify-content: center;
            }
          }
        `}</style>
      </Fragment>
    )
  }
}