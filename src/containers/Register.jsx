import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import {saveUser} from '../actions';

import './App.css';
import '../assets/styles/components/Register.scss'

const Register = () => {

  const [form, setValues] = useState ({email: 'jorge.j400@gmail.com', });

  const [actionState, setActionState, sonIguales] 
    = useState({sending: false, error: null, sonIguales: true});
  
  const [passError, setPassError] 
    = useState('');

  const validataePassword = (targetValue, otherValue) => {
    
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
      
      validataePassword(event.target.value, form.password)
    }
    if(event.target.name === 'password') {
      validataePassword(event.target.value, form.confirmPassword)
    }
  }

  const handleSubmit = event  => {
    event.preventDefault();
    saveUser();
  }

  const saveUser = async () => {
    setActionState ({sending: true, error: null,});

    try {
      console.log('Enviando ...') 
      const response = await fetch(`https://rickandmortyapi.com/api/character/`);
      const data = await response.json();
      
      if(form.email === 'jorge.j400@gmail.com') {        	
        setActionState ({sending: false, error: 'Correo ya Registrado, por favor intente nuevamente' })
      } else {
        setActionState ({sending: false, error: 'OK' })
      }
      
    } catch (error) {
      setActionState ({sending: false, error: error, });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, actionState.error)

  const RegistroExitoso = () => {
    return <>
      <div className="registroExitoso">Felicitaciones! Ahora haces parte de TuTendero, proximamente nos comunicaremos para continuar con el proceso</div>
      <a href="">Iniciar sesión</a>
    </>
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