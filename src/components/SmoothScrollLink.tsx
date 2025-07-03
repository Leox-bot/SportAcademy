import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SmoothScrollLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function SmoothScrollLink({ to, children, className }: SmoothScrollLinkProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Extract the hash from the 'to' prop
    const [path, hash] = to.split('#');
    
    // If we're navigating to the same page (home), just scroll
    if (path === '/' && window.location.pathname === '/') {
      scrollToSection(hash);
    } else {
      // Navigate to the page first, then scroll
      navigate(path);
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate the position to scroll to (accounting for fixed header)
      const headerHeight = 64; // Height of the fixed navigation
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      // Smooth scroll with custom animation
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // For browsers that don't support smooth behavior, use a custom animation
      if (!CSS.supports('scroll-behavior', 'smooth')) {
        smoothScrollTo(offsetPosition, 500);
      }
    }
  };

  const smoothScrollTo = (targetPosition: number, duration: number) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // Easing function for smooth animation
    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}