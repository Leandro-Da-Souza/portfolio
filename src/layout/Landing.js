import React from 'react'
import { HeaderText, InlineText, ParagraphText } from '../components/HeaderText'
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Landing = () => {
    return (
        <div className="landing-page" 
            style={{
            zIndex:2, 
            height: '100%'
            }}>
            <div 
                id="home"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '70%'
            }}>
                <HeaderText>Hi! I'm 
                    <InlineText> Leandro Da Souza </InlineText> 
                    and I am a front-end developer!
                </HeaderText>
                <ParagraphText color="white">Currently looking for work!</ParagraphText>
            </div>
            <About/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}

export default Landing
