import React, { useEffect, useRef, useState } from 'react';

export default function ProgressiveImage({ src, alt, width, height }) {
  const image = useRef(null);
  const [status, setStatus] = useState('loading');
  useEffect(() => {
    const current = image.current;
    setStatus(current?.complete && current.currentSrc ? (current.naturalWidth > 0 ? 'loaded' : 'error') : 'loading');
  }, [src]);
  return <div className={`photo-frame photo-${status}`} aria-busy={status === 'loading'}>
    <span className="photo-skeleton skeleton-block" aria-hidden="true"/>
    <img ref={image} src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" onLoad={() => setStatus('loaded')} onError={() => setStatus('error')}/>
    {status === 'error' && <div className="photo-error" role="img" aria-label={alt}>Não foi possível carregar a foto.</div>}
  </div>;
}
