import { useState, useEffect, useRef } from "react";

export function useIntersectionObserver(ref, delay) {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.style.opacity = "1"; 
            clearTimeout(timeoutRef.current); 
          } else {
            entry.target.style.opacity = "0";
            timeoutRef.current = setTimeout(() => {
              setIsVisible(false);
              entry.target.style.opacity = "1";
            }, delay);
          }
        });
      },
      { threshold: 0.0 }
    );

    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect(); 
    };
  }, [ref, delay]);

  return isVisible;
}
