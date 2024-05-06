import React, { useEffect, useRef, useState } from "react";
import TextDisplay from "./TextDisplay";
import TextInput from "./TextInput";
import "../styles/TypingGame.css";

function TypingGame({ currentLines, cycleNextLines, updateStats }) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const intervalRef = useRef();

  const countSecond = () => {
    setTimer((prevTimer) => prevTimer + 1);
  };
  useEffect(() => {
    if (gameStarted) {
      intervalRef.current = setInterval(countSecond, 1000);
    } else if (!gameStarted && timer !== 0) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [gameStarted, timer]);

  function handleInputChange(event) {
    setUserInput(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setUserInput((prevUserInput) => prevUserInput + " ".repeat(4));
    }
  }

  function handleKeyPress(event) {
    if (!gameStarted) {
      setGameStarted(true);
    }
    if (event.key === "Enter" && userInput === currentLines[currentLineIndex]) {
      completeLine();
    }
  }

  function completeLine() {
    if (currentLineIndex < currentLines.length - 1) {
      setCurrentLineIndex(currentLineIndex + 1);
    } else {
      updateStats(currentLines.length, timer);
      cycleNextLines();
      setCurrentLineIndex(0);
      setGameStarted(false);
    }
    setUserInput("");
  }

  return (
    <div className="typingGame">
      <div style={{ height: "400px", overflow: "auto" }}>
        <TextDisplay lines={currentLines} lineIndex={currentLineIndex} />
      </div>
      <TextInput
        value={userInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onKeyPress={handleKeyPress}
        expectedText={currentLines[currentLineIndex]}
      />
    </div>
  );
}

export default TypingGame;
