import React, {Component} from 'react'
import {Link} from "react-router-dom"

export default class LogIn extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, email, password } = this.state;
    const { handleLogin, history } = this.props;

  return(
    <form onSubmit={(e) => {
      e.preventDefault();
      handleLogin(this.state);
      history.push('/');
    }}>
        <h2>Log In</h2>
        <h3>Your name</h3>
        <input
          type="text"
          value={username}
          name="username"
          required
          onChange={this.handleChange}
          />
        <h3>Email</h3>
        <input
          type="text"
          value={email}
          name="email"
          required
          onChange={this.handleChange}
        />
        <h3>Password</h3>
        <input 
          type="password"
          value={password}
          name="password"
          required
          onChange={this.handleChange}
      />
      <Link to ="/">
      <button>Submit</button>
      </Link>
      </form>
    )
  }
}
