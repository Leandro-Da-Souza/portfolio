import React from 'react'
import { HeaderText, ParagraphText, InlineText } from '../components/HeaderText'

const Portfolio = () => {
    return (
        <div id="portfolio" style={{height: '100%', paddingTop: '20%'}}>
            <HeaderText><InlineText>Port</InlineText>folio</HeaderText>
            <ParagraphText color="white">A selection from my <a href="https://github.com/Leandro-Da-Souza/" target="_blank" style={{color: 'blue'}}>Github</a> page, for more please visit the link!</ParagraphText>
        </div>
    )
}

export default Portfolio
