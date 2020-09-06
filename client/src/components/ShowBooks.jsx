import React from 'react'
import {Link} from "react-router-dom"

export default function ShowBooks(props) {
    return (
      <div className="bookList">
        {props.filteredBooks.map((book) => (
          <Link to={`/books/${book.id}`}>
            <div className="book-container">
              <img className="book-image" alt={book.title} src={book.image} /> 
              <br></br>
              <div className="book-title">{book.title}</div>
              <div className="book-price">{book.price}</div>
              </div>
            </Link>
        ))}
      </div>
    )
  }