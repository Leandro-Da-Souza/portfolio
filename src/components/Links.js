import styled from "styled-components";
import { globalColors } from '../constants/contants';

export const Link = styled.a`
    font-family: 'Monoton', cursive;
    font-size: 1.9rem;
    height: 100%;
    :hover {
        cursor: pointer;
        &::after {
            content: '  \u2190';
            color: ${globalColors.white};
        }
    }
    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`