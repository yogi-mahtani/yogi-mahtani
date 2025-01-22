'use client';
import { useEffect, useState, useRef } from 'react';
import ValueIndicator from './ValueIndicator';

import { useCountUp } from '@/app/hooks';
import { KPICard, CardValue } from './styled';

const KPICardSection = ({
  title,
  value,
  description,
  type,
}: {
  title: string;
  value: number;
  description: string;
  type: string;
}) => {
  const [hasStartedCounting, setHasStartedCounting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const countedValue = useCountUp(hasStartedCounting ? value : 1, 50000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStartedCounting(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <KPICard ref={ref}>
      <h6>{title}</h6>
      <CardValue>
        {type === 'greater-than' ? (
          <>
            <ValueIndicator type={type} />
            {countedValue}
          </>
        ) : (
          <>
            {countedValue}
            <ValueIndicator type={type} />
          </>
        )}
      </CardValue>
      <p>{description}</p>
    </KPICard>
  );
};

export default KPICardSection;
