import React, { useEffect, useRef, useState } from 'react';

// Recebe o texto de site.js e preserva seu prefixo, sufixo e valor final.
export default function AnimatedCounter({ value, duration = 1800 }) {
  const element = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = String(value).match(/^(\D*)(\d+)(\D*)$/);
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let frame;
    let observer;
    let started = false;
    setDisplay(value);
    if (!match || !('IntersectionObserver' in window)) return;

    const [, prefix, digits, suffix] = match;
    const target = Number(digits);
    const finish = () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      setDisplay(value);
    };
    const preferenceChanged = () => { if (media.matches) finish(); };

    if (!media.matches) {
      setDisplay(`${prefix}0${suffix}`);
      observer = new IntersectionObserver(entries => {
        if (started || !entries.some(entry => entry.isIntersecting)) return;
        started = true;
        observer.disconnect();
        let start;
        const tick = time => {
          start ??= time;
          const progress = Math.min(1, (time - start) / Math.max(1, duration));
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(progress === 1 ? value : `${prefix}${Math.floor(target * eased)}${suffix}`);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      }, { threshold: .5 });
      observer.observe(element.current);
    }
    media.addEventListener('change', preferenceChanged);
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      media.removeEventListener('change', preferenceChanged);
    };
  }, [value, duration]);

  return <strong ref={element} className="animated-counter" aria-label={String(value)}><span aria-hidden="true">{display}</span></strong>;
}
