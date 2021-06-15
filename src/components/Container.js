import styled from "styled-components";
import Image from '../static/bg.jpg'

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    overflow: scroll;
    background-image: url(${Image});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    mix-blend-mode: hue;
    display: grid;
    grid-template-columns: 25vw 75vw;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: .4;
        z-index: 1;
    }
`;
