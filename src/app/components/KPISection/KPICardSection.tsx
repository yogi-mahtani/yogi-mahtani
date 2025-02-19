'use client';
import { useEffect, useState, useRef } from 'react';
import ValueIndicator from './ValueIndicator';
import { Grid } from './constants';

import { useCountUp } from '@/app/hooks';
import { KPICard, CardValue } from './styled';

const KPICardSection = ({ title, value, description, type }: Grid) => {
  const [hasStartedCounting, setHasStartedCounting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const tempValue = hasStartedCounting ? value : 1;
  const countedValue = useCountUp(tempValue ?? 1, 70000);

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
    <KPICard value={value} ref={ref}>
      <h6>{title}</h6>
      {value && (
        <CardValue>
          {type === 'greater-than' ? (
            <>
              <ValueIndicator $type={type} />
              {countedValue}
            </>
          ) : (
            <>
              {countedValue}
              <ValueIndicator $type={type} />
            </>
          )}
        </CardValue>
      )}
      <p>{description}</p>
    </KPICard>
  );
};

export default KPICardSection;
