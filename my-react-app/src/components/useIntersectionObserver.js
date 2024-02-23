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
            entry.target.style.opacity = "1"; // Set opacity to 1 when in viewport
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current); // Clear any existing timeout
            }
          } else {
            // Set opacity to 0 when outside viewport
            entry.target.style.opacity = "0";
            // Delay resetting opacity back to 1
            timeoutRef.current = setTimeout(() => {
              setIsVisible(false);
              entry.target.style.opacity = "1";
            }, delay);
        }});
      },
      { threshold: 0.0 }
    );

    const throttledObserverCallback = throttle(() => {
      observerRef.current.disconnect(); // Disconnect the previous observer to avoid multiple triggers
      observerRef.current.observe(ref.current);
    }, delay);

    throttledObserverCallback(); // Initial call to set up the observer

    return () => {
      observerRef.current.disconnect(); // Clean up on unmount
    };
  }, [ref, delay]);

  return isVisible;
}

function throttle(callback, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    callback(...args);
  };
}
