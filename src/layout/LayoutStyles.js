import styled from 'styled-components';

export const Container = styled.div`
max-width: 1280px;
width: 80%;
margin:auto;
min-width:600px;
@media ${props=>props.theme.breakpoints.sm}{
width:fit-content;
min-width: 0px;
overflow:hidden;
height:1000px;
margin:0px;
padding:0px;
}
`;
