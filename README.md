# NUMBER GUESSING GAME

Welcome to the Number Guessing Game! This simple React application lets you test your guessing skills by attempting to guess a random number between 1 and 100. The game provides feedback on whether your guess is too high, too low, or correct.

## How to Play

1. **Generate New Number:** Click the "Generate New Number" button to get a new random number.

2. **Guess the Number:** Enter your guess in the input field provided and click "Click to Guess."

3. **Feedback:** The game will provide feedback on whether your guess is too high, too low, or correct.

4. **Winning:** If you correctly guess the number, the game will congratulate you and display the number of attempts it took.

## Components

### GuessInput Component

The `GuessInput` component provides an input box for entering your guess and a button to submit your guess.

```jsx
<GuessInput
  value={userGuess}
  onChange={handleInputChange}
  onSubmit={handleGuess}
/>
```

- `value`: The current value of the input field.
- `onChangeProp`: A callback function to handle input changes. When the user modifies the content of the input field, this function is called updating the `userGuess` state with the current value of the input field.
- `onSubmit`: A function to handle form submission (guessing).

### ResultMessage Component

The `ResultMessage` component displays a message, providing feedback to the player.

```jsx
<ResultMessage message={message} />
```

- `message`: The message to be displayed.

### NumberGenerator Component

The `NumberGenerator` component renders a button to generate a new random number.

```jsx
<NumberGenerator onGenerate={handleGenerateNumber} />
```

- `onGenerate`: A function to handle the generation of a new random number.

### NumberGuessingGame Component

The main `NumberGuessingGame` component orchestrates the game logic, incorporating the other components.

```jsx
<NumberGuessingGame />
```

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and go to `http://localhost:3000`.

Have fun playing the Number Guessing Game!
