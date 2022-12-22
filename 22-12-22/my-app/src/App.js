import './App.css';
import {Button} from './components/button/Button';
import { Text } from './components/text/Text';
import {Header} from  './components/header/Header';
import {Footer} from './components/footer/Footer';
import {Container} from './layout/container/Container';

function App() {

  const customColor = 'rgb(251, 155, 171)';

  return (
    <div className="App">
    <Header />
    <main>
      <Container> Welcome to my page! 💻</Container>
    </main>
      <Text as='h1'
            style={{ color: customColor }} 
            variant='title'>Hello world!</Text>
    
      <Button aria-label="Clickme" 
              variant='secondary'
              onClick={() => console.log('Hello World!')}
              >ClickMe!</Button>
      <Button aria-label="button hello!"
              variant='primary'
              onClick={() => console.log('Hello, welcome to my site!')} 
              >Hello!</Button>
      <Button aria-label="Clickme" 
              variant='tertiary'
              onClick={() => console.log("You didn't have to do it!")}
              >Don't click!</Button>
      <Footer />           
    </div>
  );
}

export default App;