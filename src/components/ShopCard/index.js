import React from 'react'
import { ImaWrapper, Image, Span, DescriptionDiv } from './styles'
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from 'react-icons/io'
import { Container, Row } from 'react-bootstrap'

const DEFAULT_IMAGE = '/img/shop_demo.JPG'

export const ShopCard = ({id, photoUrl=DEFAULT_IMAGE, name='Nombre Comercio', description='Productos de Calidad', open=true}) => {

    return (
        <div class="card" >
            <img class="card-img-top" src={photoUrl} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{description} <Span>{open?(<><IoMdRadioButtonOn size='20px' /> Abierto</>):(<><IoMdRadioButtonOff size='20px'/>Cerrado</>)}</Span></p>
                    
                <a href="#" class="btn btn-primary">VER DETALLE</a>
            </div>
        </div>
    )
}