import { useState } from "react";
import NumberGenerator from "./NumberGenerator";
import ResultMessage from "./ResultMessage";
import GuessInput from "./GuessInput";

const NumberGuessingGame = () => {
    const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
    const [attempts, setAttempts] = useState(0);
    const [message, setMessage] = useState('Happy Guessing 😊!');
    const [userGuess, setUserGuess] = useState('');

    function  generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    const handleGenerateNumber = () => {
        setTargetNumber(generateRandomNumber());
        setAttempts(0);
        setMessage('New number has been generated. Happy Guessing 😊!')
    }

    const handleInputChange = (e) => {
        setUserGuess(e.target.value);
    }

    const handleGuess = () => {
        const guess = parseInt(userGuess, 10);

        if (isNaN(guess)){
            setMessage('Please enter a valid number!');
            return;
        }

        setAttempts(attempts + 1);

        if (guess === targetNumber) {
            setMessage(`Congratulations! You guessed the correct number ${guess}, in ${attempts} attempts.`);
        } else if (guess < targetNumber) {
            setMessage('Too Low! Try Again!')
        } else {
            setMessage('Too High! Try Again!');
        }
    };

  return (
    <div className="guessing-game">
        {/* The NumberGuessingGame uses the NumberGenerator and passes */}
        {/* a function handleGenerateNumber as the onGenerate props */}
        <NumberGenerator onGenerate={handleGenerateNumber} />

        <p className="mt-3">Guess a number between 1 and 100:</p>

        <GuessInput value={userGuess} onChangeProp={handleInputChange} onSubmit={handleGuess} />
        <ResultMessage message={message} />
    </div>
  )
}

export default NumberGuessingGame