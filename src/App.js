import { Container }  from './components/Container';
import Nav from './layout/Nav';
import Landing from './layout/Landing';

function App() {
  return (
    <div className="app" style={{height: '100%'}}>
      <Container>
        <Nav/>
        <Landing/>
      </Container>
    </div>
  );
}

export default App;
