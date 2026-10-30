import React from 'react';
// Símbolo em vetor, construído com base na referência enviada.
// Um arquivo SVG oficial pode substituir somente este componente no futuro.
export default function BrandMark({ className = '' }) {
  return (
    <svg className={`brand-mark ${className}`} viewBox="300 320 480 480" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M370 335H709L767 483L619 426C598 418 582 426 574 446L498 630C493 642 494 651 501 663L540 727L579 663C586 651 586 642 581 630L570 603L588 574L609 627C617 647 615 663 604 682L540 785L476 681C462 659 462 641 470 620L522 495L502 447C494 426 478 418 457 426L311 484ZM390 365L365 430L445 399C482 385 514 397 529 432L540 458L551 432C566 397 599 385 635 399L714 430L688 365Z" fillRule="evenodd"/>
      <path d="M570 532L584 565L566 598L554 571Z"/>
    </svg>
  );
}
