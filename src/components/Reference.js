import styled from "styled-components";
import Img1 from '../static/images/one.png'
import Img2 from '../static/images/two.png'
import Img3 from '../static/images/three.png'
import { globalColors } from "../constants/contants";

export const RefContainer = styled.section`
    width: calc(100% - 100px);
    height: 20vh;
    margin: 10px auto 20px auto;
    display: flex;
    justify-content: space-between;
    z-index: 1000;
    
`



export const RefImage1 = styled.div`
    flex: 1;
    z-index: 150;
    background-image: url(${Img1});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`
export const RefImage2 = styled.div`
    width: 100px;
    height: 100px;
    z-index: 100;
    flex: 1;
    background-image: url(${Img2});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`
export const RefImage3 = styled.div`
    width: 100px;
    height: 100px;
    z-index: 100;
    flex: 1;
    background-image: url(${Img3});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

export const RefInfo = styled.div`
    color: ${globalColors.white};
    font-size: 0.8rem;
    justify-self: flex-start;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1%;
    & > * {
        padding: 3px;
    }
`