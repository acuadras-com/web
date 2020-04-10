import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import '../../device-mockups/device-mockups.css'
import demoScreen1 from '../../search-internet.png';

export const HeroComponent = (props)=>{
  return <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">Permite que clientes cercanos te encuentren y te hagan pedidos</h1>
            <h3 className="mb-5">Aplicación disponible desde el próximo 20 de abril. Totalmente gratis sólo para los primeros 100 tenderos por 6 meses </h3>
            <Link to="registro">
              <div className="btn btn-outline btn-xl js-scroll-trigger">Uneté Ahora</div>
            </Link>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  <img src={demoScreen1} className="img-fluid" alt="" />
                </div>
                <div className="button">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
};