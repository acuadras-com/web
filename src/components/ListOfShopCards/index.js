import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { ShopCard } from '../ShopCard'
import { Spinner } from '../Spinner'
import {DivList, Container} from './styles'
import { FaRegFrown } from 'react-icons/fa'
import { FaRegMeh } from 'react-icons/fa'
import { getShops } from '../../services/shopService';

const mockShops =  [
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

const ListOfShopCards = (props) => {

    const [shops, setShops] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect (() => {
        ( async function () {
            setLoading(true)
            
            try {
                var resp = await getShops(props.ubication, props.category)
                setShops(resp)
            } catch(error) {
                setError(true)
                console.log(error)
            }
            setLoading(false)
        })();
    }, [props.ubication, props.category])
    
 
    const Error = () =>{
        return <>
            Error  
            <FaRegFrown size="200" color="f1f3f5" />
        </>
    }
    const EmptyList = () =>{
        return <>
            Lista vacia 
            <FaRegMeh size="200" color="f1f3f5" />
        </>
    }

    return (

        <Container>
            <DivList>
                {shops.length > 0 ?
                    <div className="card-columns">
                        {shops.map(shop => <ShopCard key={shop.id} {...shop} />)}
                    </div>
                    :(<>
                        {loading
                            ? <Spinner />
                            :<>
                                {error 
                                    ?<Error />
                                    :<EmptyList />
                                }
                            </>
                        }
                      </>
                    )
                }
            </DivList>
        </Container>
    )
}

const mapDispatchToProps = {
    getShops,
  }

const mapStateToProps = reducers => {
    return {
        ubication: reducers.shopUserReducer.ubication,
        category: reducers.shopsListReducer.selectedCategory
    }
}
      
export default connect(mapStateToProps,  mapDispatchToProps)(ListOfShopCards);