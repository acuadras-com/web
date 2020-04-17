import React from 'react'
import { Form, Container, Col, Row } from 'react-bootstrap'
import { Link as LinkRoute } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'

const Hours = (props) => {

    const SelectOption = () => {
        return <Form.Control as="select" value="Choose...">
            <option>5 a.m</option>
            <option>6 a.m</option>
            <option>7 a.m</option>
            <option>8 a.m</option>
            <option>9 a.m</option>
            <option>10 a.m</option>
            <option>11 a.m</option>
            <option>12 a.m</option>
            <option>1 p.m</option>
            <option>2 p.m</option>
            <option>3 p.m</option>
            <option>4 p.m</option>
            <option>5 p.m</option>
            <option>6 p.m</option>
            <option>7 p.m</option>
            <option>8 p.m</option>
            <option>9 p.m</option>
            <option>10 p.m</option>
            <option>11 p.m</option>
        </Form.Control>
    }

    return (
        <section className="default-container">
            <Container className="shop-section" fluid>
                <h4 className="title-information">Horarios</h4>
                <Form.Group as={Row} sm={6} lg={3} xs={6} md={3} >
                    <Form.Label column sm={2}>
                        Lunes
                            </Form.Label>
                    <Col sm={5}>
                        <SelectOption />
                    </Col>
                    <Col sm={5}>
                        <SelectOption />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label column sm={2}>
                        Martes
                            </Form.Label>
                    <Col sm={5}>
                        <SelectOption />
                    </Col>
                    <Col sm={5}>
                        <SelectOption />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label column sm={2}>
                        Miercoles
                            </Form.Label>
                    <Col sm={5}>
                        <SelectOption />
                    </Col>
                    <Col sm={5}>
                        <SelectOption />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label column sm={2}>
                        Jueves
                            </Form.Label>
                    <Col sm={5}>
                        <SelectOption />
                    </Col>
                    <Col sm={5}>
                        <SelectOption />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label column sm={2}>
                        Viernes
                            </Form.Label>
                    <Col sm={5}>
                        <SelectOption />
                    </Col>
                    <Col sm={5}>
                        <SelectOption />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label column sm={2}>
                        Sábado
                            </Form.Label>
                    <Col sm={5}>
                        <SelectOption />
                    </Col>
                    <Col sm={5}>
                        <SelectOption />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label column sm={2}>
                        Domingo
                            </Form.Label>
                    <Col sm={5}>
                        <SelectOption />
                    </Col>
                    <Col sm={5}>
                        <SelectOption />
                    </Col>
                </Form.Group>
                <div className="text-center">
                    <LinkRoute to="/editar-perfil"><Icon.ArrowLeft />Volver</LinkRoute>
                </div>
            </Container>
        </section>
    )
}
export default Hours;