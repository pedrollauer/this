import styled from 'styled-components';

export const Menu = styled.div`
box-sizing:border-box;
display:flex;
width:100%;
height:70px;
padding:20px;
background-color:orange;

`
export const Return=styled.div`
width:70px;
height:100%;
text-align:center;
align-items:center;
font-size:35px;
color:white;
`

export const Title=styled.div`
width:100%;
height:100%;
text-align:center;
align-items:center;
color:white;
font-size:35px;
`
export const VideoContainer = styled.div`
width:100%;
height:400px;
display:flex;
overflow:hidden;
margin-auto;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
@media ${(props) => props.theme.breakpoints.sm}{
display:block;
}
`
export const Video= styled.div`
width:500px;
height:100%;
margin:auto;
padding-top:30px;
@media ${(props) => props.theme.breakpoints.sm}{
display:block;
height:450px;
width:100%;
}
`
export const Description = styled.div`
width:30%;
height:100%;
vertical-align:center;
color:${props=>props.theme.colors.textColor};
box-sizing:border-box;
padding:10px 20px 10px;
text-align:justify;
z-index:2;

@media ${(props) => props.theme.breakpoints.sm}{
 height:150px;
 width:100%;
}


}
`
export const FeatureCard = styled.div`
width:100%;
height:500px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
display:flex;
@media ${(props) => props.theme.breakpoints.sm}{
display:block;
}
`
export const FeatureImage = styled.img`
width:70%;
height:100%;
z-index:1;
@media ${(props) => props.theme.breakpoints.sm}{
height:400px;
width:100%;
}
`
