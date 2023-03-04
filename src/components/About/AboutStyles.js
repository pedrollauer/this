import styled from 'styled-components'

export const Frame = styled.div`
width:100%;
display:flex;
margin-top: 50px;
padding-bottom:75px;

@media ${props=>props.theme.breakpoints.sm}{
	flex-direction: column;
	div{
		width:100%;
		box-sizing: border-box;
		padding:10px 0px 10px 0px;
	}
}
`
export const Bio = styled.div`
width:50%;
height:fit-content;
padding-top:150px;
text-align:center;
box-sizing:border-box;
min-width: 250px;
margin:0px;
color:${props=>props.theme.colors.textColor};

h1, h3, h5, button{
	min-width: 245px;
}
@media ${props=>props.theme.breakpoints.sm}{
	order:2;
	width:100vw;
	min-width:0px;
}
`
export const Profile= styled.div`
width: 50%;
display: flex;
justify-content:center;
padding-top:150px;
box-sizing: border-box;
overflow: hidden;

@media ${props=>props.theme.breakpoints.sm}{
	order:1;
	padding-top:0px;
	padding-left:0px;	
	width:100vw;
	height:250px;
}
`
export const Picture = styled.div`

@media ${props=>props.theme.breakpoints.sm}{
		padding-top:0px;
		height:250px;
		display:flex;
		justify-contents:center;
}
img{
	margin:auto;
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
export const CallAction = styled.button`
margin-top:20px;
background-color: ${props=>props.theme.colors.secondBg};
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
`
