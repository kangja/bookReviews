import React, {Component} from "react"
import './App.css';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import Header from "./components/Header"
import Main from "./components/Main"
import { withRouter } from 'react-router-dom';

class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    this.handleVerify();
  }

  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData);
    this.setState({ currentUser })
  }

  handleSignUp = async (userData) => {
    const currentUser = await registerUser(userData);
    this.setState({ currentUser })
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    removeToken();
    this.props.history.push('/')
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  }

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Main
          currentUser={this.state.currentUser}
          handleLogin={this.handleLogin}
          handleSignUp={this.handleSignUp}
        />
      </div>
    );
  }
}

export default withRouter(App);
