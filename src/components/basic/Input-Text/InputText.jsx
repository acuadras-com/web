import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

export const InputText = (props) => {
    
    const [form, setValues] = useState({
        fieldActive: false,        
        text: props.text
    });

    const [value, setValue] = useState("");

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
        <Form.Group className="input-group-custom" controlId="formGroupName">
            <Form.Control name={form.text} className={`floating-label form-input ${props.inputStyles}`} type="text" required onFocus={changeField} onBlur={changeField} value={form.value} onChange={handleInput}/>
            <Form.Label className={`field-inactive ${form.fieldActive || value != '' ? "field-active" : ""} ${props.labelStyles}`}>{form.text}</Form.Label>
        </Form.Group>
    )
}