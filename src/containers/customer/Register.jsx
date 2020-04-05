import React, { useState } from 'react'
import '../../components/basic/Input-Text/InputText.scss'
import '../../assets/styles/components/customer/Register.scss'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { InputText } from '../../components/basic/Input-Text/InputText'
import { PasswordRegister } from '../../components/basic/Password/PasswordRegister'
import FacebookLogin from 'react-facebook-login';


export const Register = () => {

    const [form, setValues] = useState({
        isPassWordHidden: true,
        nameFieldValue: "",
        fieldActive: false
    });

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");    

    const [pass, setPass] = useState("");

    const [passConfirm, setPassConfirm] = useState("");
    

    const onChangeName = event => {
        setName(event.target.value)
    }

    const onChangePass = event => {
        setPass(event.target.value)
    }

    const onChangePassConfirm = event => {
        setPassConfirm(event.target.value)
    }

    const onChangeEmail = event => {
        setEmail(event.target.value)
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
                    <InputText typeInput="text" text="Nombre Completo" gettingValue={onChangeName} />

                    <InputText typeInput="email" text="Correo Electrónico" gettingValue={onChangeEmail} />

                    <PasswordRegister gettingValue={onChangePass} gettingValueConfirm={onChangePassConfirm}/>
                    <Button className="form-button-custom" variant="primary" size="lg" block>
                        Registrarme
                    </Button>
                </Form>
                             
            </Container>
        </section >

    );
}