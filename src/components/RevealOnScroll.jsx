import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function RevealOnScroll({ children, className = '' }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

RevealOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default RevealOnScroll;
