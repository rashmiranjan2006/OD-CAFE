import { useEffect, useRef, useState, useCallback } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const el = ref.current;
    if (el) {
      const children = el.querySelectorAll('.reveal');
      children.forEach((child) => observer.observe(child));
      if (el.classList.contains('reveal')) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
}

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('od-theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggle = useCallback(() => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('od-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('od-theme', 'light');
    }
  }, [isDark]);

  return { isDark, toggle };
}
