import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ConfigMenu = styled.div`
position:absolute;
top:0px;
right:30px;
display:flex;

@media ${props=>props.theme.breakpoints.sm}{
position:relative;
display:flex;
order:2;
margin-left:25px;
}
`;

export const DD = styled.div`
width:100px;
height:50px;
position:absolute;
bottom:-50px;
display:none;

&:hover {
 display:block;
}
`
export const DDButton = styled.button`
z-index:1;
width:100px;
height:50px;
font-size:20px;
text-align:center;
padding-top:5px;
background-color:${props=>props.theme.colors.textColor};
color:${props=>props.theme.colors.buttonColor};
border-style:none;

&:hover{

}
&:hover ~ ${DD}{
 display:block;
}
`
export const Switch= styled.button`
width:100px;
height:50px;
font-size:30px;
text-align:center;
padding-top:5px;
background-color:${props=>props.theme.colors.textColor};
color:${props=>props.theme.colors.buttonColor};
boder:none;
border-style:none;
`

export const Container = styled.div`
@media ${props=>props.theme.breakpoints.sm}{
  width:100vw;
  overflow:hidden;

  }
`;
export const Span=styled.span`
		font-size:2rem;
`;
export const Menu= styled.div`
z-index:10;
top:0;
left:0;
text-align:center;
position:fixed;
width:100%;
height:50px;
box-sizing:border-box;
box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.8);
display:flex;
align-items:center;
padding-left:10px;
background-color:${props=>props.theme.colors.textColor};
opacity:${props=>props.theme.colors.opacity};
color:${props=>props.theme.colors.bg};
li{
	padding:0px 20px 0px;
}
@media ${props=>props.theme.breakpoints.sm}{
display:flex;
flex-direction: column;
overflow:hidden;
align-items:start;
text-align:left;
height:50px;
margin-left:0px;
margin-bottom:10px;

li{
  padding: 0px;
  margin-bottom: 10px;
}
&:hover{
height:auto;
}
}
`;

export const Div3 = styled.div`
  background-color:red;
  margin-top:70px;
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

export const Div4= styled.div`
   background-color:red;
  grid-area: 1 / 5 / 2 / 6;
  display: block;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled(Link)`
text-decoration:none;
font-size:20px;
transition: color 1s;
color:${props => props.theme.colors.textColor};

&:visited{
color:${props=>props.theme.colors.bg};

text-decoration:none;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
  }

&:hover{
font-size:24px;
text-decoration:underline;
color: ${props => props.theme.colors.secondBg};
&
}
`;

