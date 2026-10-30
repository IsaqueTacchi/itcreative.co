import { useEffect } from 'react';

export default function useStudioMotion() {
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let cleanup = () => {};
    const setup = () => {
      cleanup();
      if (preference.matches || !('IntersectionObserver' in window)) return;
      const items = [...document.querySelectorAll('[data-reveal]')];
      const sections = [...document.querySelectorAll('main > section')];
      const visible = new Set();
      let scrollFrame, pointerFrame;
      const reveal = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          reveal.unobserve(entry.target);
        });
      }, { threshold: .08 });
      items.forEach(item => { item.classList.add('will-reveal'); reveal.observe(item); });
      const updateScroll = () => {
        scrollFrame = undefined;
        const measurements = [...visible].map(section => {
          const rect = section.getBoundingClientRect();
          return [section, Math.max(-32,Math.min(32,-rect.top * .07))];
        });
        measurements.forEach(([section, shift]) => section.style.setProperty('--scene-shift', `${shift.toFixed(1)}px`));
      };
      const requestScroll = () => { if (scrollFrame === undefined) scrollFrame = requestAnimationFrame(updateScroll); };
      const visibility = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('is-in-view',entry.isIntersecting);
          if (entry.isIntersecting) visible.add(entry.target); else visible.delete(entry.target);
        });
        requestScroll();
      });
      sections.forEach(section => { section.classList.add('motion-enabled'); visibility.observe(section); });
      const hero = document.querySelector('.hero');
      const move = event => {
        if (event.pointerType !== 'mouse') return;
        cancelAnimationFrame(pointerFrame);
        pointerFrame = requestAnimationFrame(() => {
          const rect = hero.getBoundingClientRect();
          const x = Math.max(0,Math.min(1,(event.clientX - rect.left) / rect.width));
          const y = Math.max(0,Math.min(1,(event.clientY - rect.top) / rect.height));
          hero.style.setProperty('--light-x',`${x * 100}%`);
          hero.style.setProperty('--light-y',`${y * 100}%`);
          hero.style.setProperty('--camera-x',`${((x - .5) * -10).toFixed(1)}px`);
        });
      };
      const resetPointer = () => {
        cancelAnimationFrame(pointerFrame);
        ['--light-x','--light-y','--camera-x'].forEach(key => hero?.style.removeProperty(key));
      };
      hero?.addEventListener('pointermove',move);
      hero?.addEventListener('pointerleave',resetPointer);
      addEventListener('scroll',requestScroll,{passive:true});
      addEventListener('resize',requestScroll);
      cleanup = () => {
        reveal.disconnect(); visibility.disconnect();
        cancelAnimationFrame(scrollFrame); resetPointer();
        items.forEach(item => item.classList.remove('will-reveal','is-visible'));
        sections.forEach(section => { section.classList.remove('motion-enabled','is-in-view'); section.style.removeProperty('--scene-shift'); });
        hero?.removeEventListener('pointermove',move); hero?.removeEventListener('pointerleave',resetPointer);
        removeEventListener('scroll',requestScroll); removeEventListener('resize',requestScroll);
      };
    };
    setup(); preference.addEventListener('change',setup);
    return () => { cleanup(); preference.removeEventListener('change',setup); };
  }, []);
}
