import { Container }  from './components/Container';
import { Sidebar }  from './components/Sidebar';
import { LogoContainer, LogoBrandContainer, LogoBrand, LogoText } from './components/Logo';

function App() {
  return (
      <Container>
        <Sidebar>
          <LogoContainer>
            <LogoBrandContainer>
              <LogoBrand>L</LogoBrand>
            </LogoBrandContainer>
            <LogoText>Leandro Da Souza</LogoText>
          </LogoContainer>
        </Sidebar>
      </Container>
  );
}

export default App;
