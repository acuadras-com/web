import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

export const CallToActionComponent = (props)=>{
  return <section className="cta">
    <div className="cta-content">
      <div className="container">
        <h2>No esperes más.<br />Haz crecer tu negocio ahora. Gratis por tiempo límitado</h2>
        <Link to="registro">
        <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Únete Ya!</a>
        </Link>
      </div>
    </div>
    <div className="overlay"></div>
  </section>
};