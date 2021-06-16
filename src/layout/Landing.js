import React from 'react'
import { HeaderText, InlineText, ParagraphText } from '../components/HeaderText'
import About from './About';
import Portfolio from './Portfolio';

const Landing = () => {
    return (
        <div className="landing-page" 
            style={{
            zIndex:2, 
            mixBlendMode: 'lighten',
            height: '100%'
            }}>
            <div 
                id="home"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
            }}>
                <HeaderText>Hi! I'm 
                    <InlineText> Leandro Da Souza </InlineText> 
                    and I am a front-end developer!
                </HeaderText>
                <ParagraphText color="white">Currently looking for work!</ParagraphText>
            </div>
            <About/>
            <Portfolio/>
        </div>
    )
}

export default Landing
