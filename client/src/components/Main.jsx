import React, {Component} from "react"
import { Route } from "react-router-dom"
import Login from "./Login"
import SignUp from "./SignUp"
import ShowBooks from "./ShowBooks"
import {readAllBooks} from "../services/books"

export default class Main extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = async () => {
    const books = await readAllBooks();
    this.setState({ books });
  } 

  render() {
    const { handleLogin, handleSignUp } = this.props;
    
    return (
    <main>
      {/* ...props means history, location, match  */}
      <Route path = "/login" render = {(props) => (
        <Login
            {...props}
            handleLogin={handleLogin}
        />
        )} />
        <Route path="/signup" render = {(props) => (
          <SignUp
            {...props}
            handleSignUp={handleSignUp}
          />
        )} />
        <Route path="/" render = {() => (
          <ShowBooks
            books={this.state.books}
          />
        )} />


      </main>
    )
  }
}
