import React from 'react';
import './style.css';
import 'simple-line-icons/css/simple-line-icons.css';
import featureScreen from './img/2.png';

export const FeaturesComponent = (props)=>{
  return <section className="features" id="features">
    <div className="container">
      <div className="section-heading text-center">
        <h2>Una herramienta para aumentar tus ventas</h2>
        <p className="text-muted">Vende  a través de tu propia tienda virtual</p>
        <hr />
      </div>
      <div className="row">
        <div className="col-lg-4 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  <img src={featureScreen} className="img-fluid" alt="" />
                </div>
                <div className="button">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 my-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-screen-smartphone text-primary"></i>
                  <h3>Ten visibilidad dígital</h3>
                  <p className="text-muted">Un perfil digital visible para tus clientes</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-location-pin text-primary"></i>
                  <h3>Acercate a personas de tu barrio</h3>
                  <p className="text-muted">Personas en busca de tu negocio a máximo 2 kms de distancia</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-credit-card text-primary"></i>
                  <h3>Recibe pagos con tarjetas</h3>
                  <p className="text-muted">A través de tu tienda virtual en nuestra plataforma, podrás recibir pagos con tarjetas</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-envelope-letter text-primary"></i>
                  <h3>Chat para tu negocio</h3>
                  <p className="text-muted">Permite que personas interesadas y clientes te contacten via chat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
};