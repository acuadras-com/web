import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import '../../assets/styles/components/shop/Profile.scss'
import { GoogleMap,withGoogleMap,Marker,withScriptjs } from 'react-google-maps'
import profilePicture from '../../assets/styles/components/shop/carniceria.png'

export const Profile = (props) => {

    const [shop, setValues] = useState({
        nameShop: props.nameShop !== undefined && props.nameShop !== '' ? props.nameShop : "Nombre Comercio",
        description: props.description !== undefined && props.description !== '' ? props.description :
            "Descripción de su comercio, los productos que venden, la historia o cualquier aspecto relevante de su negocio",
        profilePicture: props.profilePicture !== undefined && props.profilePicture !== '' ? props.profilePicture : profilePicture,
        lat: props.lat !== undefined && props.lat !== '' ? props.lat : 4.5994,
        lng: props.lat !== undefined && props.lat !== '' ? props.lat : 74.0771,
        schedule : {
            monday: props.schedule !== undefined && props.schedule.monday !== undefined && props.schedule.monday !==''? props.schedule.monday: '8 a.m - 5 p.m.',
            tuesday: props.schedule !== undefined && props.schedule.tuesday !== undefined && props.schedule.tuesday !==''? props.schedule.tuesday: '8 a.m - 5 p.m.',
            wednesday: props.schedule !== undefined && props.schedule.wednesday !== undefined && props.schedule.wednesday !==''? props.schedule.wednesday: '8 a.m - 5 p.m.',
            thursday: props.schedule !== undefined && props.schedule.thursday !== undefined && props.schedule.thursday !==''? props.schedule.thursday: '8 a.m - 5 p.m.',
            friday: props.schedule !== undefined && props.schedule.friday !== undefined && props.schedule.friday !==''? props.schedule.friday: '8 a.m - 5 p.m.',
            saturday: props.schedule !== undefined && props.schedule.saturday !== undefined && props.schedule.saturday !==''? props.schedule.saturday: '8 a.m - 5 p.m.',
            sunday: props.schedule !== undefined && props.schedule.sunday !== undefined && props.schedule.sunday !==''? props.schedule.sunday: '8 a.m - 5 p.m.',
        },
        contactNumber: props.contactNumber !== undefined && props.contactNumber !== '' ? props.contactNumber : "313 244 5618",
        domicilie: props.domicilie !== undefined && props.domicilie !== '' ? props.domicilie : "Si"
    });

    const [isDescriptionHidden, setDescriptionFlag] = useState(false)

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: shop.lat, lng: shop.lng }}
        >
          <Marker
            position={{ lat: shop.lat, lng: shop.lng }}
          />
        </GoogleMap>
    ));


   const changeTab = event  => {
    event.preventDefault();
    setDescriptionFlag(!isDescriptionHidden)        
   }   

    return (
        <section className="default-container">
            <section className="no-padding col-xs-12 col-sm-12">
            <Container className="shop-section" fluid>

                <Row>
                    <Col lg={8} md={8} sm={12} xs={12} className="div-profile-header">
                        <div className="profile-picture" style={{ backgroundImage: `url(${shop.profilePicture})` }}></div>
                    </Col>
                    <Col className="div-profile-header">
                        <Card className="profile-picture">
                            <Card.Header>
                                <Row><Nav variant="tabs" defaultActiveKey={`${isDescriptionHidden ? "#contact" : "#description"}`}>
                                    <Nav.Item>
                                        <Nav.Link href="#description" onClick={changeTab}>Descripción</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#contact" onClick={changeTab}>Datos de contacto</Nav.Link>
                                    </Nav.Item>
                                </Nav></Row>
                            </Card.Header>
                            <Card.Body className={`${isDescriptionHidden ? "hide" : ""}`}>
                                <Card.Text>
                                    {shop.description}                                    
                                </Card.Text>                                                             
                            </Card.Body>
                            <Card.Body className={`${!isDescriptionHidden ? "hide" : ""}`} >
                            <Card.Text>
                                    Numero de contacto : {shop.contactNumber}                                    
                                </Card.Text>
                                <Card.Text>
                                    ¿Tiene domicilio? : {shop.domicilie}
                                </Card.Text>    
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
                    <Col lg={6} md={6} sm={12} xs={12} className="div-profile-header">
                    <MapWithAMarker 
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `300px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                    </Col>
                    <Col className="div-profile-header">
                        <Card bg="light" className="profile-picture">
                                <Card.Header className="header-custom">
                                <   Card.Title>Horarios</Card.Title>                                
                                </Card.Header>
                                 <Card.Body>
                                    <Card.Text>
                                        <Row>
                                            <Col>
                                            <Row>Lunes</Row>
                                            <Row>Martes</Row>
                                            <Row>Miercoles</Row>
                                            <Row>Jueves</Row>
                                            <Row>Viernes</Row>
                                            <Row>Sabado</Row>
                                            <Row>Domingo</Row>
                                            </Col>
                                            <Col>
                                                <Row>{shop.schedule.monday}</Row>
                                                <Row>{shop.schedule.tuesday}</Row>
                                                <Row>{shop.schedule.wednesday}</Row>
                                                <Row>{shop.schedule.thursday}</Row>
                                                <Row>{shop.schedule.friday}</Row>
                                                <Row>{shop.schedule.saturday}</Row>
                                                <Row>{shop.schedule.sunday}</Row>
                                            </Col>
                                        </Row>
                                    </Card.Text>                                    
                            </Card.Body>
                        </Card>
                            
                    </Col>
                </Row>
            </Container>
            </section>
        </section>

    )
}