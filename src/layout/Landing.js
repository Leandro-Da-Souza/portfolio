import React from 'react'
import { HeaderText, InlineText } from '../components/HeaderText'

const Landing = () => {
    return (
        <div style={{
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mixBlendMode: 'lighten',
            height: '100vh'
        }}>
            <HeaderText>Hi! I'm 
                <InlineText> Leandro Da Souza </InlineText> 
                and i am a front-end developer!
            </HeaderText>
        </div>
    )
}

export default Landing
