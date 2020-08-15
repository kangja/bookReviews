import React, {Component} from 'react'
import { readAllReviews, postReview, putReview, destroyReview } from "../services/reviews"
import { Link } from "react-router-dom"
import CreateReview from "./CreateReview"
import {Route} from "react-router-dom"

export default class ShowReviews extends Component {

  state = {
    book: null,
    reviews: [],
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.id);
  }

  render() {
    const { currentUser, id, reviews } = this.props;

    return (
      <div>
         {currentUser && (
          <Link to={`/books/${id}/create`}>Write a review</Link>
        )}

        <h2>Reviews</h2>
        {reviews.map(review => (
          <div>
            <p>{review.content}</p>
            
            {currentUser && currentUser.id === review.user_id ?
              <>
                <Link to={`/books/${id}/reviews/${review.id}`}>Edit</Link>
                <button onClick={() => this.props.handleReviewDelete( this.props.id, review.id )}>Delete</button>
              </>
              :
              <></>
            }
          </div>
        ))
        }
      </div>

    )
  }
}