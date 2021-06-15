import styled from "styled-components";
import { globalColors } from '../constants/contants'

export const LogoContainer = styled.div`
    width: 15rem;
    height: 14rem;
    align-self: center;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${globalColors.white};
`

export const LogoBrandContainer = styled.div`
    width: 10rem;
    height: 10rem;
    background-color: ${globalColors.red};
    opacity: 0.9;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LogoBrand = styled.h2`
    font-family: 'Monoton', cursive;
    font-size: 8rem;
    color: ${globalColors.white};
    font-stretch: ultra-expanded;
`;

export const LogoText = styled.p`
    font-family: 'Monoton', cursive;
    text-align: center;
    margin-top: 0.5rem;
`


