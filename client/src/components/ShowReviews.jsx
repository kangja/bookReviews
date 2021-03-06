import React, {Component} from 'react'
import { Link } from "react-router-dom"

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
      <div className="reviews-container">
         {currentUser && (
          <Link to={`/books/${id}/create`}>
            <button className="review-button">Write a review</button></Link>
        )}

        <div className="reviews-container2">
        <h2 className="showreviews-reviews">Reviews</h2>
        {reviews.map(review => (
          <div className="edit-delete">
            <p className="showreviews-content">{review.content}</p>

            {currentUser && currentUser.id === review.user_id ?
              <div>
                <Link to={`/books/${id}/reviews/${review.id}`}><button className="showreviews-edit">Edit</button></Link>
                <button
                  className="showreviews-delete"
                  onClick={() => this.props.handleReviewDelete(this.props.id, review.id)}>Delete</button>
              </div>
              :
              <></>
            }
          </div>
        ))   
        }
      </div>
      </div>
    )
  }
}