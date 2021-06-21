import styled from "styled-components";
import Img1 from '../static/images/one.png'
import Img2 from '../static/images/two.png'
import { globalColors } from "../constants/contants";

export const RefContainer = styled.section`
    width: calc(100% - 40px);
    height: 20vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`



export const RefImage1 = styled.div`
    width: 150px;
    height: 200px; 
    z-index: 150;
    background-image: url(${Img1});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    flex: 1;
`
export const RefImage2 = styled.div`
    width: 150px;
    height: 200px;
    z-index: 100;
    background-image: url(${Img2});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

export const RefInfo = styled.div`
    flex: 1;
    color: ${globalColors.white};
    font-size: 0.8rem;
`