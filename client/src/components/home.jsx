import React, { Component } from 'react';
import styled from 'styled-components';
import {H1,H3,P,Simg,Marge} from './shared/comps'

const Container = styled.div`
  display:flex;
  justify-content:left;
  flex-direction:row;
  margin-top:5%;
  background-color:white;

  @media (max-width:768px){
    flex-direction:column;
  }
  @media (max-width:900px){
    flex-direction:column;
  }
`
const Nested = styled.div`
  display:flex;
  justify-content: space-evenly;
  align-items:center;
  flex-direction:row;
  flex:1;
`
const Column = styled.div`
  display:flex;
  flex-direction:column;
  flex:1;
  margin:10%;
  padding:10px;
  border-left:1px dotted black;
`




class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <>
        <Container>
          <Nested>
            <Marge>
              <H1>WHY JOT?</H1>
              <P>JOT is completely free, allowing you to take notes on the fly, with easy to access categories to keep you organized. JOT is also platform agnostic, which is a fancy filler way of saying you can take notes regardless of platform.
              </P>
            </Marge>
          </Nested>
          <Nested><Simg src="https://i.imgur.com/Q2bTVhE.jpg"></Simg></Nested>
        </Container>

        <Container>
          <Column>
            <div><H3>FREE</H3></div>
            <P>JOT is free! Why would we charge you to take notes?</P>
          </Column>
          <Column>
            <div>
            <H3>ACCESSIBLE</H3>
            </div>
            <P>JOT is available on any device with an internet browser, these days that means anything from your smartphone to your smart toilet, and everything else inbetween. Yes, even your fridge</P>
          </Column>
          <Column>
            <div><H3>CLEAN</H3></div>
            <P>JOT provides a distraction free environment, allowing you to keep focused on the task at hand. A side effect of the lack of visual content!</P>
          </Column>
        </Container>
        
      </>
    )
  }
}

export default Home