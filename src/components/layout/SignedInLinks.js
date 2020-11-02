import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/">Profile</NavLink></li>
      <li><NavLink to="/">Log Out</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating blue lighten-1">NM</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;