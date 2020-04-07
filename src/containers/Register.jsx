import React, { useState } from 'react'
import { connect } from 'react-redux';
import { saveUser } from '../actions';
import './App.css';
import '../assets/styles/components/Register.scss'
import { InputText } from '../components/basic/Input-Text/InputText'
import Container from 'react-bootstrap/Container'
import '../components/basic/Input-Text/InputText.scss'
import { PasswordRegister } from '../components/basic/Password/PasswordRegister'
import {Button, Form} from 'react-bootstrap'


const Register = (props) => {

  const [form, setValues] = 
      useState ({email: 'jorge.j400@gmail.com', });
  
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
      
      const shop = {
        name: form.storeName,
        phone: form.phone
      }

      const user = {
        email: form.email,
        password: form.password,
        name: form.name,
        shop: shop        
      }
      saveUser(user);
      props.history.push("/setting-profile-shop")
    }    
  }
  
  return (
      <section>
        
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
                 ?<Button className="form-button-custom" variant="primary" size="lg" block disabled>Siguiente</Button>
                 :(<>
                   <Button type="submit" className="form-button-custom" variant="primary" size="lg" block>Siguiente</Button> </>)
               }
              
              <div className="a text-center">           
                <a href="">Iniciar sesión</a>     
              </div>
          </Form>
         
        </Container>        
        
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