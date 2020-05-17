import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: white;
  height:10vh;
  display:flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items:center;
  width:100%;
  flex-direction:row;
`
const Logo = styled.h1`
  font-size:70px;
  margin-left:5%;
  font-family: 'Londrina Outline', cursive;
  @media (max-width:768px){
    font-size:55px;
  }
`
const Links = styled.div`
  display:flex;
  flex-flow:row nowrap;
  width:25%;

  @media (max-width:768px){
   width:100%;
  }
`

const StyledLink = styled(Link)`
  display:flex;
  align-items:center;
  text-decoration:none;
  border:1px solid black;
  padding:16px;
  margin-right:10%;
  color:black;
  font-size:16px;
  font-family: 'Montserrat', sans-serif;

  @media (max-width:768px){
    margin:5%;
  }
  @media (max-width:900px){
    margin:10%;
  }
`

const StyledA = styled.a`
  color:black;

&:hover{
  color:${props => props.theme.blue}
}
`
export default function Header(props) {
  return (
    <StyledHeader>
      <Logo><StyledA href="/"> JOT✎</StyledA></Logo>
      {
        props.currentUser
          ?
          <Links>
          </Links>
          :
          <Links>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
          </Links>
      }

      
      {
        props.currentUser
        &&
        <>
        <Links>
          <StyledLink to="/categories">Categories</StyledLink>
          <StyledLink onClick={props.handleLogout}>Logout</StyledLink>
          </Links>
        </>
      }

    </StyledHeader>
  )
}
