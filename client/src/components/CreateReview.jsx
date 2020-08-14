import React, { Component } from 'react'
import {postReview} from "../services/reviews"

export default class CreateReview extends Component {
  state = {
    // reviews: this.props.reviews,
    content: "",
    book_id: this.props.id,
  }

  // componentDidMount() {
  //   this.handleReviewCreate();
  // }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleReviewCreate = async (bookId, reviewData) => {
    const newReview = await postReview(bookId, reviewData);
    this.setState(prevState => ({
      reviews: [...prevState.reviews, newReview]
    }))
  }

  render() {
    const { history } = this.props;
    return (

      <form onSubmit={(e) => {
        e.preventDefault();
        this.handleReviewCreate(this.state.book_id, this.state);
        history.push(`/books/${this.state.book_id}`);
        // window.location.reload();
      }}>

        <h1>Write your reviews</h1>
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
