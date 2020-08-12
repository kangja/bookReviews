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

  return(
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSignUp(this.state);
      history.push('/');
    }}>
        <h2>Sign Up</h2>
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
      <button>Submit</button>
      </form>
    )
  }
}
