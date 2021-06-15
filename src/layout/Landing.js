import React from 'react'
import { HeaderText, InlineText, ParagraphText } from '../components/HeaderText'

const Landing = () => {
    return (
        <div className="landing-page" style={{zIndex:2, mixBlendMode: 'lighten',}}>
            <div 
                className="upperS"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
            }}>
                <HeaderText>Hi! I'm 
                    <InlineText> Leandro Da Souza </InlineText> 
                    and i am a front-end developer!
                </HeaderText>
                <ParagraphText color="white">Currently looking for work!</ParagraphText>
            </div>
        </div>
    )
}

export default Landing
