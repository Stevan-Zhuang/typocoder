import React, { useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  solarizedlight,
  oneLight,
  oneDark,
  nord,
  vscDarkPlus,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { SettingsContext } from "../contexts/SettingsContext";
import "../styles/TextDisplay.css";

const themeMap = {
  oneLight,
  oneDark,
  solarizedlight,
  dracula,
  nord,
  vscDarkPlus,
  atomDark,
};

function TextDisplay({ lines, lineIndex }) {
  const settings = useContext(SettingsContext);
  const theme = themeMap[settings.theme];

  const lineProps = (lineNumber) => {
    let style = { display: "block" };
    if (lineNumber === lineIndex + 1) {
      style.backgroundColor = "var(--currentLine)";
    }
    return { style };
  };

  const codeString = lines.slice(lineIndex).join("\n");

  return (
    <div className="syntaxHighlighterContainer">
      <SyntaxHighlighter
        language={settings.language}
        style={theme}
        customStyle={{ width: "100%" }}
        showLineNumbers={true}
        startingLineNumber={lineIndex + 1}
        wrapLines
        lineProps={lineProps}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default TextDisplay;
