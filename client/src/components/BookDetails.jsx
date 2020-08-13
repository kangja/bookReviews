import React, {Component} from 'react'
import { readOneBook } from "../services/books"
import ShowReviews from "./ShowReviews"
import{Link} from "react-router-dom"
import {readAllReviews, postReview, putReview, destroyReview } from "../services/reviews"
import UpdateReview from './UpdateReview'
import CreateReview from './CreateReview'
import { Route } from "react-router-dom"


export default class BookDetails extends Component {
  state = {
    book: null,
    reviews: []
  }

  componentDidMount() {
    this.fetchBook();
    // this.fetchReviews();
  }

  fetchBook = async () => {
    const book = await readOneBook(this.props.id);
    this.setState({ book });
  }
  

  //  fetchReviews = async () => {
  //   const reviews = await readAllReviews(id);
  //   this.setState({ reviews });
  // }

  // handleReviewCreate = async (reviewData) => {
  //   const newReview = await postReview(this.bookId, reviewData);
  //   this.setState(prevState => ({
  //     reviews: [...prevState.reviews, newReview]
  //   }))
  // }
  //   handleReviewUpdate = async (id, reviewData) => {
  //     const newReview = await putReview(this.state.book.id, id, reviewData);
  //     this.setState(prevState => ({
  //       reviews: prevState.reviews.map(review => review.id === parseInt(id) ? newReview : review)
  //     }))
  //   }

  // handleReviewDelete = async (id) => {
  //   await destroyReview(this.state.book.id, id);
  //   this.setState(prevState => ({
  //     reviews: prevState.reviews.filter(review => review.id !== id)
  //   }))
  // } 


  render() {
    const { book } = this.state;
    const { currentUser, id } = this.props;

    return (
      <>
        {book && (
          <>
            <img src={book.image} />
            <h3>Title: {book.title}</h3>
            <p>Author: {book.author}</p>
            <p>{book.summary}</p>
            <p>{book.page_number}</p>
            <p>{book.genre}</p>
            <p>{book.price}</p>
          </>
        )}

        <ShowReviews
          currentUser={currentUser}
          id={id}
        // reviews={reviews}
        />

  {/* <Route only path="/books/:id/create" render={(props) => (
          <CreateReview
            {...props}
            handleReviewCreate={this.handleReviewCreate}
            id={props.match.params.id}
          />
        )}
        /> */}

      </>
    )
  }
}