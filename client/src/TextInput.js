import React from 'react';
import './TextInput.css';

function TextInput({ value, onChange, onKeyPress, expectedText }) {
  const style = {
    color: expectedText.startsWith(value) ? 'black' : 'red'
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
