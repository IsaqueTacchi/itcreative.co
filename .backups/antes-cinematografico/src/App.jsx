import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import AnimatedCounter from './components/AnimatedCounter.jsx';
import LoadingSkeleton from './components/LoadingSkeleton.jsx';
import ProgressiveImage from './components/ProgressiveImage.jsx';
import useInitialLoading from './hooks/useInitialLoading.js';
import BrandMark from './components/BrandMark.jsx';
import { Arrow, Asterisk, InstagramIcon } from './components/Icons.jsx';
import { site } from './data/site.js';
import useStudioMotion from './hooks/useStudioMotion.js';
import './styles.css';
import './visual.css';
import './viewport.css';

function SocialLink({ className = '' }) {
  return <a className={`social-link ${className}`} href={site.instagram.url} target="_blank" rel="noopener noreferrer"><InstagramIcon/>{site.instagram.label}<Arrow/></a>;
}
function Hero() {
  return <section className="hero section" id="marca" aria-labelledby="hero-title">

    <div className="hero-grid">
      <div className="hero-copy" data-reveal><p className="eyebrow">{site.hero.eyebrow}</p><h1 id="hero-title">{site.hero.title[0]}<br/><span>{site.hero.title[1]}</span></h1><p className="hero-description">{site.hero.description}</p><a className="button button-dark" href="#contato">{site.hero.action}<Arrow/></a></div>
      <div className="brand-stage" data-reveal aria-label="IT Creative — identidade do estúdio">
        <div className="stage-grid" aria-hidden="true"/><div className="stage-top"><span>IT / CREATIVE STUDIO</span><span>↗</span></div>
        <div className="stage-orbits" aria-hidden="true"><span/><span/><span/></div><div className="mark-disc"><BrandMark/></div><div className="stage-stamp" aria-hidden="true">DA IDEIA<br/><strong>À IMAGEM.</strong><Arrow/></div>
        <span className="stage-cross stage-cross-one" aria-hidden="true">+</span><span className="stage-cross stage-cross-two" aria-hidden="true">+</span>
        <div className="stage-bottom"><span>UM OLHAR PRÓPRIO.<br/>UMA HISTÓRIA SUA.</span><Asterisk/></div>
      </div>
    </div>
    <div className="hero-bottom"><a href="#sobre" className="explore-link"><span className="arrow-circle"><Arrow direction="down"/></span>Explore o estúdio</a><p>Imagem com intenção.<br/><span>Comunicação com identidade.</span></p><SocialLink/></div>
  </section>;
}
function About() {
  return <section id="sobre" className="section about" aria-labelledby="about-title">

    <div className="about-grid">
      <div className="about-content" data-reveal>
        <div className="about-heading"><p className="eyebrow">Criatividade com propósito</p><h2 id="about-title">{site.about.title}</h2><div className="signature"><Asterisk/><span>Um olhar que entende.<br/>Uma criação que representa.</span></div></div>
        <div className="about-copy"><h3>{site.about.introduction}</h3><p>{site.about.description}</p></div>
      </div>
      <figure className="about-portrait" data-reveal><ProgressiveImage src={site.about.photo.src} alt={site.about.photo.alt} width="1024" height="1536"/><figcaption><span>{site.name}</span><span>EM PRODUÇÃO <Arrow/></span></figcaption><Asterisk/></figure>
    </div>
    <div className="value-list">{site.about.values.map((value, index) => <article key={value.title} data-reveal><span className="item-number">0{index + 1}</span><h3>{value.title}</h3><p>{value.text}</p><Arrow/></article>)}</div>
  </section>;
}
function Dedication() {
  return <section id="dedicacao" className="section dedication" aria-labelledby="dedication-title">

    <div className="dedication-grid"><div className="dedication-copy" data-reveal><p className="eyebrow">Dedicação em cada detalhe</p><h2 id="dedication-title">{site.dedication.title[0]}<br/><span>{site.dedication.title[1]}</span></h2><p>{site.dedication.description}</p></div><div className="project-stat" data-reveal><div className="stat-rings" aria-hidden="true"/><Asterisk/><AnimatedCounter value={site.dedication.count}/><span>{site.dedication.countLabel}</span><p>Cada projeto, uma nova história.<br/>O mesmo cuidado em todos eles.</p></div></div>
    <div className="dedication-note"><span>O QUE MOVE O ESTÚDIO</span><p>{site.dedication.statement}</p><Arrow/></div>
  </section>;
}
function Contact() {
  return <section id="contato" className="section contact" aria-labelledby="contact-title">

    <div className="contact-intro" data-reveal><div><p className="eyebrow">Sua ideia tem espaço aqui</p><h2 id="contact-title">{site.contact.title[0]}<br/><span>{site.contact.title[1]}</span></h2></div><a className="contact-orbit" href={site.instagram.url} target="_blank" rel="noopener noreferrer"><Arrow/><span>{site.contact.action}</span></a></div>
    <p className="contact-description">{site.contact.description}</p>
    <div className="steps">{site.contact.steps.map((step, index) => <article key={step.title} data-reveal><span className="item-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
    <div className="contact-bottom"><span>Da ideia à entrega.<br/>Com clareza em cada etapa.</span><SocialLink/></div>
  </section>;
}
function Footer() {
  return <footer className="footer"><a className="footer-brand" href="#marca"><BrandMark/><span>{site.name}<small>ESTÚDIO CRIATIVO</small></span></a><p>Histórias que merecem ser vistas.</p><a className="back-top" href="#marca">Voltar ao início<Arrow/></a></footer>;
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
      document.fonts.ready.then(alignInitialSection);
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
