'use client';

import React from 'react';
import styled, { css, CSSProp } from 'styled-components';

const CubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
      fill="black"
    />
  </svg>
);

type ButtonProps = {
  variant: 'outlined' | 'filled';
  size?: 'small' | 'medium' | 'large';
  showIcon?: boolean;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  bordercolor?: string;
  color?: string;
  backgroundcolor?: string;
  children?: React.ReactNode;
  btnStyles?: CSSProp;
};

const buttonVariants = css<ButtonProps>`
  ${({ variant, bordercolor, color, backgroundcolor, btnStyles }) =>
    variant === 'outlined'
      ? css`
          color: ${color};
          border: 1px solid ${bordercolor || '#000'};
          background-color: transparent;
          transition: all 0.3s ease;
          &:hover {
            background-color: ${bordercolor || '#000'};
            color: #fff;
            transform: scale(1.05); // Slight scale-up effect on hover
          }
          &:active {
            transform: scale(0.98); // Slight scale-down effect on click
          }
        `
      : css`
          color: #fff;
          background-color: #000;
          border: 1px solid #000;
          transition: all 0.3s ease;
          &:hover {
            background-color: ${color};
            color:${backgroundcolor}
            transform: scale(1.05); // Slight scale-up effect on hover
          }
          &:active {
            transform: scale(0.98); // Slight scale-down effect on click
          }
        `}
  ${({ btnStyles }) => (btnStyles ? btnStyles : '')};
`;

// Size styles for the button
const buttonSizes = css<ButtonProps>`
  ${({ size }) => {
    switch (size) {
      case 'small':
        return 'padding: 6px 12px; font-size: 14px;';
      case 'medium':
        return 'padding: 8px 20px; font-size: 14px;';
      case 'large':
        return 'padding: 10px 24px; font-size: 16px;';
    }
    return;
  }}
`;

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background-color 0.3s ease,
    color 0.3s ease; // Transition for smooth animations
  ${buttonVariants}
  ${buttonSizes}
`;

const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'medium',
  showIcon,
  iconPosition = 'left',
  onClick,
  bordercolor,
  color,
  backgroundcolor,
  children,
  btnStyles,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      btnStyles={btnStyles}
      bordercolor={bordercolor}
      backgroundcolor={backgroundcolor}
    >
      {showIcon && iconPosition === 'left' && <CubeIcon />}
      {children}
      {showIcon && iconPosition === 'right' && <CubeIcon />}
    </StyledButton>
  );
};

export default Button;
