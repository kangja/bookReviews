import React, {Component} from 'react'

export default class SignUp extends Component {
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
    const { handleSignUp, history } = this.props;

    return (
    <div className="signup-container">
    <form className="sign-up"
      onSubmit={(e) => {
      e.preventDefault();
      handleSignUp(this.state);
      history.push('/');
    }}>
        <h2>Create account</h2>
        <h3>Your name</h3>
          <input
          className="username"
          type="text"
          value={username}
          name="username"
          required
          onChange={this.handleChange}
          />
        <h3>Email</h3>
          <input
          className="email"
          type="text"
          value={email}
          name="email"
          required
          onChange={this.handleChange}
        />
        <h3>Password</h3>
          <input 
          className="password"
          type="password"
          value={password}
          name="password"
          placeholder="At least 6 characters"
          required
          onChange={this.handleChange}
      />
      <p>Passwords must be at least 6 characters.</p>
      <button className="signup-button">Create your bookReviews account</button>
        </form>
        </div>
    )
  }
}
