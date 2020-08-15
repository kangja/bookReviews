import React, { Component } from 'react'
import { readOneReview } from "../services/reviews"

export default class UpdateReview extends Component {
  state = {
    content: "",
  }

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async () => {
    const review = await readOneReview (this.props.id, this.props.reviewId);
    this.setState({
      content: review.content
    })
  }

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
          this.props.handleReviewUpdate(this.props.id, this.props.reviewId, this.state)
          history.push(`/books/${this.props.id}`);
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