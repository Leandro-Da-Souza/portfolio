import styled from "styled-components";
import { globalColors } from '../constants/contants';

export const HeaderText = styled.h1`
    color: ${globalColors.white};
    margin-bottom: 1rem;
    z-index: 2;
    font-size: 1.1rem;
`

export const InlineText = styled.span`
    color: ${props => props.color ? globalColors[props.color] : globalColors.red};
`

export const ParagraphText = styled.p`
    color: ${props => props.color ? globalColors[props.color] : globalColors.red};
`

