import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HeaderText } from '../components/HeaderText';
import { globalColors } from '../constants/contants';

const Contact = () => {
    const handleHover = e => {
        e.target.style.color = globalColors.red
        e.target.style.cursor = 'pointer'
    }
    const handleHoverOut = e => {
        e.target.style.color = globalColors.white
    }
    const handleClick = e => {
        if(e.target.tagName === 'path') {
            // console.log(e.nativeEvent.target.parentElement.dataset.url)
            window.open(e.nativeEvent.target.parentElement.dataset.url, '_target')
        } else {
            // console.log(e.target.dataset.url)
            window.open(e.target.dataset.url, '_target')
        }
    }

    return (
        <div style={{
            height: '60%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }} id="contact">
            <HeaderText>I'm available at <a href="mailto: dasouza.leandro@gmail.com" style={{color: globalColors.red}}>dasouza.leandro@gmail.com</a> any day of the week, or visit any of the links below for my socials!</HeaderText>
            <div className="link-container" style={{
                width: '20%',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <AiFillGithub data-url="https://github.com/Leandro-Da-Souza"size={70} color={globalColors.white} onMouseOver={handleHover} onMouseOut={handleHoverOut} onClick={handleClick}/>
                <AiFillLinkedin data-url="https://www.linkedin.com/in/leandro-da-souza/" size={70} color={globalColors.white} onMouseOver={handleHover} onMouseOut={handleHoverOut} onClick={handleClick}/>
            </div>
        </div>
    )
}

export default Contact
