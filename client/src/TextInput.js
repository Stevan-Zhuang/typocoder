import React from 'react';

function TextInput({ value, onChange, onKeyPress, expectedText }) {
  const style = {
    color: expectedText.startsWith(value) ? 'black' : 'red'
  };

  return (
    <input
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={expectedText}
      style={style}
    />
  );
}

export default TextInput;
