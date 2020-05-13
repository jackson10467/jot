import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components'; 
import theme from "./components/shared/theme";
import GlobalStyle from "./components/shared/GlobalStyle";
import Header from './components/header';
import Main from './components/main';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from './services/APIhelper';

class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    this.confirmUser();
  }

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser })
  }

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser })
  }

  confirmUser = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser })
  }

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      currentUser: null
    })
    removeToken();
    this.props.history.push('/');
  }

  render() {
    return (
      <ThemeProvider
      theme = {theme}
      >
      <GlobalStyle/>
        
        <Header
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Main
          handleRegister={this.handleRegister}
          handleLogin={this.handleLogin}
          currentUser={this.state.currentUser}
        />

      </ThemeProvider>
    )
  }
}

export default withRouter(App);