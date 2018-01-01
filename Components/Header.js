import React, { Component } from 'react';
import Link from 'next/link';

export default class Header extends Component {
  render () {
    return (
      <div className="header">
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/solo"><a>Solo Projects</a></Link>
        <Link href="/group"><a>Group Projects</a></Link>
        <Link href="/blog"><a>Life As A Coder</a></Link>
        <Link href="/sarah"><a>Life Outside Coding</a></Link>
        <style jsx>{`
          .header {
            height: 7vh;
            background-color: rgba(109, 131, 8, 0.5);
            display: flex;
            align-items: center;
            justify-content: space-around;
          }

          a {
            text-decoration: none;
            margin-right: 1em
          }
        `}</style>
      </div>
    )
  }
}