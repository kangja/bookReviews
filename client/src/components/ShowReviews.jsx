import React, {Component} from 'react'
import { readAllReviews, postReview, putReview, destroyReview } from "../services/reviews"
import { Link } from "react-router-dom"
import CreateReview from "./CreateReview"
import {Route} from "react-router-dom"

export default class ShowReviews extends Component {

  state = {
    book: null,
    reviews: [],
    // book_id: this.props.id
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.id);
  }

  // fetchReviews = async () => {
  //   const reviews = await readAllReviews(this.state.book_id);
  //   this.setState({ reviews });
  // }
  
  // handleReviewUpdate = async (id, reviewData) => {
  //   const newReview = await putReview(this.state.book.id, id, reviewData);
  //   this.setState(prevState => ({
  //     reviews: prevState.reviews.map(review => review.id === parseInt(id) ? newReview : review)
  //   }))
  // }

  // handleReviewDelete = async (bookId, review_id) => {
  //   await destroyReview(bookId, review_id);
  //   this.setState(prevState => ({
  //     reviews: prevState.reviews.filter(review => review.id !== review_id)
  //   }))
  // }

  render() {
    const { currentUser, id, reviews } = this.props;
    // const { reviews } = this.props;

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
         {/* <Route exact path="/books/:id/create" render={(props) => (
          <CreateReview
            {...props}
            handleReviewCreate={this.handleReviewCreate}
            id={props.match.params.id}
          />
        )}
        /> */}
      </div>

    )
  }
}