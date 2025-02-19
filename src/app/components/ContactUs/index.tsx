'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { FormField } from './components/FormField';
import { InputField } from './components/InputField';
import { desiredHires, roles, sectors } from './constants';

export const TalentFinderForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const [selectedHire, setSelectedHire] = useState('product_management');
  const [selectedRole, setSelectedRole] = useState('single_hire');
  const [selectedSector, setSelectedSector] = useState('fintech');

  const formFields = [
    {
      label: 'How many people are you looking to hire?',
      value: selectedRole,
      options: desiredHires,
      onChange: (value: string) => setSelectedHire(value),
    },
    {
      label: 'Function to hire',
      value: selectedHire,
      options: roles,
      onChange: (value: string) => setSelectedRole(value),
    },
    {
      label: 'Industry & Sector',
      value: selectedSector,
      options: sectors,
      onChange: (value: string) => setSelectedSector(value),
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>Find Talent</Heading>
          <SubText>
            <span>If you're looking for Opportunities click </span>
            <Link href="#" onClick={(e) => e.preventDefault()}>
              here
            </Link>
          </SubText>
        </Header>

        <form onSubmit={handleSubmit}>
          <FormSection>
            {formFields.map((field, index) => (
              <FormField
                key={index}
                label={field.label}
                value={field.value}
                options={field.options}
                setSelectedValue={field.onChange}
                icon={true}
              />
            ))}
          </FormSection>

          <ContactSection>
            <InputField required={true} label="Full Name" />
            <InputField required={true} label="Title" />
            <InputField
              required={true}
              placeholder="xyz@company.com"
              label="Company Email"
              type="email"
            />

            <MessageWrapper>
              <Label htmlFor="message">Message</Label>
              <MessageArea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                aria-label="Message"
              />
            </MessageWrapper>

            <SubmitButton type="submit">Submit</SubmitButton>
          </ContactSection>
        </form>
      </Container>
    </main>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  align-items: start;
  font-family: Roboto, sans-serif;
  padding: 112px 64px;

  form {
    width: 100%;
  }

  @media (max-width: 991px) {
    padding: 100px 20px;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Header = styled.header`
  position: relative;
  width: 768px;
  max-width: 100%;
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  color: #000;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const SubText = styled.p`
  margin-top: 24px;
  font-size: 18px;
`;

const Link = styled.a`
  color: #4e34f3;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #3a26c5;
  }
`;

const FormSection = styled.section`
  margin-top: 32px;
  max-width: 560px;
  width: 100%;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ContactSection = styled.section`
  margin-top: 32px;
  max-width: 560px;
  width: 100%;
`;

const MessageWrapper = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #000;
`;

const MessageArea = styled.textarea`
  width: 100%;
  min-height: 172px;
  padding: 12px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: #fff;
  resize: vertical;
  font-family: inherit;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #4e34f3;
  }
`;

const SubmitButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 12px 24px;
  border: 1px solid #000;
  border-radius: 4px;
  margin-top: 24px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 991px) {
    padding: 12px 20px;
  }
`;
