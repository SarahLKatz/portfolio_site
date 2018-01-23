import React, { Component } from 'react';
import Link from 'next/link';

export default class Header extends Component {
  showMenu () {
    let div = document.getElementsByClassName('links')[0]
    div.classList.toggle('unhide')
  }

  render () {
    return (
      <div className="header">
        <span className="menu" onClick={this.showMenu.bind(this)}>&#9776;</span>
        <div className="links">
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>Resume</a></Link>
          <Link href="/solo"><a>Solo Projects</a></Link>
          <Link href="/group"><a>Group Projects</a></Link>
          <Link href="/blog"><a>Life As A Coder</a></Link>
          <Link href="/sarah"><a>Life Outside Coding</a></Link>
        </div>
        <style jsx>{`
          .header {
            background-color: rgba(109, 131, 8, 0.5);
          }

          .links {
            height: 7vh;
            display: flex;
            align-items: center;
            justify-content: space-around;
          }

          .menu {
            display: none;
          }

          .unhide {
            display: inline;
            color: red;
          }

          a {
            text-decoration: none;
            margin-right: 1em
          }

          @media only screen and (max-width: 768px) {
            .links {
              flex-direction: column;
              align-items: flex-start;
              display: none;
            }

            a {
              display: block;
              white-space: nowrap;
            }

            .unhide {
              display: inline;
              color: red;
            }

            .menu {
              padding-top: 3vh;
              padding-left: 0.25vw;
              padding-right: 0.25vw;
              display: block;
            }

            a {
              margin: 0 0.25vh;
            }
          }
        `}</style>
      </div>
    )
  }
}