import React, { useState } from "react";
import TextDisplay from "./TextDisplay";

function TypingGame() {
  const [currentLines, setCurrentLines] = useState(getCodeLines());
  const [nextLines, setNextLines] = useState(getCodeLines());
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [userInput, setUserInput] = useState("");

  function getCodeLines() {
    // TODO: remove hardcoded lines
    const lines =
      "let x = 5;\nconsole.log(x);\nlet y = 10;\nconsole.log(y);\nlet z = x + y;\nconsole.log(z);";
    return lines.split("\n");
  }

  function handleInputChange(event) {
    setUserInput(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter" && userInput === currentLines[currentLineIndex]) {
      completeLine();
    }
  }

  function completeLine() {
    if (currentLineIndex < currentLines.length - 1) {
      setCurrentLineIndex(currentLineIndex + 1);
    } else {
      setCurrentLines(nextLines);
      setNextLines(getCodeLines());
      setCurrentLineIndex(0);
    }
    setUserInput("");
  }

  function getCursorPosition() {
    const currentLine = currentLines[currentLineIndex];
    let cursorPosition = 0;
    while (cursorPosition < userInput.length && userInput[cursorPosition] === currentLine[cursorPosition]) {
      cursorPosition++;
    }
    return cursorPosition;
  }

  return (
    <div>
      <TextDisplay
        lines={currentLines}
        lineIndex={currentLineIndex}
        cursorPosition={getCursorPosition()}
      />
      <input
        value={userInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default TypingGame;
