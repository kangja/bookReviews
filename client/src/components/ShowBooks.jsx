// rcc
import React from 'react'

export default function ShowBooks(props) {
    return (
      <div>
        {props.books.map(book => (
          <img alt={book.title} src={book.image} /> 
        ))}
      </div>
    )
  }
