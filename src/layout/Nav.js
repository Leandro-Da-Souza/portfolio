import React from 'react'
import { Sidebar }  from '../components/Sidebar';
import { LogoContainer, LogoBrandContainer, LogoBrand, LogoText } from '../components/Logo';
import { Link } from '../components/Links';
import {Column} from '../components/Column';


const Nav = () => {
    return (
        <Sidebar>
          <LogoContainer>
            <LogoBrandContainer>
              <LogoBrand>L</LogoBrand>
            </LogoBrandContainer>
            <LogoText>Leandro Da Souza</LogoText>
          </LogoContainer>
          <Column>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Portfolio</Link>
            <Link>Contact</Link>
          </Column>
        </Sidebar>
    )
}

export default Nav
