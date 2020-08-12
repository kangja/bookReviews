import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <header>
      <h1>bookReviews</h1>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </header>
  )
}
