import React from 'react';
export function Arrow({ direction = 'up-right', ...props }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...props}>{direction === 'down' ? <path d="M12 4v16m-6-6 6 6 6-6"/> : <path d="M5 19 19 5M5 5h14v14"/>}</svg>;
}
export function InstagramIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>;
}
export function Asterisk({ className = '' }) {
  return <svg className={`asterisk ${className}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="13" aria-hidden="true"><path d="M50 0v100M0 50h100M14.6 14.6l70.8 70.8m-70.8 0 70.8-70.8"/></svg>;
}
