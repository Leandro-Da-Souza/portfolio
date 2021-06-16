import styled from "styled-components";

export const RefContainer = styled.section`
    width: calc(100% - 40px);
    height: 100%;
    margin: 0 auto;
    display: flex;
`



export const RefImage = styled.div`
    width: 500px;
    height: 200px;
    background-image: url(${props => props.photo});   
`

export const RefInfo = styled.div`
`