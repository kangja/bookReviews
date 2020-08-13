import React, { Component } from 'react'
// import { readOneBook } from "../services/books"
// import {readAllReviews, postReview, putReview, destroyReview } from "../services/reviews"

export default class BookItem extends Component {
  state = {
    book: null,
    reviews: null
  }
    
  render() {
    const { book, reviews } = this.state;

    return (
      <div>
        
      </div>
    )
  }
}
