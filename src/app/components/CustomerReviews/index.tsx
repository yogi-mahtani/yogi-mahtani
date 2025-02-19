'use client';
import Image from 'next/image';
import { useState } from 'react';

// constants
import { reviews } from './constants';

// styles
import {
  ReviewSection,
  Stars,
  ReviewText,
  Reviewer,
  CompanyLogo,
  LeftArrow,
  RightArrow,
  DotsContainer,
  Dot,
  ReivewerDetails,
  ReviewerInfo,
} from './styled';

export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <ReviewSection>
      <LeftArrow onClick={handlePrev}>
        <Image
          src={'/icons/arrow-left.svg'}
          alt={`Arrow Left`}
          width={20}
          height={20}
          unoptimized
        />
      </LeftArrow>

      <Stars>
        {[...Array(reviews[currentIndex].stars)].map((_, index) => {
          return (
            <Image
              key={index}
              src={'/icons/star.svg'}
              alt={`Arrow Right`}
              width={18}
              height={18}
            />
          );
        })}
      </Stars>
      <ReviewText>"{reviews[currentIndex].review}"</ReviewText>
      <Reviewer>
        <ReivewerDetails>
          <Image
            src={'/images/avatar.svg'}
            alt={`Avatar`}
            width={56}
            height={56}
          />
          <ReviewerInfo>
            <h6>{reviews[currentIndex].name}</h6>
            <p>{reviews[currentIndex].title}</p>
          </ReviewerInfo>
        </ReivewerDetails>
        <CompanyLogo
          src={reviews[currentIndex].companyLogo}
          alt={reviews[currentIndex].name}
          width={132}
          height={132}
        />
      </Reviewer>

      <RightArrow onClick={handleNext}>
        {' '}
        <Image
          src={'/icons/arrow-right.svg'}
          alt={`Arrow Right`}
          width={20}
          height={20}
          unoptimized
        />
      </RightArrow>

      <DotsContainer>
        {reviews.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotsContainer>
    </ReviewSection>
  );
}
