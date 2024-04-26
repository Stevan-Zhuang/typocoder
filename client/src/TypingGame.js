import React, { useState } from 'react';

const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

function TypingGame() {
  const [currentWord, setCurrentWord] = useState(getRandomWord());
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);

  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  function handleInputChange(event) {
    setUserInput(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter' && userInput === currentWord) {
      setScore(score + 1);
      setCurrentWord(getRandomWord());
      setUserInput('');
    }
  }

  function resetGame() {
    setCurrentWord(getRandomWord());
    setUserInput('');
    setScore(0);
  }

  return (
    <div>
      <p>Score: {score}</p>
      <p>Type this word: {currentWord}</p>
      <input value={userInput} onChange={handleInputChange} onKeyPress={handleKeyPress} />
      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default TypingGame;
