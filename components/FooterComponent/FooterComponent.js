import React, { Component } from 'react';

export const FooterComponent = (props)=>{

  return <><footer>
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
  <style jsx > { `
footer {
  padding: 25px 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
  background-color: #222222; }
  footer p {
    font-size: 12px;
    margin: 0; }
  footer ul {
    margin-bottom: 0; }
    footer ul li a {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.3); }
      footer ul li a:hover, footer ul li a:focus, footer ul li a:active, footer ul li a.active {
        text-decoration: none; }
` } 
</style>
  </>
};