import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../../assets/styles/components/shop/Profile.scss'
import profilePicture from '../../assets/styles/components/shop/carniceria.png'

export const Profile = (props) => {

    const [shop, setValues] = useState({
        nameShop: props.nameShop !== undefined && props.nameShop !== '' ? props.nameShop : "Nombre Comercio",
        description: props.description !== undefined && props.description !== '' ? props.description :
            "Descripción de su comercio, los productos que venden, la historia o cualquier aspecto relevante de su negocio",
        profilePicture: props.profilePicture !== undefined && props.profilePicture !== '' ? props.profilePicture : profilePicture

    });

    return (
        <section className="default-container">
            <section className="no-padding col-xs-12 col-sm-12">
            <Container className="shop-section" fluid>

                <Row>
                    <Col lg={8} md={8} sm={12} xs={12} className="div-profile-header">
                        <div className="profile-picture" style={{ backgroundImage: `url(${shop.profilePicture})` }}></div>
                    </Col>
                    <Col className="div-profile-header">
                        <Card bg="Success" className="profile-picture">
                            <Card.Header><Card.Title>{shop.nameShop}</Card.Title></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {shop.description}
                                </Card.Text>
                                <Button className="form-button-custom">Contactar</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
            </section>
            <section  className="no-padding col-xs-12 col-sm-12">
            <Container className="shop-section" fluid>
                <h4 className="title-information">Horarios y ubicación de {shop.nameShop}</h4>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={6} className="div-profile-header">
                        test
                    </Col>
                    <Col className="div-profile-header">
                        test2
                    </Col>
                </Row>
            </Container>
            </section>
        </section>

    )
}