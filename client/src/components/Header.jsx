import React from 'react'
import {Link} from "react-router-dom"

export default function Header(props) {
  return (
    <div className="header">
      <Link to ="/"><h1>bookReviews</h1></Link>
      {
        props.currentUser ? (
          <>
            <p>Welcome {props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
          </>
        )
      }
    </div>
  )
}