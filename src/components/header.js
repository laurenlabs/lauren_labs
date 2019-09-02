import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/lauren-labs-logo.jpg';

const siteLinks = [
  { href: '/design', title: 'Design' },
  { href: '/development', title: 'Development' },
  { href: '/writing', title: 'Writing' },
];

const Header = () => (
  <header
    style={{
      background: `black`,
      minHeight: '100px'
    }}
    className="px-2 mb-2"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        height: '100%'
      }}
    className="flex flex-col md:flex-row justify-between"
    >
      <div className="w-full md:w-1/2 flex flex-row justify-center md:justify-start items-center">
        <Link to="/">
          <img 
            style={{
              height: '100px',
            }} 
            className="mb-0"
            src={logo} alt="Logo for Lauren Labs and link to home page" />
        </Link>
      </div>
      
      <div className="w-full md:w-1/2 flex flex-row justify-center md:justify-end items-center p-2">
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
