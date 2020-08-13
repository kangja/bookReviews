import React, { Component } from 'react'

export default class CreateReview extends Component {
  state= {
    content: "",
    id: this.props.id
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { handleReviewCreate, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleReviewCreate(this.state);
        history.push(`/books/${this.props.id}`);
      }}>
        <h1>Write your reviews</h1>
        <textarea
          type="text"
          name={content}
          value={this.state.content}
          onChange={this.handleChange}
          />
      </form>
    )
  }
}
