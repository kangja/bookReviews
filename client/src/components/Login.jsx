import React, { Component } from 'react'

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

    return (
    <div className="login-container">
      <form className="login"
          onSubmit={(e) => {
      // we don't want to lose our state
      e.preventDefault();
      // make our api call
      handleLogin(this.state);
      history.push('/');
    }}>
        <h2>Log In</h2>
        <h3>Your name</h3>
          <input
          className="login-username"
          type="text"
          value={username}
          name="username"
          required
          onChange={this.handleChange}
          />
        <h3>Email</h3>
          <input
          className="login-email"
          type="text"
          value={email}
          name="email"
          required
          onChange={this.handleChange}
        />
        <h3>Password</h3>
          <input 
          className="login-password"
          type="password"
          value={password}
          name="password"
          required
          onChange={this.handleChange}
          />
          <br></br>
      <button className="login-button">Submit</button>
        </form>
        </div>
    )
  }
}
