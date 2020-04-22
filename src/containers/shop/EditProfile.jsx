import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import profilePicture from '../../assets/styles/components/shop/carniceria.png'
import * as Icon from 'react-bootstrap-icons'
import { Button, ListGroup } from 'react-bootstrap'
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
                    <h4 className="title-information">Editar perfil</h4>
                    <ListGroup>
                        <ListGroup.Item action href="/editar-informacion-basica">
                            Información basica   <Icon.ArrowRight />
                        </ListGroup.Item>
                        <ListGroup.Item action href="/editar-horario">
                            Horarios <Icon.ArrowRight />
                        </ListGroup.Item>
                        <ListGroup.Item action href="/editar-categoria" >
                            Categorías <Icon.ArrowRight />
                        </ListGroup.Item>
                    </ListGroup>
                    <div className="div-action">
                    <Button type="submit" className="form-button-custom center edit-button" variant="primary" size="lg" block>Guardar</Button>
                    </div>
                </Container>

            </section>
        </section >
    )
}

export default EditProfile;