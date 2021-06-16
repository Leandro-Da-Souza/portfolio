import React from 'react'
import { HeaderText, ParagraphText } from '../components/HeaderText'
import { globalColors } from '../constants/contants'
import { RefContainer } from '../components/Reference'
import { useFetch } from '../hooks/useFetch'

const Portfolio = () => {
    const planteraMera = useFetch(' https://api.github.com/repos/Leandro-Da-Souza/examensarbete')
    console.log(planteraMera)

    return (
        <div id="portfolio" style={{height: '100%', paddingTop: '10%'}}>
            <HeaderText>Portfolio</HeaderText>
            <ParagraphText color="white">A selection from my <a href="https://github.com/Leandro-Da-Souza/" target="_blank" rel="noreferrer" style={{color: `${globalColors.red}`}}>Github</a> page, for more please visit the link!</ParagraphText>
            <RefContainer>
                
            </RefContainer>
        </div>
    )
}

export default Portfolio
