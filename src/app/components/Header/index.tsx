'use client';

import React from 'react';

// Components
import Button from '../../ui-kit/Button';
import Input from '../../ui-kit/Input';

// Styles
import { HeaderContainer, ButtonsDemo, InputDemo } from './styles';

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

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M10 18.0691C11.775 18.0687 13.4988 17.4745 14.897 16.3811L19.293 20.7771L20.707 19.3631L16.311 14.9671C17.405 13.5688 17.9996 11.8445 18 10.0691C18 5.65809 14.411 2.06909 10 2.06909C5.589 2.06909 2 5.65809 2 10.0691C2 14.4801 5.589 18.0691 10 18.0691ZM10 4.06909C13.309 4.06909 16 6.76009 16 10.0691C16 13.3781 13.309 16.0691 10 16.0691C6.691 16.0691 4 13.3781 4 10.0691C4 6.76009 6.691 4.06909 10 4.06909Z"
      fill="black"
    />
  </svg>
);

const CreditCard = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M20 4.06909H4C2.897 4.06909 2 4.96609 2 6.06909V18.0691C2 19.1721 2.897 20.0691 4 20.0691H20C21.103 20.0691 22 19.1721 22 18.0691V6.06909C22 4.96609 21.103 4.06909 20 4.06909ZM4 6.06909H20V8.06909H4V6.06909ZM4 18.0691V12.0691H20.001L20.002 18.0691H4Z"
      fill="black"
    />
    <path d="M6 14.0691H12V16.0691H6V14.0691Z" fill="black" />
  </svg>
);

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ButtonsDemo>
        <Button variant="filled" size="medium">
          Find Talent
        </Button>
        <Button
          bordercolor="#FF2F4F"
          color="#FF2F4F"
          variant="outlined"
          size="medium"
        >
          Button
        </Button>

        {/* Button with Icon on the left */}
        {/* <Button
        showIcon={true}
        variant="filled"
        size="medium"
        iconPosition="left"
      >
        Button
      </Button> */}

        {/* Button with Icon on the right */}
        <Button
          showIcon={true}
          variant="outlined"
          size="large"
          iconPosition="right"
        >
          Button
        </Button>

        {/* Icon Only */}
        {/* <Button showIcon={true} variant="filled" size="small" /> */}
        <Button showIcon={true} variant="outlined" size="medium" />
      </ButtonsDemo>
      <InputDemo>
        <Input placeholder="Placeholder" />
        <Input placeholder="Placeholder" showHelp={true} />
        <Input
          placeholder="Placeholder"
          icon={<CreditCard />}
          showHelp={true}
        />
        <Input placeholder="Search" icon={<SearchIcon />} />
      </InputDemo>
    </HeaderContainer>
  );
};

export default Header;
