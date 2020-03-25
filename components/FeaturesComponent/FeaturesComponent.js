import React, { Component } from 'react';
import featureScreen from './img/2.png';


export const FeaturesComponent = (props)=>{
  return <>
  <section className="features" id="features">
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

  <style jsx > { `
section.features .section-heading {
  margin-bottom: 100px; }
  section.features .section-heading h2 {
    margin-top: 0; }
  section.features .section-heading p {
    margin-bottom: 0; }

section.features .device-container,
section.features .feature-item {
  max-width: 325px;
  margin: 0 auto; }

section.features .device-container {
  margin-bottom: 100px; }
  @media (min-width: 992px) {
    section.features .device-container {
      margin-bottom: 0; } }

section.features .feature-item {
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center; }
  section.features .feature-item h3 {
    font-size: 30px; }
  section.features .feature-item i {
    font-size: 80px;
    display: block;
    margin-bottom: 15px;
    background: -webkit-linear-gradient(to left, #7b4397, rgb(52, 202, 6));
    background: linear-gradient(to left, #7b4397,rgb(52, 202, 6));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; }
` } 
</style>
  </>
};