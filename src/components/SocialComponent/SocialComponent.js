import React from 'react';
import './style.css';

export const SocialComponent = (props)=>{
  return <section className="contact bg-primary" id="contact">
    <div className="container">
      <h2>Vuelvete nuestro amigo
        en redes sociales!
        <i className="fa fa-heart"></i>
        </h2>
      <ul className="list-inline list-social">
        <li className="list-inline-item social-twitter">
          <a href="https://twitter.com/TenderoTu">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li className="list-inline-item social-facebook">
          <a href="https://www.facebook.com/Tutendero-101573884837656">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li className="list-inline-item social-google-plus">
          <a href="https://www.instagram.com/tutendero.co/">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  </section>
};