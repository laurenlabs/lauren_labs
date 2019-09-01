import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/lauren-labs-logo.jpg';

const siteLinks = [
  { href: '/design', title: 'Design' },
  { href: '/development', title: 'Development' },
  { href: '/photography', title: 'Photography' },
  { href: '/writing', title: 'Writing' },
];

const Header = () => (
  <header
    style={{
      background: `black`,
      height: '100px'
    }}
    className="mb-2"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        height: '100%'
      }}
    className="flex flex-col md:flex-row justify-between"
    >
      <Link
        to="/"
        style={{
          height: 0
        }} 
        className="inline-block"
      >
        <img 
          style={{
            height: '100px',
          }} 
          className="mb-0"
          src={logo} alt="Logo for Lauren Labs and link to home page" />
      </Link>
      <div className="flex flex-col md:flex-row items-center">
        {siteLinks.map(link => (
          <a key={link.title} href={link.href}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  </header>
)

export default Header
