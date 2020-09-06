import React from 'react'
import {Link} from "react-router-dom"

export default function Header(props) {
  return (
    <div className="header">
      <Link to="/" className="header-title"><h1 className="header-h1">bookReviews</h1></Link>
      <form className="search-form">
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search"
                    value={props.search}
                    onChange={props.updateSearch}
                  />
                </form>
      {
        props.currentUser ? (
          <>
            <p className="header-welcome">Welcome, {props.currentUser.username}</p>
            <button onClick={props.handleLogout} className="header-logout">Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup" className="header-signup">Sign Up</Link>
            <Link to="/login" className="header-login">Log In</Link>
          </>
        )
      }
    </div>
  )
}