import React, { useEffect, useRef, useState } from 'react';
import BrandMark from './BrandMark.jsx';
import { Arrow } from './Icons.jsx';
import { site } from '../data/site.js';

export default function Header({ active }) {
  const [open, setOpen] = useState(false);
  const header = useRef(null);
  const toggle = useRef(null);
  useEffect(() => {
    const media = matchMedia('(max-width: 760px)');
    const close = () => setOpen(false);
    const outside = event => { if (!header.current?.contains(event.target)) close(); };
    const key = event => {
      if (event.key === 'Escape' && open) { close(); toggle.current?.focus(); }
    };
    media.addEventListener('change', close);
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', key);
    return () => {
      media.removeEventListener('change', close);
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', key);
    };
  }, [open]);
  return <header ref={header} className={`header${open ? ' is-open' : ''}`}>
    <a className="brand" href="#marca" aria-label={`${site.studio} — início`} onClick={() => setOpen(false)}>
      <BrandMark/><span>IT<span className="brand-light">CREATIVE</span><small>BY ISAQUE TACCHI</small></span>
    </a>
    <nav id="main-menu" aria-label="Navegação principal">
      {site.navigation.map(item => <a key={item.id} className={active === item.id ? 'is-active' : ''} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} onClick={() => setOpen(false)}><span className="nav-number">{item.number}</span>{item.label}</a>)}
    </nav>
    <a className="header-cta" href={site.instagram.url} target="_blank" rel="noopener noreferrer">Vamos conversar <Arrow/></a>
    <button ref={toggle} className="menu-toggle" type="button" aria-controls="main-menu" aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(value => !value)}><span/><span/></button>
  </header>;
}
