import React from 'react'
import { Image, DefaultImage, ImageWrapper, Span, RoundButton, LinkStyled, CardStyled} from './styles'
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from 'react-icons/io'
import Card from 'react-bootstrap/Card'


const DEFAULT_IMAGE = 'https://tutenderoshopfiles.s3.us-east-2.amazonaws.com'

export const ShopCard = ({id, photoUrl, name='Nombre Comercio', description='Productos de Calidad', categories=[], open=true}) => {
    
    var imgUrl = photoUrl
    
    if(photoUrl === undefined)
    {
        imgUrl =  DEFAULT_IMAGE +'/pf_'+categories[0]+'_default.png';
    }
    
    return (
        <LinkStyled to={`/perfil-comercio?id=${id}`}>
            <CardStyled>
                <ImageWrapper>
                {photoUrl 
                    ?<Image class="card-img-top" src={imgUrl} alt="Card image cap" />
                    :<DefaultImage class="card-img-top" src={imgUrl} alt="Card image cap" />
                }
                </ImageWrapper>
                <Card.Body>
                    <h5 class="card-title">{name}</h5>
                    <Card.Text> <Span>{open?(<><IoMdRadioButtonOn size='20px' /> Abierto</>):(<><IoMdRadioButtonOff size='20px'/>Cerrado</>)}</Span></Card.Text>
                    
                </Card.Body>
            </CardStyled>
        </LinkStyled>
    )
}