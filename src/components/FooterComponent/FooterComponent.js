import React from 'react';
import './style.css';

export const FooterComponent = (props)=>{
  return <footer>
    <div className="container">
      <p>&copy; 2020 TuTendero. Todos los derechos reservados.</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="#">Privacidad</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Términos y condiciones</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Preguntas frecuentes</a>
        </li>
      </ul>
    </div>
  </footer>
};