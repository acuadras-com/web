import React, { useState } from 'react'
import { connect } from 'react-redux';
import ListOfShopCards from '../../components/ListOfShopCards'
import InputLocation from "../../components/basic/InputLocation"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'

import {Category}  from '../../components/Category'
import { FaSearch, FaUser } from 'react-icons/fa'
import { FaToolbox } from 'react-icons/fa'
import { GiShop } from "react-icons/gi";
import { NavDesktop, NavMobile, MainContainer, SearchContainer, SearchInNav, RoundIconContainerNav, RowNav } from './styles'
import { selectedCategory } from '../../actions/shopActions'

const CustomerMain = (props) => {    
    
    const [clickedNav, setClickedNav] = useState({name:'', visible:false});

    const handleSelectCategory = (selectedKey) => {
        props.selectedCategory(selectedKey.substring(1))
    }

    const Search = () => {
        return <Form inline>
            <Form.Control type="text" placeholder="Buscar tienda" />
            <Button className="form-button-custom" variant="primary" size="lg" block disabled>Buscar</Button>
        </Form>
    }      

    return (
        <>
        <MainContainer>
        <NavMobile>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) =>  setClickedNav({name:selectedKey, visible:!clickedNav.visible})}
                >
                <Nav.Item>
                    <Nav.Link eventKey="search"><FaSearch /></Nav.Link>
                    
                </Nav.Item>
                <Nav.Item>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            <Category id='1' name= 'Panaderia'
                            icon= '/img/icono-ensalada.jpg'
                            path='' />
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            <Category id='1' name= 'Reposteria'
                            icon= '/img/icono_cheff.png'
                            path='' /></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            <Category id='3' name= 'Reposterias'
                            icon= '/img/icono_cheff.png'
                            path='' /></NavDropdown.Item>
                    </NavDropdown>
                </Nav.Item>
                {props.ubication?
                    <Nav.Item>
                        <Nav.Link eventKey="location">Ubicación</Nav.Link>
                    </Nav.Item>
                    :<span/>
                }
                <Nav.Item>
                    <Nav.Link eventKey="user">
                        <FaUser />
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            {clickedNav.name ==='search' && clickedNav.visible?
                <Search />
            :<span/>
            }
            {clickedNav.name ==='location' && clickedNav.visible?
                <InputLocation />
            :<span/>
            }
        </NavMobile>

        <NavDesktop>
  
            <Navbar expand="lg">
                
                
                <Nav.Link>
                    <RowNav><RoundIconContainerNav><GiShop size="30" /></RoundIconContainerNav></RowNav>
                    <RowNav>Tiendas</RowNav>
                </Nav.Link>
                <Nav.Link>
                    <RowNav><RoundIconContainerNav><FaToolbox size="30" /></RoundIconContainerNav></RowNav>
                    <RowNav>Servicios</RowNav>
                </Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown" onSelect={handleSelectCategory}>
                            <NavDropdown.Item href="#panaderia">
                                <Category id='1' name= 'Panaderia'
                                icon= '/img/icono-ensalada.jpg'
                                path='' />
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#reposteria">
                                <Category id='1' name= 'Reposteria'
                                icon= '/img/icono_cheff.png'
                                path='' /></NavDropdown.Item>
                        </NavDropdown>
                    
                    <SearchInNav visible ={props.ubication != undefined}>
                        <Form inline>
                            
                            <div>Ubicación</div>
                            <span>&nbsp;&nbsp;</span>
                            <InputLocation />
                        </Form>
                    </SearchInNav>
                    

            </Navbar>
        </NavDesktop>
        
        
        <div className="card-container">
           
       
            <SearchContainer visible ={props.ubication == undefined}>
                
                Donde te encuentras?
                <InputLocation />
                
            </SearchContainer>
        
            

            <ListOfShopCards />
        
        </div >
        </MainContainer>
</> 
    );
}

const mapDispatchToProps = {
    selectedCategory
}
const mapStateToProps = reducers => {
    return {
        ubication: reducers.shopUserReducer.ubication
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CustomerMain);