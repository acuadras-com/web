import React from 'react'
import { ShopCard } from '../ShopCard'

const shops =  [
    {
        id:1, 
        photoUrl: '/img/shop_demo.JPG',
        name:'Carniceria el Paisa', 
        description:'Todo tipo de carnes de calidad traidas directamente del llano colombiano', 
        open:true
    },
    {
        id:2,
        photoUrl: '/img/shop_demo.JPG',
        name:'Panaderia Jesi', 
        description:'Pan Fresco todos los días', 
        open:true
    },
    {
        id:3,
        photoUrl: '/img/shop_demo.JPG',
        name:'Drogueria farmas', 
        description:'Salud y medicamentos, Belleza, Cuidado personal', 
        open:false
    },
    {
        id:4,
        photoUrl: '/img/shop_demo.JPG',
        name:'Drogueria superfarma', 
        description:'Salud y medicamentos, Belleza, Cuidado personal', 
        open:false
    },
    {
        id:5,
        photoUrl: '/img/shop_demo.JPG',
        name:'Drogueria superfarma', 
        description:'Salud y medicamentos, Belleza, Cuidado personal', 
        open:false
    },
    {
        id:6,
        photoUrl: '/img/shop_demo.JPG',
        name:'Drogueria superfarma', 
        description:'Salud y medicamentos, Belleza, Cuidado personal', 
        open:false
    },
    {
        id:7,
        photoUrl: '/img/shop_demo.JPG',
        name:'Drogueria superfarma', 
        description:'Salud y medicamentos, Belleza, Cuidado personal', 
        open:false
    },
    {
        id:8,
        photoUrl: '/img/shop_demo.JPG',
        name:'Drogueria superfarma', 
        description:'Salud y medicamentos, Belleza, Cuidado personal', 
        open:false
    }

]

export const ListOfShopCards = () => {
    return (
        <div className="card-columns">
            {shops.map(shop => <ShopCard {...shop} />)}
        </div>
    )
}