// import React, { Component } from 'react'
// import {readOneReview} from "../services/reviews"

// export default class UpdateReview extends Component {
//   state = {
//     content: ""
//   }

//   componentDidMount() {
//     this.setFormData();
//   }

//   setFormData = () => {
//     const review = await readOneReview(this.props.id, this.props.reviewId);
//     this.setState({
//       content: review.content
//     }) 
//   }

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     })
//   }

//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
