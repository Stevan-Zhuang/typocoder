import React, { useState } from "react";
import TextDisplay from "./TextDisplay";
import TextInput from "./TextInput";
import "../styles/TypingGame.css"

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

  return (
    <div className="typingGame">
      <div style={{ height: "400px", overflow: "auto" }}>
        <TextDisplay lines={currentLines} lineIndex={currentLineIndex} />
      </div>
      <TextInput
        value={userInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        expectedText={currentLines[currentLineIndex]}
      />
    </div>
  );
}

export default TypingGame;
