import React, { Component } from 'react';

export const CallToActionComponent = (props)=>{
  return <> <section className="cta">
    <div className="cta-content">
      <div className="container">
        <h2>No esperes más.<br />Haz crecer tu negocio ahora.</h2>
        <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Únete Ya!</a>
      </div>
    </div>
    <div className="overlay"></div>
  </section>

<style jsx > { `
section.cta {
  position: relative;
  padding: 250px 0;
  background-image: url(img/bg-sell.jpg);
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; }
  section.cta .cta-content {
    position: relative;
    z-index: 1; }
    section.cta .cta-content h2 {
      font-size: 50px;
      max-width: 450px;
      margin-top: 0;
      margin-bottom: 25px;
      color: white; }
    @media (min-width: 768px) {
      section.cta .cta-content h2 {
        font-size: 80px; } }
  section.cta .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); }
` } 
</style>
</>

};