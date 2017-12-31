import React, { Component } from 'react';
import Link from 'next/link';

export default class Header extends Component {
  render () {
    return (
      <div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <style jsx>{`
          a {
            text-decoration: none;
            margin-right: 1em
          }
        `}</style>
      </div>
    )
  }
}