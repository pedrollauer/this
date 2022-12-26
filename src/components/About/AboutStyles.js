import styled from 'styled-components'

export const Frame = styled.div`
width:100%;
display:flex;
margin-top: 50px;
`
export const Bio = styled.div`
width:50%;
height:500px;
padding-top:20%;
text-align:center;
box-sizing:border-box;
color:${props=>props.theme.colors.textColor}
`
export const Profile= styled.div`
width: 50%;
height:500px;
`
export const Picture = styled.div`
width:100%;
height:300px;
	padding-top:35%;
	padding-left:15%;
img{
	border-color:black;
	border-styled:solid;
	border-width:5px;
	border-radius:50%;
	object-fit:cover;
	width:250px;
	height:250px;
	shape-outside:circle(50%);
	float:left;
	background-color:${props=>props.theme.colors.secondBg};
}
`