import React, {Component} from "react"
import { Route } from "react-router-dom"
import Login from "./Login"
import SignUp from "./SignUp"

export default class Main extends Component {
  render() {
    return (
    <main>
      {/* ...props means history, location, match  */}
      <Route path = "/login" render = {(props) => (
        <Login
            {...props}
            handleLogin={this.props.handleLogin}
        />
        )} />
        <Route path="/signup" render = {(props) => (
          <SignUp
            {...props}
            handleSignUp={this.props.handleSignUp}
          />
        )} />
      </main>
    )
  }
}
