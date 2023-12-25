import Header from './components/Header';
import NumberGuessingGame from './components/NumberGuessingGame';
import './App.css';

function App() {
  return (
    <div className='guessing-game-app'>
      <Header />
      <NumberGuessingGame />
    </div>
  );
}

export default App;
