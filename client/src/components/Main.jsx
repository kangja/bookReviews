import React, {Component} from "react"
import { Route } from "react-router-dom"
import Login from "./Login"
import SignUp from "./SignUp"
import ShowBooks from "./ShowBooks"
import BookDetails from "./BookDetails"
import CreateReview from "./CreateReview"
import ShowReviews from "./ShowReviews"
import UpdateReview from "./UpdateReview"
import { readAllBooks } from "../services/books"
import { postReview, readAllReviews, destroyReview, putReview, readOneReview } from "../services/reviews"

export default class Main extends Component {
  state = {
    books: [],
    reviews: []
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = async () => {
    const books = await readAllBooks();
    this.setState({ books });
  } 

  fetchReviews = async (id) => {
    const reviews = await readAllReviews(id);
    this.setState({ reviews });
  }

  handleReviewCreate = async (bookId, reviewData) => {
    const newReview = await postReview(bookId, reviewData);
    this.setState(prevState => ({
      reviews: [...prevState.reviews, newReview]
    }))
  }

  handleReviewUpdate = async (bookId, review_id, reviewData) => {
    const UpdateReview = await putReview(bookId, review_id, reviewData);
    this.setState(prevState => ({
      reviews: prevState.reviews.map(review => review.id === parseInt(review_id) ? UpdateReview : review)
    }))
  }

  handleReviewDelete = async (bookId, review_id) => {
    await destroyReview(bookId, review_id);
    this.setState(prevState => ({
      reviews: prevState.reviews.filter(review => review.id !== review_id)
    }))
  }

  // setFormData = async(bookId, review_id ) => {
  //   const review = await readOneReview (bookId, review_id);
  //   this.setState({
  //     content: review.content
  //   })
  // }

  render() {
    const { handleLogin, handleSignUp } = this.props;

    return (
    <main>
      {/* ...props means history, location, match  */}
      <Route exact path = "/login"  render = {(props) => (
        <Login
            {...props}
            handleLogin={handleLogin}
        />
        )} />
        <Route exact path="/signup" render = {(props) => (
          <SignUp
            {...props}
            handleSignUp={handleSignUp}
          />
        )} />

        <Route exact path="/" render = {() => (
          <ShowBooks
            books={this.state.books}
          />
        )} />

        <Route exact path="/books/:id" render={(props) => (
          <BookDetails
           {...props}
            currentUser={this.props.currentUser}
            id={props.match.params.id}
          />
          )} />

        <Route exact path="/books/:id" render={(props) => (
          <ShowReviews
          {...props}
          fetchReviews={this.fetchReviews}
          handleReviewDelete={this.handleReviewDelete}
          currentUser={this.props.currentUser}
          id={props.match.params.id}
          reviews={this.state.reviews}
          />
          )}
          />

        <Route path="/books/:id/create" render={(props) => (
          <CreateReview
            {...props}
            handleReviewCreate={this.handleReviewCreate}
            id={props.match.params.id}
          />
        )}
        />
        
        <Route exact path="/books/:id/reviews/:reviewId" render={(props) => (
          <UpdateReview
           {...props}
            currentUser={this.props.currentUser}
            id={props.match.params.id}
            reviewId={props.match.params.reviewId}
            handleReviewUpdate={this.handleReviewUpdate}
            reviews={this.state.reviews}
          />
          )} />
      </main>
    )
  }
}

