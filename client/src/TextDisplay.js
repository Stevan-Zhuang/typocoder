import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

function TextDisplay({ lines }) {
  const codeString = lines.join("\n");
  return (
    <div style={{ fontFamily: "monospace" }}>
      <SyntaxHighlighter
        language="javascript"
        style={solarizedlight}
        showLineNumbers={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default TextDisplay;
