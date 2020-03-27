import React from 'react';
import './style.css';

export const CallToActionComponent = (props)=>{
  return <section className="cta">
    <div className="cta-content">
      <div className="container">
        <h2>No esperes más.<br />Haz crecer tu negocio ahora.</h2>
        <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Únete Ya!</a>
      </div>
    </div>
    <div className="overlay"></div>
  </section>
};