import styled from 'styled-components';

export const Container = styled.div`
max-width: 1280px;
width: 60%;
margin:auto;
@media ${props=>props.theme.breakpoints.sm}{
width:100%;
height:1000px;
margin:0;
min-width:500px;
}
`;
