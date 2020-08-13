import React, {Component} from 'react'
import { readAllReviews, postReview, putReview, destroyReview } from "../services/reviews"
import { Link } from "react-router-dom"
import {Route} from "react-router-dom"

export default class ShowReviews extends Component {
  state = {
    book: null,
    reviews: []
  }

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = async () => {
    const reviews = await readAllReviews(this.props.id);
    this.setState({ reviews });
  }

  handleReviewCreate = async (reviewData) => {
    const newReview = await postReview(this.bookId, reviewData);
    this.setState(prevState => ({
      reviews: [...prevState.reviews, newReview]
    }))
  }
  
  // handleReviewUpdate = async (id, reviewData) => {
  //   const newReview = await putReview(this.state.book.id, id, reviewData);
  //   this.setState(prevState => ({
  //     reviews: prevState.reviews.map(review => review.id === parseInt(id) ? newReview : review)
  //   }))
  // }

  // handleReviewDelete = async (id) => {
  //   await destroyReview(this.state.book.id, id);
  //   this.setState(prevState => ({
  //     reviews: prevState.reviews.filter(review => review.id !== id)
  //   }))
  // }


  render() {
    const { currentUser, id} = this.props;

    return (
      <div>
        <h2>Reviews</h2>
        {this.state.reviews.map(review => (
          <div>
            <p>{review.content}</p>
            {currentUser && currentUser.id === review.id ?
              <>
                <Link to={`/books/:id/reviews/${review.id}`}>Edit</Link>
                <button>Delete</button>
              </>
              :
              <p>hi</p>
            }
          </div>
        ))}
        
        {currentUser && (
          <Link to={`/books/${id}/create`}>Write a review</Link>
        )}
      </div>
    )
  }
}