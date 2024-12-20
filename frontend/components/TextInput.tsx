import React from 'react';

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default TextInput;