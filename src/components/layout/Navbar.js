import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

const Navbar = () => {
  return (
    <nav className="nav-wrapper green darken-4">
          <div className="container">
              <Link to='/' className="brand-logo">Garden of Growth</Link>
              <SignedInLinks />
              <SignedOutLinks />
          </div>
    </nav>
  )
}

export default Navbar;