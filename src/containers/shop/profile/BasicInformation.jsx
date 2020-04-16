import React, { useState } from 'react'
import { Form, Container, Col } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { Link as LinkRoute } from 'react-router-dom';

const BasicInformation = (props) => {
    return (
        <section className="default-container">
            <Container className="shop-section" fluid>
                <h4 className="title-information">Información basica</h4>
                <Form.Row>
                    <Form.Group className="input-group-custom" as={Col} lg={6} md={6} sm={12} xs={12} >
                        <Form.Control name="address" className="form-input" type="text" required placeholder="Número de contacto" />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa una dirección valida.
                                </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="input-group-custom" as={Col} lg={6} md={6} sm={12} xs={12} >
                        <Form.Control name="address" className="form-input" type="text" required placeholder="Dirección" />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa una dirección valida.
                                </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Describe tu negocio:</Form.Label>
                    <Form.Control className="text-area-custom" as="textarea" rows="3" />
                </Form.Group>
                <div className="text-center">
                    <LinkRoute to="/editar-perfil"><Icon.ArrowLeft />Volver</LinkRoute>
                </div>
            </Container>
        </section>
    )
}

export default BasicInformation