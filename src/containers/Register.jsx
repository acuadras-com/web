import React, { useState } from 'react'
import { connect } from 'react-redux';
import { saveUser } from '../actions';
import Axios from 'axios';
import './App.css';
import '../assets/styles/components/Register.scss'
import { InputText } from '../components/basic/Input-Text/InputText'
import Container from 'react-bootstrap/Container'
import '../components/basic/Input-Text/InputText.scss'
import { PasswordRegister } from '../components/basic/Password/PasswordRegister'
import {Button, Form} from 'react-bootstrap'


const Register = (props) => {

  const coreBaseUrl = 'http://localhost:9072/tutendero';

  const [form, setValues] = 
      useState ({email: 'jorge.j400@gmail.com', });
  const [actionState, setActionState] = 
      useState({sending: false, error: null});
  const [passError, setPassError] = 
      useState('');

  const [validated, setValidated] = useState(false);


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
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true) {
      saveUser();
    }    
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
      <section>
        {actionState.error === 'OK'
          ?  <RegistroExitoso />
          : (
          <>
            {actionState.error 
              ? <span className="spanServiceError">{actionState.error}</span>
              : <span>	&nbsp;</span>
            }
          <Container className="form-container">
          
          <h2>Regístrate</h2>
         
          <Form noValidate onSubmit={handleSubmit} validated={validated}>
          
          <InputText required name="name" gettingValue={handleInput} text="Nombre" typeInput="text" />
          <InputText required name="email" gettingValue={handleInput} text="Correo" typeInput="email" />
          <InputText required name="phone" gettingValue={handleInput} text="Número de Contacto" typeInput="number"  />
          <InputText required name="storeName" gettingValue={handleInput} text="Nombre de Comercio"  typeInput="text"/>       
          
          <PasswordRegister onBlur={handlePassworOut} name="password" nameConfirm="confirmPassword" gettingValue={handleInput} gettingValueConfirm={handleInput}/>
              <span className="spanInputError">{passError}</span>

               {passError !=''
                 ?<Button className="form-button-custom" variant="primary" size="lg" block disabled>Registrarme</Button>
                 :(<>
                   {!actionState.sending
                  ? <Button type="submit" className="form-button-custom" variant="primary" size="lg" block>Registrarme</Button>
                  : <Button disabled type="submit" className="form-button-custom" variant="primary" size="lg" block>Registrarme</Button>
                } </>)
               }
              
              <div className="a text-center">           
                <a href="">Iniciar sesión</a>     
              </div>
          </Form>
         
        </Container>
         </>
        )
        }
        
     </section>
  );
}
const mapDispatchToProps = {
  saveUser 
}

const mapStateToProps = state => {
  return  {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);