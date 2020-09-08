import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/bbc.png'

function Header() {
  const navbarLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sports', path: '/categories/sports' },
    { name: 'Entertainment', path: '/categories/entertainment' },
    { name: 'Politics', path: '/categories/politics' }
  ]

  return (
    <div>
      <div id='site-logo'>
        <img src={logo} alt="logo" />
        <h1>Online News Portal</h1>
      </div>
      <div id='navbar'>
        {navbarLinks.map((link, i) => (
          <Fragment key={i}>
            <Link to={link.path}>
              {link.name}
            </Link>
            
            {i !== navbarLinks.length -1 && '|'}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Header