import React, { useState } from 'react'
import { Form, Container, Col, Row } from 'react-bootstrap'
import { Link as LinkRoute } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'
import { Typeahead } from 'react-bootstrap-typeahead'
import categoriesSells from '../profile/categories';
import services from '../profile/services';

const EditCategory = (props) => {

    const [selected, setSelected] = useState([]);
    const [businessType,setBusinessType]=useState("suministros");

    const onChangeType = event => {
        setBusinessType(event.target.value)
    }


    return (
        <section className="default-container">
            <Container className="shop-section" fluid>
                <h4 className="title-information">Categorías</h4>
                <Form.Group className="text-center" controlId="exampleForm.SelectCustom">
                    <Form.Label>¿Tu negocio es de suministros(droguerías, ferreterías, venta de productos) o de servicios(plomería u otros)?</Form.Label>
                    <Form.Control as="select" value={businessType} onChange={onChangeType} custom>
                        <option value="servicios">Servicios</option>
                        <option value="suministros">Suministros</option>
                        <option value ="ambos">Ambos</option>
                    </Form.Control>
                </Form.Group>
                <Form.Label>Selecciona una o más categorias para tu negocio:</Form.Label>
                <Typeahead
                    id="basic-typeahead-example"
                    labelKey="name"
                    multiple={true}
                    onChange={setSelected}
                    options={(businessType=="servicios"?services:categoriesSells).concat(businessType=="ambos"?services:[])}
                    placeholder="Seleciona una o más categorías..."
                    selected={selected}
                />
                <div className="text-center">
                    <LinkRoute to="/editar-perfil"><Icon.ArrowLeft />Volver</LinkRoute>
                </div>
            </Container>
        </section>
    )

}
export default EditCategory