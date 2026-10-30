import React from 'react';

export default function LoadingSkeleton() {
  return <div className="site-skeleton" role="status" aria-label="Carregando o portfólio" aria-busy="true">
    <div className="skeleton-header" aria-hidden="true"><span className="skeleton-block skeleton-brand"/><div className="skeleton-navigation"><span className="skeleton-block"/><span className="skeleton-block"/><span className="skeleton-block"/></div></div>
    <div className="skeleton-layout" aria-hidden="true"><div className="skeleton-copy"><span className="skeleton-block skeleton-kicker"/><span className="skeleton-block skeleton-heading"/><span className="skeleton-block skeleton-heading skeleton-heading-short"/><div className="skeleton-lines"><span className="skeleton-block"/><span className="skeleton-block"/><span className="skeleton-block"/></div><span className="skeleton-block skeleton-button"/></div><div className="skeleton-block skeleton-art"/></div>
  </div>;
}
