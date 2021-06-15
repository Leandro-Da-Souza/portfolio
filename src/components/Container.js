import styled from "styled-components";
import Image from '../static/bg.jpg'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${Image});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: .5;
    }
`;
