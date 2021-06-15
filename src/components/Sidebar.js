import styled from "styled-components";
import { globalColors } from '../constants/contants'

export const Sidebar = styled.section`
    width: 25vw;
    height: 100vh;
    position: sticky;
    background: rgb(251,251,251);
    display: flex;
    flex-direction: column;
    font-family: 'Monoton';
    background: ${globalColors.gradient};
    z-index: 2
`
