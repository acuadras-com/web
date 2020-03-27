import React, { useState } from 'react'
import { connect } from 'react-redux';
import {saveUser} from '../actions';

import './App.css';
import '../assets/styles/components/Register.scss'

const Register = props => {

  const [form, setValues] = useState ({
    email: '',
  });

  const handleInput = event => {
    setValues({
      ...form,
    [event.target.name]: event.target.value      
    })
  }

  const handleSubmit = event  => {
    event.preventDefault();
    props.saveUser(form);
    console.log(form);
  }

  return (
      <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input 
            name="name"
            className="input" 
            type="text" 
            placeholder="Nombre" 
            onChange={handleInput}
          />
          <input 
            name="email"
            className="input" 
            type="text" 
            placeholder="Correo" 
            onChange={handleInput}
          />
          <input 
            name="phone"
            className="input" 
            type="text" 
            placeholder="Telefono" 
            onChange={handleInput}
          />
          <input 
            name="storeName"
            className="input" 
            type="text" 
            placeholder="Nombre Comercio" 
            onChange={handleInput}
          />
          <input 
            name="password"
            className="input"
            type="password" 
            placeholder="Contraseña"
            onChange={handleInput}
            />
            <p/>
          <button className="button">Registrarme</button>
        </form>
        <a href="">Iniciar sesión</a>
      </section>
    </section>
  );
}
const mapDispatchToProps = {
  saveUser, 
}

const mapStateToProps = state => {
  return  {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);