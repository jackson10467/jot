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
    font-size:45px;
  }
`
const Links = styled.div`
  display:flex;
  flex-flow:row nowrap;
  width:25%;
  @media (max-width:768px){
   width:100%;
   margin-left:25%;
  }
`
const Links2 = styled.div`
  display:flex;
  flex-flow:row nowrap;
  width:25%;
  @media (max-width:768px){
   width:100%;
   margin-right:15%;
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
   padding:12px;
   font-size:12px;
  }
  @media (max-width:900px){
  }
`
const StyledLink2 = styled(Link)`
  display:flex;
  align-items:center;
  text-decoration:none;
  border:1px solid black;
  justify-content:space-between;
  padding:16px;
  margin-right:10%;
  color:black;
  font-size:16px;
  font-family: 'Montserrat', sans-serif;
  @media (max-width:768px){
   padding:10px;
   font-size:12px;
  }
  @media (max-width:900px){
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
      <Logo><StyledA href="/">JOT✎</StyledA></Logo>
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
        <Links2>
          <StyledLink2 to="/categories">Categories</StyledLink2>
          <StyledLink2 onClick={props.handleLogout}>Logout</StyledLink2>
        </Links2>
        </>
      }
    </StyledHeader>
  )
}