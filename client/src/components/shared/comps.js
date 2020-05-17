import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 60%;
  padding: 1em;
  margin: 2vh;
  font-family: "Montserrat", sans-serif;
  text-align: center;

`
export const CardButton = styled.button`
width: 100%;
height: 40%;
margin-top: 5vh;
margin-right:15%;
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
export const PostButton = styled.button`
width: 50%;
height: 40%;
margin-top: 5vh;
margin-right:15%;
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
export const Simg = styled.img`
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  flex:1;
  margin:5%;
  width:50%;
  box-shadow: 10px 10px 5px grey;
`

export const H3 = styled.h3`
font-weight:bold;
font-size:34px;
word-break:break-all;
text-align:left;
`
export const H1 = styled.h1`
font-weight:bold;
font-size:68px;
border-bottom:2px solid black;
`

export const Marge = styled.div`
  margin-left:5%;
`

export const P = styled.p`
  letter-spacing:1px;
  font-size: 16px;
  margin-top:5%;
  line-height:24px;
`

export const FlexGrid = styled.div`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
`

export const GridColumn = styled.div`
  flex:1 0 32%;
  flex-grow:1;
`

export const Card = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  background-color:white;
  border:1px solid black;
  margin:10%;
`
export const Buttons = styled.div`
  display:flex;
  flex-direction: row;
`

export const Postit = styled.div` 
display:flex;
flex-direction:column;
align-items: center;
line-height: 1;    
text-align:center;     
min-width: 275px;    
margin: 10%;    
min-height:250px;
max-height:250px;
padding-top:35px;
  position:relative;   
  border:1px solid #E8E8E8;  
  border-top:60px solid #fdfd86;
  font-family:'Reenie Beanie';    
  font-size:22px;      
  border-bottom-right-radius: 60px 5px;
  display:inline-block;    
  background: #ffff88; /* Old browsers */
background: -moz-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, right bottom, color-stop(81%,#ffff88), color-stop(82%,#ffff88), color-stop(82%,#ffff88), color-stop(100%,#ffffc6)); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* Opera 11.10+ */
background: -ms-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* IE10+ */
background: linear-gradient(135deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* W3C */

`

// Post it note CSS taken from https://mentormate.com/blog/css-postit-note/

