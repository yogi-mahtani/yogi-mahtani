'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/navigation';

// constants
import { jobTitles, JobType, locations, SocialIcon } from './constants';
import NavLink from '@/app/ui-kit/NavLink';
import SvgImage from '../SvgImage';
import Button from '@/app/ui-kit/Button';
import { roles, sectors } from '../ContactUs/constants';
import { FormField } from '../ContactUs/components/FormField';

export default function GoFractional() {
  const router = useRouter();

  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('');
  const [jobFunction, setJobFunction] = useState('');

  const handleClick = () => {
    router.push('/contact-us'); // Navigate to /contact-us
  };

  const formFields = [
    {
      value: location,
      options: locations,
      onChange: (value: string) => setLocation(value),
      placeholder: 'Search Tags',
      btnStyles: `
        width: 400px;
      `,
    },
    {
      value: location,
      options: locations,
      onChange: (value: string) => setLocation(value),
      placeholder: 'Location',
      btnStyles: `
        width: 160px;
      `,
    },
    {
      value: industry,
      options: roles,
      onChange: (value: string) => setIndustry(value),
      placeholder: 'Industry',
      btnStyles: `
        width: 160px;
      `,
    },
    {
      value: jobFunction,
      options: sectors,
      onChange: (value: string) => setJobFunction(value),
      placeholder: 'Function',
      btnStyles: `
        width: 160px;
      `,
    },
  ];

  return (
    <Container>
      <FractionalSection>
        <LeftSection>
          <h1>Go Fractional!</h1>
          <Button
            size="large"
            variant="filled"
            btnStyles={css`
              margin-top: 8px;
            `}
            onClick={handleClick}
            color="var(--color-brand-white)"
            backgroundcolor="var(--color-brand-black)"
          >
            Candidate Sign Up
          </Button>
        </LeftSection>
        <RightSection>
          Welcome to the Fynder Talent jobs page, where we are committed to
          connecting top talent with leading companies in Asia. Browse through
          our available job listings and take the next step towards your dream
          career.
        </RightSection>
      </FractionalSection>
      <Filters>
        {formFields.map((field, index) => (
          <FormField
            key={index}
            value={field.value}
            btnStyles={field.btnStyles}
            placeholder={field.placeholder}
            options={field.options}
            setSelectedValue={field.onChange}
            icon={true}
          />
        ))}
        <Button
          size="large"
          variant="filled"
          btnStyles={css`
            margin-top: 8px;
          `}
          color="var(--color-brand-white)"
          onClick={handleClick}
          backgroundcolor="var(--color-brand-black)"
        >
          Search
        </Button>
      </Filters>
      <JobTitles>
        {jobTitles.map((item: JobType, index: number) => {
          return <JobTitle key={index} item={item} />;
        })}
      </JobTitles>
      <Button
        size="extra-large"
        variant="filled"
        btnStyles={css`
          padding: 10px 48px;
          margin-top: 32px;
        `}
        onClick={handleClick}
        color="var(--color-brand-white)"
        backgroundcolor="var(--color-brand-black)"
      >
        More
      </Button>
    </Container>
  );
}

interface JobTitleProps {
  item: JobType;
}

const JobTitle: React.FC<JobTitleProps> = ({ item }) => {
  const { title, description, company, tags, socialIcons } = item;
  return (
    <JobContainer>
      <ImageWrapper>
        <Image
          src="/images/placeholder.png"
          alt="Job Icon"
          layout="fill"
          objectFit="contain"
        />
      </ImageWrapper>
      <Title>{title}</Title>
      <div>
        <CompanyIcon>🇸🇬 SG</CompanyIcon>
        <Company>{company}</Company>
      </div>
      <Tags>
        {tags.map((tag: string) => (
          <TagItem key={tag}>{tag}</TagItem>
        ))}
      </Tags>
      <Description>{description}</Description>
      <SocialIcons>
        {socialIcons.map((icon: SocialIcon, index: number) => {
          const { path, url } = icon;
          return (
            <NavLink key={path} url={url}>
              <SvgImage path={path} />
            </NavLink>
          );
        })}
      </SocialIcons>
    </JobContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  align-items: center;
  font-family: Roboto, sans-serif;
  padding: 48px 96px;
  form {
    width: 100%;
  }

  @media (max-width: 991px) {
    padding: 100px 20px;
  }
`;

const FractionalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 112px 40px;
  gap: 80px;
`;

const Filters = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
  align-self: flex-start;
  padding: 0 40px;
`;

const JobTitles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
  padding: 56px 0;
`;

const LeftSection = styled.div`
  h1 {
    font-weight: 700;
  }
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  flex: 1;
`;

const RightSection = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  flex: 1;
`;

const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  gap: 16px;
`;

const ImageWrapper = styled.div`
  width: 395px;
  position: relative;
  margin-bottom: 10px;
  height: 395px;
  align-self: stretch;
`;

const CompanyIcon = styled.p`
  text-align: center;
`;

const Title = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin-top: 24px;
`;

const Description = styled.p`
  font-size: 14px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const Company = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const Tags = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const TagItem = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  display: flex;
  padding: 4px 8px;
  align-items: flex-start;
  gap: 10px;
  background: #4e34f3;
  color: #fff;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;
