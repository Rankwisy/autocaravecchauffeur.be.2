import { useEffect } from 'react';

export default function ScrollToTopAstro() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return null;
}
