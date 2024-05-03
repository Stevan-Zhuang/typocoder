import React, { useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  solarizedlight,
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { SettingsContext } from "../contexts/SettingsContext";

const themeMap = {
  light: oneLight,
  dark: oneDark,
  solarizedLight: solarizedlight,
  dracula: dracula,
};

function TextDisplay({ lines, lineIndex }) {
  const settings = useContext(SettingsContext);
  const theme = themeMap[settings.theme] || themeMap.light;

  const codeString = lines
    .map((line, index) => (index < lineIndex ? "// " + line : line))
    .join("\n");

  return (
    <div style={{ fontFamily: "monospace" }}>
      <SyntaxHighlighter
        language="javascript"
        style={theme}
        showLineNumbers={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default TextDisplay;
