import React from 'react'
import { Sidebar }  from '../components/Sidebar';
import { LogoContainer, LogoBrandContainer, LogoBrand, LogoText } from '../components/Logo';

const Nav = () => {
    return (
        <Sidebar>
          <LogoContainer>
            <LogoBrandContainer>
              <LogoBrand>L</LogoBrand>
            </LogoBrandContainer>
            <LogoText>Leandro Da Souza</LogoText>
          </LogoContainer>
        </Sidebar>
    )
}

export default Nav
