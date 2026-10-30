import { useEffect } from 'react';

// Efeitos independentes do conteúdo. Desativados quando o usuário reduz movimentos.
export default function useStudioMotion() {
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let cleanup = () => {};
    const setup = () => {
      cleanup();
      if (media.matches || !('IntersectionObserver' in window)) return;
      const items = [...document.querySelectorAll('[data-reveal]')];
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      }, { threshold: .12 });
      items.forEach(item => { item.classList.add('will-reveal'); observer.observe(item); });
      const sections = [...document.querySelectorAll('main > section')];
      const visibility = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.target.classList.toggle('is-in-view', entry.isIntersecting));
      }, { rootMargin: '100px 0px' });
      sections.forEach(section => { section.classList.add('motion-enabled'); visibility.observe(section); });
      const stage = document.querySelector('.brand-stage');
      let frame;
      const move = event => {
        if (event.pointerType !== 'mouse') return;
        const rect = stage.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          stage.style.setProperty('--pointer-x', `${x * 100}%`);
          stage.style.setProperty('--pointer-y', `${y * 100}%`);
          stage.style.setProperty('--tilt-x', `${(y - .5) * -8}deg`);
          stage.style.setProperty('--tilt-y', `${(x - .5) * 8}deg`);
        });
      };
      const reset = () => {
        cancelAnimationFrame(frame);
        ['--pointer-x', '--pointer-y', '--tilt-x', '--tilt-y'].forEach(key => stage.style.removeProperty(key));
      };
      stage?.addEventListener('pointermove', move);
      stage?.addEventListener('pointerleave', reset);
      cleanup = () => {
        observer.disconnect();
        visibility.disconnect();
        sections.forEach(section => section.classList.remove('motion-enabled', 'is-in-view'));
        items.forEach(item => item.classList.remove('will-reveal', 'is-visible'));
        stage?.removeEventListener('pointermove', move);
        stage?.removeEventListener('pointerleave', reset);
        if (stage) reset();
      };
    };
    setup();
    media.addEventListener('change', setup);
    return () => { cleanup(); media.removeEventListener('change', setup); };
  }, []);
}
