import React from 'react'
import { connect } from 'react-redux';

import {Category}  from '../Category'
import {List, Item} from './styles'

const ListOfCategories = ({categories}) => {

    return (
        <List>
            {
                categories.map(category => 
                    <Item key={category.id}>
                        <Category {...category} />
                    </Item>)
            }
        </List>        
    )

}

const mapStateToProps = state => {
    return {
      categories: state.categories,
    }
}

export default connect(mapStateToProps, null)(ListOfCategories);