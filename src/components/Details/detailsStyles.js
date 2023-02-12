import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1040px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  border-radius: 2px;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: 100%;
    flex-direction: column;
  }
`

export const Menu = styled.div`
margin-top:50px;
box-sizing:border-box;
display:flex;
width:100%;
height:70px;
padding-top:20px;
background-color:${props => props.theme.colors.secondBg};
@media ${props=>props.theme.breakpoints.sm}{
 
}
`
export const Return=styled.button`
position: absolute;
top: 0px;
left: 0px;
font-size: 30px;
width:70px;
height: 30px;
background-color: transparent;
border: none;
outline: none;
`

export const Title=styled.div`
position: relative;
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
box-shadow: 0px 0px 5px rgba(80, 78, 78, 0.5);
@media ${(props) => props.theme.breakpoints.sm}{
display:block;
}
`
export const Video= styled.div`
width:500px;
height:100%;
margin:auto;
padding:30px 10px 0px 10px;
@media ${(props) => props.theme.breakpoints.sm}{
display:block;
height:450px;
width:95%;
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
 margin-bottom: 20px;
}


}
`
export const FeatureCard = styled.div`
width:100%;
height:500px;
box-shadow: 0px 0px 5px rgba(80, 78, 78, 0.5);
display:flex;
background-color: ${props=>props.theme.colors.notSoMuch};
@media ${(props) => props.theme.breakpoints.sm}{
display:block;
}
`
export const FeatureImage = styled.img`
object-fit: cover;
width:70%;
height:100%;
z-index:1;
@media ${(props) => props.theme.breakpoints.sm}{
width: auto;
height: auto;
max-width: 300px;
max-height: 300px;
}
`
