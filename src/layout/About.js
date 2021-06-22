import React from 'react'
import { HeaderText, ParagraphText, InlineText } from '../components/HeaderText';
import { RefInfo } from '../components/Reference';
import { SiCss3, SiHtml5, SiJavascript } from 'react-icons/si'
import { globalColors } from '../constants/contants';


const About = () => {
    
    return (
        <div id="about" style={{height: '70%', paddingTop: '10%'}}>
            <HeaderText>A little bit about <InlineText>me.</InlineText></HeaderText>
            <ParagraphText color="white">29 year old man born in Stockholm, Sweden. Started with web development as a hobby in 2016 and began a formal education with workplace experience from 2018 - 2021. I have a burning passion for code and development of any kind. Check out my Porfolio for an excerpt of the work i've done or Contact if you want to get in touch! </ParagraphText>
            <div style={{marginLeft: '4%', marginTop: '3%'}}>
                <RefInfo>
                    <h2>Education:</h2>
                    <p>Chas Academy - Fullstack Developer - 2018 / 2019</p>
                    <p>Jensen Yrkeshögskola - Frontend Developer - 2019 / 2021</p>
                </RefInfo>
                <RefInfo>
                    <h2>Work:</h2>
                    <p>Easynote AB - Frontend Developer - 2020 / 2021</p>
                    <p>Earn Eight AB- Frontend Developer - 2021 / 2021</p>
                </RefInfo>
            </div>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '5%',
                gap: '12px'
            }}>
                <SiHtml5 size={70} color={globalColors.white}/>
                <SiJavascript size={70} color={globalColors.white}/>
                <SiCss3 size={70} color={globalColors.white}/>
            </div>
        </div>
    )
}

export default About
