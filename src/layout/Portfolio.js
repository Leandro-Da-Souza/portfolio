import React from 'react'
import { HeaderText, ParagraphText } from '../components/HeaderText'
import { globalColors } from '../constants/contants'
import { RefContainer, RefImage1, RefImage2, RefInfo } from '../components/Reference'
import { useFetch } from '../hooks/useFetch'
import { Link } from '../components/Links'


const Portfolio = () => {
    const planteraMera = useFetch(' https://api.github.com/repos/Leandro-Da-Souza/examensarbete')
    console.log(RefImage1)


    if(!planteraMera) {
        return <ParagraphText id="portfolio">Loading...</ParagraphText>
    }
    return (
        <div id="portfolio" style={{height: '100%', paddingTop: '3%'}}>
            <HeaderText>Portfolio</HeaderText>
            <ParagraphText color="white">A selection from my <a href="https://github.com/Leandro-Da-Souza/" target="_blank" rel="noreferrer" style={{color: `${globalColors.red}`}}>Github</a> page, for more please visit the link!</ParagraphText>
            <RefContainer style={{paddingTop: '5%'}}>
                <RefImage1></RefImage1>
                <RefInfo>
                    <p>Heello</p>
                </RefInfo>
            </RefContainer>
        </div>
    )
}

export default Portfolio
