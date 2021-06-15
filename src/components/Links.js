import styled from "styled-components";
import { globalColors } from '../constants/contants';

export const Link = styled.a`
    font-family: 'Monoton', cursive;
    font-size: 1.9rem;
    height: 100%;
    :hover {
        color: ${globalColors.white};
        &::after {
            content: '  \u2190;'
        }
    }
`