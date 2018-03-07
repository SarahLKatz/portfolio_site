import React, { Component, Fragment } from 'react';

export default class Footer extends Component {
  render () {
    return (
      <Fragment>
        <div className="footer">
          <a href="mailto:sarah@sarahlkatz.com">sarah[at]sarahlkatz[dot]com</a>
          <div className="social">
            <a href="https://linkedin.com/in/sarahlkatz" target="_blank"><img src="/static/logos/linkedin.png" /></a>
            <a href="https://github.com/sarahlkatz" target="_blank"><img src="/static/logos/github.png" /></a>
            <a href="https://twitter.com/sarahscode" target="_blank"><img src="/static/logos/twitter.png" /></a>
          </div>
        </div>
        <style jsx>{`
          .footer {
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }

          a {
            text-decoration: none;
            color: rgb(129, 8, 107);
            margin: 0 0.5vw;
            font-size: 1.5em;
          }

          img {
            height: 2vw;
            width: 2vw;
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
