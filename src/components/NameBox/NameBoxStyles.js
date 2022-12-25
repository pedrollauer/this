
import styled from 'styled-components'
export const NameBox = styled.div`

position:relative;
color:${props=>props.theme.colors.bg};
background-color:${props=>props.theme.colors.textColor};
display:block;
margin-left:auto;
margin-right:auto;
text-align:center;
width:500px;
padding:10px 30px 10px;
box-sizing:border-box;
border-radius:9px;
font-family:'Minecraft';
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.8);
img{
	border-color:black;
	border-styled:solid;
	border-width:5px;
	border-radius:50%;
	object-fit:cover;
	shape-outline:circle(50%);
	width:140px;
	height:140px;
	margin-right:20px;
	float:left;
}
@media ${props=>props.theme.breakpoints.sm}{
width:100%;
}
`
