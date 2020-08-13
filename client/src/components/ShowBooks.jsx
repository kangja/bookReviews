// rcc
import React from 'react'
import {Link} from "react-router-dom"

export default function ShowBooks(props) {
    return (
      <div>
        {props.books.map(book => (
          <Link to={`/books/${book.id}`}>
            <img alt={book.title} src={book.image} /> 
            </Link>
        ))}
      </div>
    )
  }
