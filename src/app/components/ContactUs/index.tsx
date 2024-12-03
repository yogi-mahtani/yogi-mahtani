'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { FormField } from './components/FormField';
import { InputField } from './components/InputField';

export const TalentFinderForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const formFields = [
    {
      label: 'How many people are you looking to hire?',
      value: 'Single Hire',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/87950a9fde00863eb7ee89ab9986f71980c5f628dbd06e23029107555b815be7?placeholderIfAbsent=true&apiKey=b5281f63547d473f986bbfa9529ea7d1',
    },
    {
      label: 'Function to hire',
      value: 'Regional Product Director',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/87950a9fde00863eb7ee89ab9986f71980c5f628dbd06e23029107555b815be7?placeholderIfAbsent=true&apiKey=b5281f63547d473f986bbfa9529ea7d1',
    },
    {
      label: 'Industry & Sector',
      value: 'Martech, SaaS',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/87950a9fde00863eb7ee89ab9986f71980c5f628dbd06e23029107555b815be7?placeholderIfAbsent=true&apiKey=b5281f63547d473f986bbfa9529ea7d1',
    },
    {
      label: 'Coverage',
      value: 'Regional - APAC',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/87950a9fde00863eb7ee89ab9986f71980c5f628dbd06e23029107555b815be7?placeholderIfAbsent=true&apiKey=b5281f63547d473f986bbfa9529ea7d1',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
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
                icon={field.icon}
              />
            ))}
          </FormSection>

          <ContactSection>
            <InputField label="Full Name" />
            <InputField label="Title" />
            <InputField label="Company Email" type="email" />

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

            <FileAttachmentLabel>
              <FileInput
                type="file"
                onChange={handleFileSelect}
                aria-label="Attach file"
              />
              <AttachIcon
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aea5d28bcadc0f98dec1519eda7fe05f9741c9eb2b89cfbef585004c9c780731?placeholderIfAbsent=true&apiKey=b5281f63547d473f986bbfa9529ea7d1"
                alt=""
              />
              <span>Attach file/Link</span>
            </FileAttachmentLabel>

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
  min-height: 1497px;
  overflow: hidden;
  align-items: start;
  font-family: Roboto, sans-serif;
  padding: 112px 64px;
  background: var(--text-orange-and-pink-gradient);

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
  margin-top: 48px;
  width: 560px;
  max-width: 100%;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ContactSection = styled.section`
  margin-top: 48px;
  width: 560px;
  max-width: 100%;
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
  min-height: 252px;
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

const FileAttachmentLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 48px;
  padding: 12px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const FileInput = styled.input`
  display: none;
`;

const AttachIcon = styled.img`
  width: 24px;
  aspect-ratio: 1;
  object-fit: contain;
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
