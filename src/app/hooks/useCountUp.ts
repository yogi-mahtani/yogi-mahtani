'use client';
import { useEffect, useState } from 'react';

const useCountUp = (targetValue: number, duration: number) => {
  const [currentValue, setCurrentValue] = useState(1);

  useEffect(() => {
    if (targetValue <= 1) {
      setCurrentValue(targetValue);
      return;
    }

    const increment = Math.ceil(targetValue / (duration / 1000));
    let value = 1;

    const interval = setInterval(() => {
      value += increment;
      if (value >= targetValue) {
        value = targetValue;
        clearInterval(interval);
      }
      setCurrentValue(value);
    }, 10); // Runs every 10ms for smooth animation

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [targetValue, duration]);

  return currentValue;
};

export default useCountUp;
