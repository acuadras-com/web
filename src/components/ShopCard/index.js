import React from 'react'
import { ImaWrapper, Image, Span, DescriptionDiv } from './styles'
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from 'react-icons/io'
import { Container, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom';

const DEFAULT_IMAGE = 'https://tutenderoshopfiles.s3.us-east-2.amazonaws.com'

export const ShopCard = ({id, photoUrl, name='Nombre Comercio', description='Productos de Calidad', categories=[], open=true}) => {
    
    var imgUrl = photoUrl
    
    if(photoUrl === undefined)
    {
        imgUrl =  DEFAULT_IMAGE +'/pf_'+categories[0]+'_default.jpg';
    }
    
    return (
        
        <div class="card" >
            <Image class="card-img-top" src={imgUrl} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{description} <Span>{open?(<><IoMdRadioButtonOn size='20px' /> Abierto</>):(<><IoMdRadioButtonOff size='20px'/>Cerrado</>)}</Span></p>
                <Link to={`/perfil-comercio?id=${id}`}>
                    <div class="btn btn-primary">VER DETALLE</div>
                </Link>
            </div>
        </div>
    )
}