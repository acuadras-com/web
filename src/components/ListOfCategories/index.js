import React from 'react'
import {Category}  from '../Category'
import {List, Item} from './styles'

export const ListOfCategories = () => {

    const categories =  [
        {
            id:1,
            name: 'Fruver',
            icon: '/img/icono-ensalada.jpg',
            path:''
        },
        {
            id:2,
            name: 'Drogerias',
            icon: '/img/icono_farmacia.JPG',
            path:''
        },
        {
            id:2,
            name: 'Menu',
            icon: '/img/icono_cheff.png',
            path:''
        }
    ]
    return (
        <List>
            {
                categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
            }
        </List>        
    )

}