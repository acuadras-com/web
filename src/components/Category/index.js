import React from 'react'
import {Anchor, Image} from './styles'

const DEFAULT_IMAGE = '/img/icono_vegetables.JPG'

export const Category = ({icon = DEFAULT_IMAGE, path='', name='?'}) => (

    <Anchor href={path}>
        <Image src={icon}></Image>
        {name}
    </Anchor>
)