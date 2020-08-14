import React, {Component} from 'react'
import { readAllReviews, postReview, putReview, destroyReview } from "../services/reviews"
import { Link } from "react-router-dom"
import CreateReview from "./CreateReview"
import {Route} from "react-router-dom"

export default class ShowReviews extends Component {

  state = {
    book: null,
    // reviews: [],
    id: this.props.id
  }

  // componentDidMount() {
  //   this.props.fetchReviews();
  // }

  // fetchReviews = async () => {
  //   const reviews = await readAllReviews(this.state.id);
  //   this.setState({ reviews });
  // }
  
  // handleReviewUpdate = async (id, reviewData) => {
  //   const newReview = await putReview(this.state.book.id, id, reviewData);
  //   this.setState(prevState => ({
  //     reviews: prevState.reviews.map(review => review.id === parseInt(id) ? newReview : review)
  //   }))
  // }

  handleReviewDelete = async (id) => {
    await destroyReview(this.state.book.id, id);
    this.setState(prevState => ({
      reviews: prevState.reviews.filter(review => review.id !== id)
    }))
  }

  render() {
    const { currentUser, id, reviews} = this.props;

    return (
      <div>
         {currentUser && (
          <Link to={`/books/${id}/create`}>Write a review</Link>
        )}

        <h2>Reviews</h2>
        {reviews.map(review => (
          <div>
            <p>{review.content}</p>
            
            {currentUser && currentUser.id === review.id ?
              <>
                <Link to={`/books/:id/reviews/${review.id}`}>Edit</Link>
                <button onClick={() => this.handleReviewDelete(review.id)}>Delete</button>
              </>
              :
              <></>
            }
          </div>
        ))}
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