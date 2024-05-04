import React, { useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  solarizedlight,
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { SettingsContext } from "../contexts/SettingsContext";
import "../styles/TextDisplay.css";

const themeMap = {
  oneLight: oneLight,
  oneDark: oneDark,
  solarizedLight: solarizedlight,
  dracula: dracula,
};

function TextDisplay({ lines, lineIndex }) {
  const settings = useContext(SettingsContext);
  const theme = themeMap[settings.theme] || themeMap.light;

  const lineProps = (lineNumber) => {
    let style = { display: "block" };
    if (lineNumber === lineIndex + 1) {
      style.backgroundColor = "var(--currentLine)";
    }
    return { style };
  };

  const codeString = lines.join("\n");

  return (
    <div className="syntaxHighlighterContainer">
      <SyntaxHighlighter
        language="javascript"
        style={theme}
        customStyle={{ width: "100%" }}
        showLineNumbers={true}
        wrapLines
        lineProps={lineProps}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default TextDisplay;
