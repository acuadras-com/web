import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

export const InputText = (props) => {
    
    const [form, setValues] = useState({
        fieldActive: false,        
        text: props.text
    });

    const [value, setValue] = useState(props.value!==undefined?props.value:"");

    const changeField = () => {
        setValues({
            ...form,
            fieldActive: !form.fieldActive
        })
    }
    const handleInput = event => {    
        setValue(event.target.value)
        props.gettingValue(event)
    }

    

    return (
        <Form.Group className="input-group-custom" >
            <Form.Control name={props.name} className={`floating-label form-input ${props.inputStyles}`} type={props.typeInput} required onFocus={changeField} onBlur={changeField} value={value} onChange={handleInput}/>
            <Form.Label className={`field-inactive ${form.fieldActive || value !== '' ? "field-active" : ""} ${props.labelStyles}`}>{form.text}</Form.Label>
            <Form.Control.Feedback type="invalid">
               Por favor ingresa un {form.text} valido.
            </Form.Control.Feedback>
        </Form.Group>
    )
}