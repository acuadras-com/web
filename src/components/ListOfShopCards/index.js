import React from 'react'
import { ShopCard } from '../ShopCard'
import {DivList, Container} from './styles'



const shops =  [
    {
        id:2, 
        photoUrl: 'https://tutenderoshopfiles.s3.us-east-2.amazonaws.com/pf_shop_2.JPG',
        name:'Carniceria el Paisa', 
        description:'Todo tipo de carnes de calidad traidas directamente del llano colombiano', 
        categories: ['carniceria'],
        open:true
    },
    {
        id:3,
        photoUrl: 'https://tutenderoshopfiles.s3.us-east-2.amazonaws.com/pf_shop_3.jpg',
        name:'Panaderia Jesi', 
        description:'Pan Fresco todos los días', 
        categories: ['panaderia'],
        open:true
    },
    {
        id:4,
        photoUrl: 'https://tutenderoshopfiles.s3.us-east-2.amazonaws.com/pf_shop_4.jpg',
        name:'Drogueria farmas', 
        description:'Salud y medicamentos, Belleza, Cuidado personal', 
        categories: ['farmacia'],
        open:false
    },
    {
        id:1,
        photoUrl: 'https://tutenderoshopfiles.s3.us-east-2.amazonaws.com/pf_shop_1.jpg',
        name:'Fruver don Pache', 
        description:'La frescura del campo a su hogar', 
        categories: ['fruver'],
        open:false
    },
    {
        id:5,
        name:'Drogueria superfarma', 
        description:'Salud y medicamentos, Belleza, Cuidado personal', 
        open:false,
        categories: ['farmacia']
    },
    {
        id:6,
        name:'Pan del Sur', 
        description:'Pan fresco todos los días', 
        open:false,
        categories: ['panaderia']
        
    },
    {
        id:7,
        name:'Super Fruver', 
        description:'Fruta seleccionada de la mejor calidad', 
        open:false,
        categories: ['fruver']
    },
    {
        id:8,
        name:'Drogueria superfarma', 
        description:'Salud y medicamentos, Belleza, Cuidado personal', 
        open:false,
        categories: ['farmacia']
    }

]

export const ListOfShopCards = () => {
    return (
        <Container>
            <DivList>
            <div className="card-columns">
                {shops.map(shop => <ShopCard {...shop} />)}
            </div>
            </DivList>
        </Container>
    )
}