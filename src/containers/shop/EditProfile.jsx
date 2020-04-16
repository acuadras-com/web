import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import profilePicture from '../../assets/styles/components/shop/carniceria.png'
import * as Icon from 'react-bootstrap-icons'
import { Button, Form, Feedback } from 'react-bootstrap'
import '../../assets/styles/components/shop/EditProfile.scss'


const EditProfile = (props) => {

    const [shop, setValues] = useState({
        nameShop: props.nameShop !== undefined && props.nameShop !== '' ? props.nameShop : "Nombre Comercio",
        description: props.description !== undefined && props.description !== '' ? props.description :
            "Descripción de su comercio, los productos que venden, la historia o cualquier aspecto relevante de su negocio",
        profilePicture: props.profilePicture !== undefined && props.profilePicture !== '' ? props.profilePicture : profilePicture,
        lat: props.lat !== undefined && props.lat !== '' ? props.lat : 4.5994,
        lng: props.lat !== undefined && props.lat !== '' ? props.lat : 74.0771,
        schedule: {
            monday: props.schedule !== undefined && props.schedule.monday !== undefined && props.schedule.monday !== '' ? props.schedule.monday : '8 a.m - 5 p.m.',
            tuesday: props.schedule !== undefined && props.schedule.tuesday !== undefined && props.schedule.tuesday !== '' ? props.schedule.tuesday : '8 a.m - 5 p.m.',
            wednesday: props.schedule !== undefined && props.schedule.wednesday !== undefined && props.schedule.wednesday !== '' ? props.schedule.wednesday : '8 a.m - 5 p.m.',
            thursday: props.schedule !== undefined && props.schedule.thursday !== undefined && props.schedule.thursday !== '' ? props.schedule.thursday : '8 a.m - 5 p.m.',
            friday: props.schedule !== undefined && props.schedule.friday !== undefined && props.schedule.friday !== '' ? props.schedule.friday : '8 a.m - 5 p.m.',
            saturday: props.schedule !== undefined && props.schedule.saturday !== undefined && props.schedule.saturday !== '' ? props.schedule.saturday : '8 a.m - 5 p.m.',
            sunday: props.schedule !== undefined && props.schedule.sunday !== undefined && props.schedule.sunday !== '' ? props.schedule.sunday : '8 a.m - 5 p.m.',
        },
        contactNumber: props.contactNumber !== undefined && props.contactNumber !== '' ? props.contactNumber : "313 244 5618",
        domicilie: props.domicilie !== undefined && props.domicilie !== '' ? props.domicilie : "Si"
    });

    const SelectOption = () =>{
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
            <section className="no-padding col-xs-12 col-sm-12">
                <Container fluid>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className="div-profile-header">
                            <div className="profile-picture" style={{ backgroundImage: `url(${shop.profilePicture})` }}></div>
                            <div className="edit_picture">
                                <Icon.Camera className="center" /> Cambiar Foto
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="no-padding col-xs-12 col-sm-12">
                <Container className="shop-section" fluid>
                    <h4 className="title-information">Información de contacto {shop.nameShop}</h4>
                    <Form noValidate>
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
                        <Button type="submit" className="form-button-custom center edit-button" variant="primary" size="lg" block>Guardar</Button>
                       
                    </Form>


                </Container>

            </section>
        </section >
    )
}

export default EditProfile;