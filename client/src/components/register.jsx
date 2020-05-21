import React, { Component } from 'react'
import { StyledInput } from "./shared/comps"
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
`

const Title = styled.div`
  margin-bottom:2%;
  font-weight:bold;
  font-size: 30px;

`

const StyledButton = styled.button`
  width: 50%;
  height: 40%;
  margin-top: 5vh;
  background-color: #ffffff;
  color: black;
  padding: 1em;
  font-family: "Montserrat", sans-serif;
  transition: all 0.2s ease-in;

  &:hover{
    background-color:#307FE2;
    color:white;
  }
`

const Bottom = styled.div`
display:flex;
align-items:center;
justify-content:center;
`

export default class Register extends Component {
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
        <Title>REGISTER</Title>
        <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleRegister(this.state);
        this.props.history.push('/');
      }}>
        <label htmlFor="username">Username:</label>
        <StyledInput
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <StyledInput
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <StyledInput
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
          <br />
          <Bottom>
            <StyledButton>Submit</StyledButton>
          </Bottom>
        </form>
        </Container>
    )
  }
}
