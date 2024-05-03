import React from 'react';
import '../styles/TextInput.css';

function TextInput({ value, onChange, onKeyPress, expectedText }) {
  const style = {
    color: expectedText.startsWith(value) ? 'var(--foreground)' : 'var(--red)'
  };

  return (
    <input
      className="textInput"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={expectedText}
      style={style}
    />
  );
}

export default TextInput;
