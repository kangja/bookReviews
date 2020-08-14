import React, { Component } from 'react'
import {readOneReview, putReview} from "../services/reviews"

export default class UpdateReview extends Component {
  state = {
    content: "",
    book_id: this.props.id
  }

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async() => {
    const review = await readOneReview (this.state.book_id, this.props.reviewId);
    this.setState({
      content: review.content
    })
  }

  // handleReviewUpdate = async (bookId, user_id, reviewData) => {
  //   const newReview = await putReview(bookId, user_id, reviewData);
  //   this.setState(prevState => ({
  //     reviews: prevState.reviews.map(review => user_id === parseInt(bookId) ? newReview : review)
  //   }))
  // }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { history } = this.props;
    return (
        <form onSubmit={(e) => {
          e.preventDefault();
          this.handleReviewUpdate(this.state.book_id, this.props.user_id, this.state.content)
          history.push(`/books/${this.state.book_id}`);
        }}>

          <h1>Edit your reviews</h1>
          <textarea
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            cols={100}
            rows={30}
          />

          <button>Submit</button>
        </form>
    )
  }
}