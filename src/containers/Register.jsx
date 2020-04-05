import React, { useState } from 'react'
import { connect } from 'react-redux';
import { saveUser } from '../actions';
import Axios from 'axios';

import './App.css';
import '../assets/styles/components/Register.scss'
import { ControlLabel } from 'react-bootstrap';

const Register = () => {

  const coreBaseUrl = 'http://localhost:9072/tutendero';

  const [form, setValues] = 
      useState ({email: 'jorge.j400@gmail.com', });
  const [actionState, setActionState] = 
      useState({sending: false, error: null});
  const [passError, setPassError] = 
      useState('');

  const validatePassword = (targetValue, otherValue) => {
    
    if(otherValue){
      targetValue != otherValue
        ?setPassError('las Contraseñas debe coincidir')
        :setPassError('');
    }
    
  }
  const handlePassworOut = event => {
    (event.target.value.length < 8)
        ?setPassError('Password debe ser Mínimo de 8 Caracteres')
        :setPassError('');

  }
  const handleInput = event => {
    
    setValues({
      ...form,
    [event.target.name]: event.target.value
    })
    
    if(event.target.name === 'confirmPassword') {
      
      validatePassword(event.target.value, form.password)
    }
    if(event.target.name === 'password') {
      validatePassword(event.target.value, form.confirmPassword)
    }
  }

  const handleSubmit = event  => {
    event.preventDefault();
    saveUser();
  }

  const saveUser = async () => {
    setActionState ({sending: true, error: null,});

    const shop = {
      creationDate: "2020-04-03T02:57:18.231Z",
      name: form.storeName,
      phone: form.phone,
    }
    const user = {
      type: "STORE_USER",
      creationDate: "2020-04-03T03:25:42.265Z",
      email: form.email,
      password: form.password,
      name: form.name,
      role: "SHOP_PRINCIPAL"
    }
    
    try {
      console.log('Enviando ...') 
      const responseU = await Axios.post(`${coreBaseUrl}/user`, user);
      //const responseS = await Axios.post(`${coreBaseUrl}/shop`, shop);
      
      console.log("Respuesta usuario" + responseU);
      //console.log(responseS);

      if(responseU.status === 200) {        	
        setActionState ({sending: false, error: 'OK' })
      } else {
        setActionState ({sending: false, error: 'Error, por favor intente nuevamente' })
      }
      
    } catch (error) {
      
      console.log("Error usuario " + error);
      setActionState ({sending: false, error: "A ocurrido un error por favor intente mas tarde", });
    }
  };

  const RegistroExitoso = () => {
    return <div className="registroExitoso">
      <h3>Felicitaciones! Ahora haces parte de TuTendero, proximamente nos comunicaremos para continuar con el proceso</h3>
      <a href="">Iniciar sesión</a>
    </div>
  }
  return (
      <section className="register">
        {actionState.error === 'OK'
          ?  <RegistroExitoso />
          : (
          <>
            {actionState.error 
              ? <span className="spanServiceError">{actionState.error}</span>
              : <span>	&nbsp;</span>
            }
          <section className="register__container">
          
          <h2>Regístrate</h2>
         
          <form className="register__container--form" onSubmit={handleSubmit}>
         
            <input 
              name="name"
              className="input" 
              type="text" 
              placeholder="Nombre" 
              onChange={handleInput}
              required={true}
            />
            <input 
              name="email"
              className="input" 
              type="email" 
              placeholder="Correo" 
              onChange={handleInput}
              required={true}
              value = {form.email}
            />
            <input 
              name="phone"
              className="input" 
              type="text" 
              placeholder="Número Contacto" 
              onChange={handleInput}
              required={true}
            />
            <input 
              name="storeName"
              className="input" 
              type="text" 
              placeholder="Nombre Comercio" 
              onChange={handleInput}
              required={true}
            />
            <input 
              name="password"
              className="input"
              type="password" 
              placeholder="Contraseña"
              onChange={handleInput}
              required={true}
              onBlur={handlePassworOut}
              />
            <input 
              name="confirmPassword"
              className="input"
              type="password" 
              placeholder="Confirmar Contraseña"
              onChange={handleInput}
              required={true}
              onBlur={handlePassworOut}
              />
              <span className="spanInputError">{passError}</span>

               {passError !=''
                 ?<button disabled className="button">Registrarme</button>
                 :(<>
                   {!actionState.sending
                  ? <button className="button">Registrarme</button>
                  : <button className="button2">Registrarme</button>
                } </>)
               }
              
              <div className="a">           
                <a href="">Iniciar sesión</a>     
              </div>
          </form>
         
        </section>
         </>
        )
        }
        
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