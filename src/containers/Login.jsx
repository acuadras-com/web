import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { InputText } from '../components/basic/Input-Text/InputText'
import '../components/basic/Input-Text/InputText.scss'
import '../assets/styles/components/Login.scss'
import { Button, Form,Container,Row } from 'react-bootstrap'

const Login = (props) => {

    const [form, setValues] =
        useState({
            email: '',
            pass: ''
        });

    const handleInput = event => {

        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    return (
        <section>
            <Container className="form-container">
                <h3>Inicia Sesión</h3>                
                <Form noValidate>
                    <InputText required name="email" gettingValue={handleInput} text="Email" typeInput="email" />
                    <InputText required name="password" gettingValue={handleInput} text="contraseña" typeInput="password" />
                    <Row className="link-row"><Link>¿Olvidaste tu contraseña?</Link><p className="separator"> </p><Link>Crear cuenta</Link></Row>  
                    <Button type="submit" className="form-button-custom" variant="primary" size="lg" block>Iniciar Sesión</Button>                  
                </Form>
            </Container>
        </section>
    )
}

export default Login;