import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

function TextDisplay({ lines, lineIndex }) {
  const codeString = lines
    .map((line, index) => index < lineIndex ? '// ' + line : line )
    .join("\n");

  return (
    <div style={{ fontFamily: "monospace" }}>
      <SyntaxHighlighter
        language="javascript"
        style={oneLight}
        showLineNumbers={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default TextDisplay;
