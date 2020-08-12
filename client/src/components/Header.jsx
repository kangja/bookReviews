import React from 'react'
import {Link} from "react-router-dom"

export default function Header(props) {
  return (
    <header>
      <h1>bookReviews</h1>
      {
        props.currentUser ? (
          <>
            <p>{props.currentUser.username}</p>
            <button>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
          </>
        )
      }
    </header>
  )
}
