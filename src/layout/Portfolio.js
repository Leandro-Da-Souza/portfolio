import React from 'react'
import { HeaderText, ParagraphText } from '../components/HeaderText'
import { globalColors } from '../constants/contants'
import { RefContainer, RefImage1, RefImage2,RefImage3, RefInfo } from '../components/Reference'


const Portfolio = () => {

    const handleClick = e => {
        const URL = e.target.nextElementSibling.children[3].children[0].text
        if(URL) {
            window.open(URL, "_blank")
        } else {
            alert('Something went wrong, please try again later')
        }
    }

    return (
        <div id="portfolio" style={{height: '80%', paddingTop: '3%'}}>
            <HeaderText>Portfolio</HeaderText>
            <ParagraphText color="white">A selection from my <a href="https://github.com/Leandro-Da-Souza/" target="_blank" rel="noreferrer" style={{color: `${globalColors.red}`}}>Github</a> page, for more please visit the link!</ParagraphText>
            <RefContainer style={{paddingTop: '5%'}}>
                <RefImage1 onClick={handleClick}></RefImage1>
                <RefInfo>
                    <p>Name: Plantera Mera</p>
                    <p>Description: A website for a fictious company me and my classmate made for our finals.</p>
                    <p>Stack: Vue, Sass, Firebase</p>
                    <p>Link: <a href="https://github.com/Leandro-Da-Souza/Examensarbete" style={{color: globalColors.red}} target="_blank" rel="noreferrer">https://github.com/Leandro-Da-Souza/Examensarbete</a></p>
                </RefInfo>
            </RefContainer>
            <RefContainer style={{paddingTop: '5%'}}>
                <RefImage2 onClick={handleClick}></RefImage2>
                <RefInfo>
                <p>Name: Air Bean</p>
                    <p>Description: A fullstack school project that simulates a webshop, this one for ordering coffee.</p>
                    <p>Stack: Vue, CSS, Node.js</p>
                    <p>Link: <a href="https://github.com/Leandro-Da-Souza/airbean" style={{color: globalColors.red}} target="_blank" rel="noreferrer">https://github.com/Leandro-Da-Souza/airbean</a></p>
                </RefInfo>
            </RefContainer>
            <RefContainer style={{paddingTop: '5%'}}>
                <RefImage3 onClick={handleClick}></RefImage3>
                <RefInfo>
                    <p>Name: Feed The Cat</p>
                    <p>Description: An application to keep track off how many times i feed my gluttonous cat.</p>
                    <p>Stack: Vue, Sass, Node.js, MongoDB</p>
                    <p>Link: <a href="https://github.com/Leandro-Da-Souza/feedthecat" style={{color: globalColors.red}} target="_blank" rel="noreferrer">https://github.com/Leandro-Da-Souza/feedthecat</a></p>
                </RefInfo>
            </RefContainer>
        </div>
    )
}

export default Portfolio
