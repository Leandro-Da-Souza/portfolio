import React from 'react'
import { HeaderText, InlineText, ParagraphText } from '../components/HeaderText'
import About from './About';

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
                    and i am a front-end developer!
                </HeaderText>
                <ParagraphText color="white">Currently looking for work!</ParagraphText>
            </div>
            <About/>
        </div>
    )
}

export default Landing
