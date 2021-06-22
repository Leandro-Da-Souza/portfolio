import React from 'react'
import { HeaderText, InlineText, ParagraphText } from '../components/HeaderText'
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Landing = () => {
    AOS.init();

    return (
        <div className="landing-page" 
            style={{
            zIndex:2, 
            height: '100%'
            }}>
            <div 
                id="home"
                data-aos="zoom-in-right"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50%'
            }}>
                <HeaderText>Hi! I'm 
                    <InlineText> Leandro Da Souza </InlineText> 
                    and I am a front-end developer!
                </HeaderText>
                <ParagraphText color="white">Currently looking for work!</ParagraphText>
            </div>
            <About />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Landing
