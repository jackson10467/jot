import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
`

const StyledInput = styled.input`
  width: 50%;
  height: 60%;
  padding: 1em;
  margin: 2vh;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  transition: width 0.3s;
`

const StyledButton = styled.button`

`

export default class Login extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <Container>
      <h3>Login</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleLogin(this.state);
        this.props.history.push('/');
      }}>
        <label htmlFor="username">username:</label>
        <StyledInput
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="email">email:</label>
        <StyledInput
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="password">password:</label>
        <StyledInput
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <br />
        <Link to='/register'>register</Link>
        <button>Submit</button>
        </form>
        </Container>
    )
  }
}
