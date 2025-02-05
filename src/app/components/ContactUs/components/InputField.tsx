import { useState } from 'react';
import styled from 'styled-components';
import { InputFieldProps } from '../types';

export const InputField = ({
  label,
  type = 'text',
  placeholder,
  required = false,
}: InputFieldProps) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  // Function to validate input based on type
  const getErrorMessage = () => {
    if (!touched) return ''; // No error before touch

    if (required && !value.trim()) {
      return 'This field is required';
    }

    if (type === 'email' && value && !/^\S+@\S+\.\S+$/.test(value)) {
      return 'Enter a valid email address';
    }

    return ''; // No error
  };

  const errorMessage = getErrorMessage();
  const isError = !!errorMessage; // Convert to boolean

  return (
    <InputWrapper>
      <Label htmlFor={label}>
        {label} {required && <RequiredMark>*</RequiredMark>}
      </Label>
      <Input
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setTouched(true)}
        aria-label={label}
        aria-invalid={isError}
      />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWrapper>
  );
};

// Styled Components
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const RequiredMark = styled.span`
  color: red;
  font-size: 16px;
  margin-left: 4px;
`;

const Input = styled.input`
  background-color: #fff;
  min-height: 48px;
  padding: 12px;
  border: 1px solid #000;
  width: 100%;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: blue;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;
