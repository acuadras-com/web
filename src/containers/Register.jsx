import React, { useState } from 'react'
import { connect } from 'react-redux';
import { saveUserToState } from '../actions';
import './App.css';
import '../assets/styles/components/Register.scss'
import { InputText } from '../components/basic/Input-Text/InputText'
import Container from 'react-bootstrap/Container'
import '../components/basic/Input-Text/InputText.scss'
import { PasswordRegister } from '../components/basic/Password/PasswordRegister'
import { Button, Form } from 'react-bootstrap'


const Register = (props) => {

  const [position, setPosition] = useState({
    address: props.ubication !== undefined ? props.ubication.address : "",
    neighborhood: props.ubication !== undefined ? props.ubication.neighborhood : "",
    latitude: props.ubication !== undefined ? props.ubication.latitude : 4.60971,
    longitude: props.ubication !== undefined ? props.ubication.longitude : -74.08175
  });

  const [actionState, setActionState] =
    useState({ sending: false, error: null });

  const [formValues, setFormValues] =
    useState({
      email: props.user !== undefined ? props.user.email : "",
      name: props.user !== undefined ? props.user.name : "",
      phone: props.shop !== undefined ? props.shop.phone : "",
      storeName: props.shop !== undefined ? props.shop.storeName : ""
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

    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })

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

    today = mm + '/' + dd + '/' + yyyy;
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
    let user = buildUser();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true) {

      let shop = buildShop()

      //props.saveUserToState({ user, shop })
      //props.history.push("/setting-profile-shop")
    }
  }

  const RegistroExitoso = () => {
    return <div className="registroExitoso">
      <h3>Felicitaciones! Ahora haces parte de TuTendero, proximamente nos comunicaremos para continuar con el proceso. </h3>
      <a href="">Iniciar sesión</a>
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
      {actionState.error === 'OK'
        ? <RegistroExitoso />
        : (
          <>
            {actionState.error
              ? <span className="spanServiceError">{actionState.error}</span>
              : <span>	&nbsp;</span>
            }
            <Container className="form-container">

              <h2>Regístrate</h2>

              <Form noValidate onSubmit={handleSubmit} validated={validated}>

                <InputText value={formValues.name} required name="name" gettingValue={handleInput} text="Nombre" typeInput="text" />
                <InputText value={formValues.email} required name="email" gettingValue={handleInput} text="Correo" typeInput="email" />
                <InputText value={formValues.phone} required name="phone" gettingValue={handleInput} text="Número de Contacto" typeInput="number" />
                <InputText value={formValues.storeName} required name="storeName" gettingValue={handleInput} text="Nombre de Comercio" typeInput="text" />
                <Form.Group className="input-group-custom" >
                  <Form.Control name="address" onClick={settingLocattion} className="form-input" type="text" required value={position.address} placeholder="Ingresa tu dirección" />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa una dirección valida.
                  </Form.Control.Feedback>
                </Form.Group>

                <PasswordRegister onBlur={handlePassworOut} name="password" nameConfirm="confirmPassword" gettingValue={handleInput} gettingValueConfirm={handleInput} />
                <span className="spanInputError">{passError}</span>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check required type="checkbox">
                      <Form.Check.Input type="checkbox"/>
                      <Form.Check.Label>Al registrarme, declaro que he leído y acepto los <a href="">Términos y Condiciones</a> de TuTendero.</Form.Check.Label>
                  </Form.Check>                  
                </Form.Group>

                {passError != ''
                  ? <Button className="form-button-custom" variant="primary" size="lg" block disabled>Siguiente</Button>
                  : (<>
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
        )}
    </section>        
  );
}
const mapDispatchToProps = {
  saveUserToState
}

const mapStateToProps = state => {
  return {
    user: state.user,
    shop: state.shop,
    ubication: state.ubication
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);