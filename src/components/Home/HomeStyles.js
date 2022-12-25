import styled from 'styled-components';

export const Picture = styled.div`
position:relative;
width:100%;
margin-top:30px;
  text-align: justify;
  text-justify: inter-word;
color:${props => props.theme.colors.textColor};
li{
	margin: 10px 0 10px;
}
img{
	border-color:black;
	border-styled:solid;
	border-width:5px;
	border-radius:50%;
	object-fit:cover;
	shape-outline:circle(80%);
	width:200px;
	height:200px;
	margin-right:20px;
	float:left;
}
`


