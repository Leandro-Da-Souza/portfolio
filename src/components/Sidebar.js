import styled from "styled-components";
import { globalColors } from '../constants/contants'

export const Sidebar = styled.section`
    width: 25vw;
    height: 100vh;
    position: sticky;
    top: 0;
    background: rgb(251,251,251);
    display: flex;
    flex-direction: column;
    font-family: 'Monoton';
    background: ${globalColors.gradient};
    z-index: 2;
    box-shadow: inset 0 4px 4px 0 rgba(0,0,0, 0.4);
`
