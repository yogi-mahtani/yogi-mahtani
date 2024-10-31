'use client';

import React from 'react';
import styled from 'styled-components';

// Container for each input field
const InputContainer = styled.div<{ hasIcon: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid #000;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  margin-bottom: 8px;
  box-sizing: border-box;

  ${(props) =>
    props.hasIcon &&
    `
    padding-left: 4px;
  `}
`;

// Input field with placeholder
const StyledInput = styled.input`
  border: none;
  flex-grow: 1;
  font-size: inherit;
  outline: none;
  padding-left: 8px;
`;

// Optional label or prefix text (like "USD" or "http://")
const Label = styled.span`
  margin-right: 8px;
  font-size: inherit;
`;

// Icon container for icons like question mark, search, or credit card
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const HelpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M12 6.06909C10.957 6.07042 9.95716 6.48531 9.21968 7.2228C8.4822 7.96028 8.0673 8.96014 8.06598 10.0031H10.066C10.066 8.93609 10.934 8.06909 12 8.06909C13.066 8.06909 13.934 8.93609 13.934 10.0031C13.934 10.6011 13.453 11.0351 12.718 11.6291C12.4779 11.8172 12.2472 12.0171 12.027 12.2281C11.029 13.2251 11 14.2841 11 14.4021V15.0691H13L12.999 14.4361C13 14.4201 13.032 14.0501 13.44 13.6431C13.59 13.4931 13.779 13.3431 13.975 13.1851C14.754 12.5541 15.933 11.6011 15.933 10.0031C15.9322 8.96015 15.5176 7.96013 14.7802 7.22256C14.0428 6.485 13.0429 6.07015 12 6.06909ZM11 16.0691H13V18.0691H11V16.0691Z"
      fill="black"
    />
    <path
      d="M12 2.06909C6.486 2.06909 2 6.55509 2 12.0691C2 17.5831 6.486 22.0691 12 22.0691C17.514 22.0691 22 17.5831 22 12.0691C22 6.55509 17.514 2.06909 12 2.06909ZM12 20.0691C7.589 20.0691 4 16.4801 4 12.0691C4 7.65809 7.589 4.06909 12 4.06909C16.411 4.06909 20 7.65809 20 12.0691C20 16.4801 16.411 20.0691 12 20.0691Z"
      fill="black"
    />
  </svg>
);

type InputComponentProps = {
  icon?: React.ReactNode;
  label?: string;
  showHelp?: boolean;
  placeholder?: string;
  type?: string;
  defaultValue?: string;
};

const InputComponent: React.FC<InputComponentProps> = ({
  icon,
  label,
  showHelp,
  placeholder,
  type = 'text',
  defaultValue,
}) => {
  return (
    <InputContainer hasIcon={!!icon}>
      {label && <Label>{label}</Label>}
      {icon && <IconContainer>{icon}</IconContainer>}
      <StyledInput
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {showHelp && <IconContainer>{<HelpIcon />}</IconContainer>}
    </InputContainer>
  );
};

export default InputComponent;
