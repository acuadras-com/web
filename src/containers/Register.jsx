import React, { useState } from 'react'
import { connect } from 'react-redux';
import { saveUserToState, registerUser } from '../actions/shopUserAction';
import './App.css';
import '../assets/styles/components/Register.scss'
import { InputText } from '../components/basic/Input-Text/InputText'
import Container from 'react-bootstrap/Container'
import '../components/basic/Input-Text/InputText.scss'
import { PasswordRegister } from '../components/basic/Password/PasswordRegister'
import { Button, Form, Feedback } from 'react-bootstrap'
import {Link} from 'react-router-dom';


const Register = (props) => {

  const [position, setPosition] = useState({
    address: props.ubication !== undefined ? props.ubication.address : "",
    neighborhood: props.ubication !== undefined ? props.ubication.neighborhood : "",
    latitude: props.ubication !== undefined ? props.ubication.latitude : 4.60971,
    longitude: props.ubication !== undefined ? props.ubication.longitude : -74.08175
  });

  const [formValues, setFormValues] =
    useState({
      email: props.user !== undefined ? props.user.email : "",
      name: props.user !== undefined ? props.user.name : "",
      phone: props.shop !== undefined ? props.shop.phone : "",
      storeName: props.shop !== undefined ? props.shop.storeName : "",
      terms: false
    });

  const [passError, setPassError] =
    useState('');

  const [validated, setValidated] = useState(false);

  if (props.ubication == undefined) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    })
  }

  const validatePassword = (targetValue, otherValue) => {

    if (otherValue) {
      targetValue != otherValue
        ? setPassError('las Contraseñas debe coincidir')
        : setPassError('');
    }

  }
  const handlePassworOut = event => {
    (event.target.value.length < 8)
      ? setPassError('Password debe ser Mínimo de 8 Caracteres')
      : setPassError('');

  }
  const handleInput = event => {

    setPassError('')

    if (event.target.name === 'terms') {
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.checked
      })
    } else {
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.value
      })
    }

    if (event.target.name === 'confirmPassword') {

      validatePassword(event.target.value, formValues.password)
    }
    if (event.target.name === 'password') {
      validatePassword(event.target.value, formValues.confirmPassword)
    }
  }

  const buildUser = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-'  + dd;
    return {
      type: "STORE_USER",
      creationDate: today,
      email: formValues.email,
      password: formValues.password,
      name: formValues.name,
      role: "SHOP_PRINCIPAL"
    }
  }

  const buildShop = () => {
    return {
      name: formValues.storeName,
      storeName: formValues.storeName,
      phone: formValues.phone
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (formValues.terms === false) {
      setPassError('Debes aceptar términos y condiciones')
    }

    if (form.checkValidity() === false || formValues.terms === false) {
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true && formValues.terms === true) {

      let shop = buildShop()
      let user = buildUser();

      props.registerUser({ user, shop })
    }
  }

  const RegistroExitoso = () => {
    return <div className="registroExitoso">
      <h3>Felicitaciones! Ahora haces parte de TuTendero, proximamente nos comunicaremos para continuar con el proceso. </h3>
      <Link to="/setting-profile-shop">
        <a>Continuar editando el perfil</a>
      </Link>
    </div>
  }


  const settingLocattion = event => {
    event.preventDefault();

    let user = buildUser()
    let shop = buildShop()
    props.saveUserToState({ user, shop })
    props.history.push({
      pathname: "/setting-profile-shop",
      search: `?lat=${position.latitude}&lng=${position.longitude}`
    })
  }

  return (
    <section>
      {props.error === 'OK'
        ? <RegistroExitoso />
        : (
          <>
            
            <Container className="form-container">

              <h2>Regístrate</h2>

              <Form noValidate onSubmit={handleSubmit} validated={validated}>

                <InputText value={formValues.name} required name="name" gettingValue={handleInput} text="Nombre" typeInput="text" />
                <InputText value={formValues.email} required name="email" gettingValue={handleInput} text="Correo" typeInput="email" />
                <InputText value={formValues.phone} required name="phone" gettingValue={handleInput} text="Número de Contacto" typeInput="number" />
                <InputText value={formValues.storeName} required name="storeName" gettingValue={handleInput} text="Nombre de Comercio" typeInput="text" />
                <Form.Group className="input-group-custom" >
                  <Form.Control name="address" onClick={settingLocattion} onFocus={settingLocattion} className="form-input" type="text" required value={position.address} placeholder="Ingresa tu dirección" />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa una dirección valida.
                  </Form.Control.Feedback>
                </Form.Group>

                <PasswordRegister onBlur={handlePassworOut} name="password" nameConfirm="confirmPassword" gettingValue={handleInput} gettingValueConfirm={handleInput} />
                <span className="spanInputError">{passError}</span>
                {props.error
                  ? <span className="spanServiceError">{props.error}</span>
                  : <span>	&nbsp;</span>
                }
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check className="register-check" type="checkbox">
                    <Form.Check.Input type="checkbox" name="terms" onClick={handleInput} className="check-custom" />
                    <Form.Check.Label>Al registrarme, declaro que he leído y acepto los <a href="/terminos" target='_blank'>Términos y Condiciones</a> de TuTendero.</Form.Check.Label>                    
                  </Form.Check>
                </Form.Group>

                {passError != ''
                  ? <Button className="form-button-custom" variant="primary" size="lg" block disabled>Siguiente</Button>
                  : (<>
                    {!props.loading
                      ? <Button type="submit" className="form-button-custom" variant="primary" size="lg" block>Registrarme</Button>
                      : <Button disabled type="submit" className="form-button-custom" variant="primary" size="lg" block>Registrarme</Button>
                    } </>)
                }

                <div className="a text-center">
                  <a href="/login" >Iniciar sesión</a>
                </div>
              </Form>

            </Container>
          </>
        )}
    </section>
  );
}
const mapDispatchToProps = {
  saveUserToState,
  registerUser
}

const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.error,
    loading: state.loading,
    shop: state.shop,
    ubication: state.ubication
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);