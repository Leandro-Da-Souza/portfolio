import React, { useState } from 'react'
import { Sidebar }  from '../components/Sidebar';
import { LogoContainer, LogoBrandContainer, LogoBrand, LogoText } from '../components/Logo';
import { Link } from '../components/Links';
import {Column} from '../components/Column';
import { globalColors } from '../constants/contants';


const Nav = () => {
    const [currentLink, setCurrentLink] = useState('home')

    const scrollToPage = (id) => {
      const anchor = document.getElementById(`${id}`)
      setCurrentLink(id)
      anchor.scrollIntoView({ behavior: 'smooth'})
    }

    const addActiveClass = (name) => {
      return currentLink === name ? {color: `${globalColors.white}` } : {color: `${globalColors.black}`}
    }
    
    
    return (
        <Sidebar>
          <LogoContainer>
            <LogoBrandContainer>
              <LogoBrand>L</LogoBrand>
            </LogoBrandContainer>
            <LogoText>Leandro Da Souza</LogoText>
          </LogoContainer>
          <Column>
            <Link onClick={() => scrollToPage('home')} style={addActiveClass('home')}>Home</Link>
            <Link onClick={() => scrollToPage('about')} style={addActiveClass('about')}>About</Link>
            <Link onClick={() => scrollToPage('portfolio')} style={addActiveClass('portfolio')}>Portfolio</Link>
            <Link onClick={() => scrollToPage('contact')} style={addActiveClass('contact')}>Contact</Link>
          </Column>
        </Sidebar>
    )
}

export default Nav
