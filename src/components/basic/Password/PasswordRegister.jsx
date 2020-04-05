import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import * as Icon from 'react-bootstrap-icons'

export const PasswordRegister = (props) => {

    const [isPassWordHidden, setHiddenPassword] = useState(true);
    const [password, setPass] = useState("");
    const [passwordConfirm, setPassConfirm] = useState("");

    const hideShowPasword = (event) => {
        event.preventDefault()   
        setHiddenPassword(!isPassWordHidden)
    }

    const handlePass = event => {    
        setPass(event.target.value)
        props.gettingValue(event)
    }

    const handlePassConfirm = event => {    
        setPassConfirm(event.target.value)
        props.gettingValueConfirm(event)
    }


    return (<fragment>
            <Form.Group controlId="formGroupPassword">
                <InputGroup size="sm">
                    <Form.Control required onBlur={props.onBlur} name={props.name} className="form-input" type={`${isPassWordHidden ? "password" : "text"}`} placeholder="Contraseña" onChange={handlePass}/>
                        <InputGroup.Append className="input-group-addon " onClick={hideShowPasword}>
                            {isPassWordHidden
                                ? <Icon.Eye className />
                                : <Icon.EyeSlash className />
                            }
                        </InputGroup.Append>
                </InputGroup>
                <Form.Control.Feedback type="invalid">
                    Por favor ingresa un contraseña valido.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGroupPasswordConfirm">
                <InputGroup size="sm">
                    <Form.Control required onBlur={props.onBlur} name={props.nameConfirm} className="form-input" type={`${isPassWordHidden ? "password" : "text"}`} placeholder="Contraseña" onChange={handlePassConfirm} />
                        <InputGroup.Append className="input-group-addon" onClick={hideShowPasword}>
                                {isPassWordHidden
                                ? <Icon.Eye className />
                                : <Icon.EyeSlash className />
                                }
                    </InputGroup.Append>                            
                </InputGroup>
                <Form.Control.Feedback type="invalid">
                    Por favor ingresa un contraseña valido.
                </Form.Control.Feedback>
                        
            </Form.Group>
            </fragment>
    )
}