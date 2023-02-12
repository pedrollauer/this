import styled from 'styled-components';

export const IngBox=styled.div`
positio:absolute;
top:0;
right:0;
left:0;
bottom:0;
margin:auto;
color:${props=>props.theme.colors.textColor};
@media ${(props) => props.theme.breakpoints.sm}{
    padding:100px 50px;
}
`

