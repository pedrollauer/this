import styled from 'styled-components';

export const Container = styled.div`
max-width: 1280px;
width: 80%;
margin:auto;
min-width:600px;
@media ${props=>props.theme.breakpoints.sm}{
width: 100vw;
min-width: 0px;
overflow-x:hidden;
overflow-y:scroll;
height: 1000px;
padding: 0px 20px 0px 40px;
padding-right:50px;
box-sizing: border-box;
padding:0px;
}
`;
