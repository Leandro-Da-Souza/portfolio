import React from 'react'
import { HeaderText, ParagraphText } from '../components/HeaderText'
import { useFetch } from '../hooks/useFetchGithub'
import { globalColors } from '../constants/contants'

const Portfolio = () => {
    const repo = useFetch('https://api.github.com/repos/Leandro-Da-Souza/Examensarbete');

    console.log(repo)
    return (
        <div id="portfolio" style={{height: '100%', paddingTop: '10%'}}>
            <HeaderText>Portfolio</HeaderText>
            <ParagraphText color="white">A selection from my <a href="https://github.com/Leandro-Da-Souza/" target="_blank" rel="noreferrer" style={{color: `${globalColors.red}`}}>Github</a> page, for more please visit the link!</ParagraphText>
        </div>
    )
}

export default Portfolio
