import React, { useState } from 'react'
import '../../components/basic/Input-Text/InputText.scss'
import '../../assets/styles/components/customer/Register.scss'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-bootstrap-icons'
import { InputText } from '../../components/basic/Input-Text/InputText'
import FacebookLogin from 'react-facebook-login';


export const Register = () => {

    const [form, setValues] = useState({
        isPassWordHidden: true,
        nameFieldValue: "",
        fieldActive: false
    });

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [contactNumber, setContactNumber] = useState("");

    const hideShowPasword = () => {
        setValues({
            ...form,
            isPassWordHidden: !form.isPassWordHidden
        })
    }

    const onChangeName = event => {
        setName(event.target.value)
    }

    const onChangeEmail = event => {
        setEmail(event.target.value)
    }

    const onChangeContactNumber = event => {
        setContactNumber(event.target.value)
    }

    return (
        <section>
            <Container className="form-container">
             <div>
            <FacebookLogin textButton="Conéctate usando Facebook" cssClass="btn-block button-login-face" />
            </div>
            
            <div>
                <div className="login-separator">
                    <hr className="striped-border"/>
                    <span className="text-center">O</span>
                    <hr className="striped-border"/>
                </div>
            </div>        
            
                <Form>
                    <div className="text-center">
                        <p>Registrate ingresando la siguiente información</p>
                    </div>
                    <InputText text="Nombre Completo" gettingValue={onChangeName} />

                    <InputText text="Correo Electrónico" gettingValue={onChangeEmail} />

                    <Form.Group controlId="formGroupPassword">
                        <InputGroup size="sm">
                            <Form.Control className="form-input" type={`${form.isPassWordHidden ? "password" : "text"}`} placeholder="Contraseña" />
                            <InputGroup.Append className="input-group-addon " onClick={hideShowPasword}>
                                {form.isPassWordHidden
                                    ? <Icon.Eye className />
                                    : <Icon.EyeSlash className />
                                }
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formGroupPasswordConfirm">
                        <InputGroup size="sm">
                            <Form.Control className="form-input" type={`${form.isPassWordHidden ? "password" : "text"}`} placeholder="Contraseña" />
                            <InputGroup.Append className="input-group-addon" onClick={hideShowPasword}>
                                {form.isPassWordHidden
                                    ? <Icon.Eye className />
                                    : <Icon.EyeSlash className />
                                }
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                    <Button className="form-button-custom" variant="primary" size="lg" block>
                        Registrarme
                    </Button>
                </Form>
                             
            </Container>
        </section >

    );
}