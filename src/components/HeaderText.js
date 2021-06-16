import styled from "styled-components";
import { globalColors } from '../constants/contants';

export const HeaderText = styled.h1`
    color: ${globalColors.white};
    margin-bottom: 1.12rem;
    z-index: 2;
    font-size: 1.1rem;
    text-align: center
`

export const InlineText = styled.span`
    color: ${props => props.color ? globalColors[props.color] : globalColors.red};
    z-index: 2;
`

export const ParagraphText = styled.p`
    color: ${props => props.color ? globalColors[props.color] : globalColors.red};
    margin-left: 5%;
    margin-right: 5%;
    line-height: 1.4;
    z-index: 2;
`

