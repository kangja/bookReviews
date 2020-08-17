import React, { Component } from 'react'
import {postReview} from "../services/reviews"

export default class CreateReview extends Component {
  state = {
    content: "",
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
      <form 
        className="createreview-form"
        onSubmit={(e) => {
        e.preventDefault();
        this.props.handleReviewCreate(this.props.id, this.state);
        history.push(`/books/${this.props.id}`);
      }}>

        <h1>Write your review</h1>
        <textarea
          type="text"
          name="content"
          placeholder="Add Text"
          value={this.state.content}
          onChange={this.handleChange}
          cols={100}
          rows={30}
        />

        <button className="createreview-submit">Submit</button>
      </form>
    )
  }
}
