import React from 'react';

function TextInput({ value, onChange, onKeyPress }) {
  return (
    <input
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
}

export default TextInput;
