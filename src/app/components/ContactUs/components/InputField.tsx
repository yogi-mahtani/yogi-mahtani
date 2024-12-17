import styled from 'styled-components';
import { InputFieldProps } from '../types';

export const InputField = ({
  label,
  type = 'text',
  placeholder,
}: InputFieldProps) => (
  <InputWrapper>
    <Label htmlFor={label}>{label}</Label>
    <Input
      type={type}
      id={label}
      placeholder={placeholder}
      aria-label={label}
    />
  </InputWrapper>
);

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
`;

const Input = styled.input`
  background-color: #fff;
  min-height: 48px;
  padding: 12px;
  border: 1px solid #000;
  width: 100%;
`;
