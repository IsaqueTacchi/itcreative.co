import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
const navigation=[['marca','A marca'],['sobre','Quem sou'],['dedicacao','Dedicação'],['contato','Contato']];
function Header({active,scrolled}) {
 const [open,setOpen]=useState(false); const [mobile,setMobile]=useState(()=>matchMedia('(max-width:700px)').matches); const header=useRef(null); const toggle=useRef(null);
 useEffect(()=>{const media=matchMedia('(max-width:700px)');const change=()=>{setMobile(media.matches);setOpen(false)};const outside=e=>{if(!header.current?.contains(e.target))setOpen(false)};const key=e=>{if(e.key==='Escape'){setOpen(false);if(open)toggle.current?.focus()}};media.addEventListener('change',change);document.addEventListener('click',outside);document.addEventListener('keydown',key);return()=>{media.removeEventListener('change',change);document.removeEventListener('click',outside);document.removeEventListener('keydown',key)}},[open]);
 return <header ref={header} className={`header${scrolled?' scrolled':''}${open?' menu-open':''}`}>
 <a className="brand-link" href="#marca" aria-controls={mobile?'portfolio-menu':undefined} aria-expanded={mobile?open:undefined} onClick={e=>{if(mobile){e.preventDefault();setOpen(!open)}}}>ISAQUE TACCHI · ESTÚDIO CRIATIVO</a>
 <button ref={toggle} className="menu-toggle" aria-label={open?'Fechar menu de navegação':'Abrir menu de navegação'} aria-expanded={open} aria-controls="portfolio-menu" onClick={()=>setOpen(!open)}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>
 <nav id="portfolio-menu" aria-label="Seções do portfólio">{navigation.map(([id,label])=><a key={id} href={'#'+id} className={active===id?'active':''} aria-current={active===id?'location':undefined} onClick={()=>setOpen(false)}>{label}</a>)}</nav></header>
}
function StudioMark({ className = '' }) {
 return <svg className={`studio-mark ${className}`} viewBox="0 0 180 180" fill="none" aria-hidden="true"><path d="M31 24h118l15 39-41-16c-13-5-22 0-28 14L69 125c-3 8-3 16 1 23l20 30 20-30c4-7 4-15 1-23l-9-22" stroke="currentColor" strokeWidth="9" strokeLinejoin="miter"/><path d="m16 63 41-16c13-5 22 0 28 14l5 12M31 24 16 63" stroke="currentColor" strokeWidth="9"/><path d="m99 81-5 12 5 10 5-12z" fill="currentColor"/></svg>;
}
function Instagram(){return <a className="instagram-link" href="https://www.instagram.com/itcreative.co/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg><span>@itcreative.co</span><span aria-hidden="true">↗</span></a>}
function SectionLabel({ children, number }){return <div className="eyebrow"><span>{children}</span><span>{number} / 04</span></div>}
function Star({className=''}){return <span className={`star ${className}`} aria-hidden="true">✳</span>}
function BrandSection(){return <section id="marca" className="section hero" aria-labelledby="brand-title">
 <div className="background-word" aria-hidden="true">CREATIVE</div>
 <div className="hero-top"><p>Cada negócio tem uma história que merece ser vista. Meu propósito é dar forma à sua, com imagens que revelam sua essência e aproximam pessoas do que você faz.</p><Instagram/></div>
 <div className="hero-identity"><StudioMark/><h1 id="brand-title">Creative Studio</h1><p>by: Isaque Tacchi</p></div>
 <a className="next-link" href="#sobre"><span>Conheça quem está por trás</span><span aria-hidden="true">↓</span></a>
 </section>}
function AboutSection(){return <section id="sobre" className="section paper about" aria-labelledby="about-title">
 <SectionLabel number="02">Um olhar próprio</SectionLabel>
 <div className="about-grid"><div className="about-copy"><h2 id="about-title">Quem eu sou?</h2><p className="about-intro">Muito prazer, sou Isaque Tacchi, especialista em produção audiovisual. Entendo sua ideia e dou forma a ela com uma comunicação visual clara e bem cuidada.</p><ul className="values"><li>Trabalho realizado com excelência e dedicação.</li><li>Um olhar próprio para revelar o que torna sua marca única.</li><li>Resultados que impressionam e criam conexão com o público.</li></ul></div>
 <div className="type-composition" aria-label="Isaque Tacchi — produção audiovisual"><StudioMark/><span className="type-small">ISAQUE TACCHI</span><div className="type-large">Um olhar.<br/><em>Sua história.</em></div><span className="type-caption">PRODUÇÃO AUDIOVISUAL<br/>COM IDENTIDADE E PROPÓSITO</span><Star/></div></div>
 <div className="section-bottom"><span>Comunicação que aproxima.</span><Instagram/></div>
 <div className="background-word" aria-hidden="true">PORTFÓLIO</div>
 </section>}
function DedicationSection(){return <section id="dedicacao" className="section paper dedication" aria-labelledby="dedication-title"><div className="background-word" aria-hidden="true">CREATIVE<br/>CREATIVE</div><SectionLabel number="03">Dedicação em cada detalhe. Propósito em cada projeto.</SectionLabel>
 <div className="dedication-grid"><h2 id="dedication-title">Meu diferencial vai além de um bom resultado: está na dedicação e no zelo com que conduzo cada projeto. Da primeira conversa à entrega, busco compreender sua ideia e cuidar de cada detalhe para criar um trabalho que represente você e valorize o que faz.</h2><div className="project-stat"><Star/><strong>+500</strong><span>Projetos realizados</span></div></div>
 <p className="statement">Se posicione no mercado com <strong>um visual atrativo</strong> e alcance o tão esperado <strong>resultado</strong> que você merece.</p><div className="section-bottom"><StudioMark/><Instagram/></div>
 </section>}
const steps = [
 ['Conversa inicial', 'Você me conta a ideia, o objetivo e o prazo. Conversamos sobre as necessidades do projeto e as possibilidades de criação.'],
 ['Proposta', 'Definimos os serviços, os formatos, as entregas e o investimento, com clareza sobre o que será realizado.'],
 ['Produção e entrega', 'O projeto é desenvolvido conforme o que foi combinado, com atenção à mensagem e ao acabamento de cada material.'],
];
function ContactSection(){return <section id="contato" className="section contact" aria-labelledby="contact-title"><div className="background-word" aria-hidden="true">CRIATIVO</div><SectionLabel number="04">Próximo passo e contato</SectionLabel><h2 id="contact-title">Vamos dar forma ao seu<br/>próximo projeto?</h2><p className="intro">Seja para divulgar um serviço, apresentar seu espaço ou registrar um evento, o primeiro passo é entender o que você precisa comunicar.</p><div className="steps">{steps.map(([title,text],i)=><article key={title}><span className="step-number">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="closing"><div><h3>Conte sua ideia. Vamos conversar.</h3><p>ISAQUE TACCHI · ESTÚDIO CRIATIVO</p></div><Instagram/></div><StudioMark className="contact-mark"/></section>}

export default function App(){
 const [active,setActive]=useState('marca'),[scrolled,setScrolled]=useState(false),[progress,setProgress]=useState(0);
 useEffect(()=>{
 const sections=[...document.querySelectorAll('main > section')]; let frame=0;
 const update=()=>{frame=0;let selected='marca';for(const section of sections){if(section.getBoundingClientRect().top<=innerHeight*.45)selected=section.id}setActive(selected);setScrolled(scrollY>30);const height=document.documentElement.scrollHeight-innerHeight;setProgress(height>0?Math.min(1,Math.max(0,scrollY/height)):0)};
 const request=()=>{if(!frame)frame=requestAnimationFrame(update)};
 addEventListener('scroll',request,{passive:true});addEventListener('resize',request);update();
 return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',request);removeEventListener('resize',request)};
 },[]);
 return <><a className="skip-link" href="#main">Pular para o conteúdo</a><Header active={active} scrolled={scrolled}/><div className="progress" aria-hidden="true" style={{transform:`scaleX(${progress})`}}/><main id="main"><BrandSection/><AboutSection/><DedicationSection/><ContactSection/></main><a className={'back-top'+(scrolled?' visible':'')} href="#marca" aria-label="Voltar ao início">↑</a></>;
}
