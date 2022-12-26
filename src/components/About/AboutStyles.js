import styled from 'styled-components'

export const Frame = styled.div`
width:100%;
background-color:orange;
display:flex;
margin-top: 50px;
`
export const Bio = styled.div`
width:50%;
height:500px;
background-color:red;
`
export const Profile= styled.div`
width: 50%;
height:500px;
background-color:blue;
`
export const Picture = styled.div`
width:100%;
height:300px;
img{
	border-color:black;
	border-styled:solid;
	border-width:5px;
	border-radius:50%;
	object-fit:cover;
	width:200px;
	height:200px;
	shape-outside:circle(50%);
	margin-right:20px;
	float:left;
}
`