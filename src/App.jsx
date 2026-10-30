import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import AnimatedCounter from './components/AnimatedCounter.jsx';
import LoadingSkeleton from './components/LoadingSkeleton.jsx';
import ProgressiveImage from './components/ProgressiveImage.jsx';
import useInitialLoading from './hooks/useInitialLoading.js';
import BrandMark from './components/BrandMark.jsx';
import { Arrow, InstagramIcon } from './components/Icons.jsx';
import { site } from './data/site.js';
import useStudioMotion from './hooks/useStudioMotion.js';
import './styles.css';
import './visual.css';
import './viewport.css';

function SocialLink() {
  return <a className="social-link" href={site.instagram.url} target="_blank" rel="noopener noreferrer"><InstagramIcon/><span>{site.instagram.label}</span><Arrow/></a>;
}
function Hero() {
  return <section className="hero section" id="marca" aria-labelledby="hero-title">
    <div className="cinema-image" aria-hidden="true"><ProgressiveImage src={site.hero.photo.src} alt="" width="1024" height="1536" loading="eager" fetchPriority="high"/></div>
    <div className="cinema-shade" aria-hidden="true"/>
    <div className="cinema-corners" aria-hidden="true"><span/><span/><span/><span/></div>
    <div className="hero-main">
      <div className="hero-copy" data-reveal><p className="eyebrow"><span className="accent-line"/>{site.hero.eyebrow}</p><h1 id="hero-title"><span className="title-line">{site.hero.title[0]}</span><span className="title-line title-outline">{site.hero.title[1]}</span></h1><div className="hero-detail"><p>{site.hero.description}</p><a className="film-link" href="#contato">{site.hero.action}<Arrow/></a></div></div>
      <div className="hero-signature" aria-hidden="true"><BrandMark/><span>IT CREATIVE<small>BY ISAQUE TACCHI</small></span></div>
    </div>
    <div className="hero-bottom"><a className="explore-link" href="#sobre"><span className="scroll-track" aria-hidden="true"/>{site.hero.explore}<Arrow direction="down"/></a><span className="hero-caption">Produção audiovisual.<br/>Da sua ideia à imagem.</span><SocialLink/></div>
  </section>;
}
function About() {
  return <section id="sobre" className="section about" aria-labelledby="about-title">
    <div className="about-grid">
      <div className="about-content" data-reveal><p className="eyebrow">Por trás da câmera</p><h2 id="about-title">{site.about.title}</h2><h3>{site.about.introduction}</h3><p className="body-copy">{site.about.description}</p><div className="about-signature"><BrandMark/><span>{site.name}<small>PRODUÇÃO AUDIOVISUAL</small></span></div></div>
      <figure className="about-portrait" data-reveal><div className="portrait-mat"><ProgressiveImage src={site.about.photo.src} alt={site.about.photo.alt} width="4000" height="6000"/></div><figcaption><span>{site.about.caption[0]}</span><span>{site.about.caption[1]} <Arrow/></span></figcaption></figure>
    </div>
    <div className="value-list">{site.about.values.map(value => <article key={value.title} data-reveal><span className="value-rule" aria-hidden="true"/><h3>{value.title}</h3><p>{value.text}</p></article>)}</div>
  </section>;
}
function Dedication() {
  return <section id="dedicacao" className="section dedication" aria-labelledby="dedication-title">
    <div className="dedication-grid"><div className="project-stat" data-reveal><p className="eyebrow">{site.dedication.countEyebrow}</p><AnimatedCounter value={site.dedication.count}/><span>{site.dedication.countLabel}</span></div><div className="dedication-copy" data-reveal><h2 id="dedication-title">{site.dedication.title[0]}<br/><span>{site.dedication.title[1]}</span></h2><p>{site.dedication.description}</p></div></div>
    <div className="dedication-note"><BrandMark/><p>{site.dedication.statement}</p><Arrow/></div>
  </section>;
}
function Contact() {
  return <section id="contato" className="section contact" aria-labelledby="contact-title">
    <div className="contact-intro" data-reveal><p className="eyebrow">Me conte sua ideia</p><h2 id="contact-title"><span>{site.contact.title[0]}</span><span>{site.contact.title[1]}</span></h2><div className="contact-action"><p>{site.contact.description}</p><a className="contact-link" href={site.instagram.url} target="_blank" rel="noopener noreferrer">{site.contact.action}<Arrow/></a></div></div>
    <div className="steps">{site.contact.steps.map((step, index) => <article key={step.title} data-reveal><span className="item-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
    <div className="contact-bottom"><span>Isaque Tacchi · Estúdio criativo</span><SocialLink/></div>
  </section>;
}
function Footer() {
  return <footer className="footer"><a className="footer-brand" href="#marca"><BrandMark/><span>{site.studio}<small>BY {site.name.toUpperCase()}</small></span></a><p>Histórias que merecem ser vistas.</p><a className="back-top" href="#marca">Voltar ao início<Arrow/></a></footer>;
}
export function Portfolio() {
  const [active, setActive] = useState('marca');
  useStudioMotion();
  useEffect(() => {
    const sections = [...document.querySelectorAll('main > section')];
    let frame;
    const update = () => {
      frame = undefined;
      let current = 'marca';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= innerHeight * .42) current = section.id;
      }
      setActive(current);
    };
    const requestUpdate = () => { if (frame === undefined) frame = requestAnimationFrame(update); };
    update();
    let disposed = false;
    const initialHash = location.hash;
    let interacted = false;
    const markInteraction = () => { interacted = true; };
    const interactionEvents = ['wheel', 'touchstart', 'pointerdown', 'keydown'];
    if (initialHash) {
      interactionEvents.forEach(event => addEventListener(event, markInteraction, { passive: true }));
      const alignInitialSection = () => {
        if (disposed || interacted || location.hash !== initialHash) return;
        const target = sections.find(section => `#${section.id}` === initialHash);
        target?.scrollIntoView({ block: 'start', behavior: 'instant' });
        requestUpdate();
      };
      requestAnimationFrame(alignInitialSection);
      document.fonts?.ready.then(alignInitialSection);
    }
    addEventListener('scroll', requestUpdate, { passive: true });
    addEventListener('resize', requestUpdate);
    return () => { disposed = true; cancelAnimationFrame(frame); interactionEvents.forEach(event => removeEventListener(event, markInteraction)); removeEventListener('scroll', requestUpdate); removeEventListener('resize', requestUpdate); };
  }, []);
  return <><a className="skip-link" href="#main">Pular para o conteúdo</a><Header active={active}/><main id="main"><Hero/><About/><Dedication/><Contact/></main><Footer/></>;
}
export default function App() {
  const ready = useInitialLoading();
  return ready ? <Portfolio/> : <LoadingSkeleton/>;
}
