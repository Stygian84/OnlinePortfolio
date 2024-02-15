import { useState, useEffect, useRef } from 'react';

function useInViewport() {
  const ref = useRef(null);
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const { top, bottom } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (top >= 0 && bottom <= windowHeight) {
        setInViewport(true);
      } else {
        setInViewport(false);
      }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return [ref, inViewport];
}

export default useInViewport;
