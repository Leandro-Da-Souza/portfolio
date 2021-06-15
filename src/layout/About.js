import React from 'react'
import { HeaderText, ParagraphText, InlineText } from '../components/HeaderText';


const About = () => {
    return (
        <div id="about" style={{height: '100%'}}>
            <HeaderText>A little bit about <InlineText>me.</InlineText></HeaderText>
            <ParagraphText color="white">29 year old man born in Stockholm, Sweden. Began my developer career in 2018 and finished my front-end development education in 2021. I have a burning passion for code and development of any kind. </ParagraphText>
        </div>
    )
}

export default About
