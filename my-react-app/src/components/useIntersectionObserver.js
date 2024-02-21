import { useState, useEffect, useRef } from 'react';

export function useIntersectionObserver(ref, slideDuration) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setTimeout(() => {
              setIsVisible(false);
            }, slideDuration);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, slideDuration]);

  return isVisible;
}
