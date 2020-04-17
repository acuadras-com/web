import React, { useState } from 'react'
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container'
import { InputText } from '../../components/basic/Input-Text/InputText'
import  ListOfCategories from '../../components/ListOfCategories'
import { ListOfShopCards } from '../../components/ListOfShopCards'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import {Category}  from '../../components/Category'
import { FaSearch, FaUser } from 'react-icons/fa'
import { FaToolbox } from 'react-icons/fa'
import { GiShop } from "react-icons/gi";
import { NavDesktop, NavMobile, MainContainer, SearchContainer, SearchInNav, RoundIconContainerNav, RowNav } from './styles'

const CustomerMain = (props) => {
    
    const [position, setPosition] = useState({
        address: props.ubication !== undefined ? props.ubication.address : "",
        neighborhood: props.ubication !== undefined ? props.ubication.neighborhood : "",
        latitude: props.ubication !== undefined ? props.ubication.latitude : 4.60971,
        longitude: props.ubication !== undefined ? props.ubication.longitude : -74.08175
      });

      const [clickedNav, setClickedNav] = useState({name:'', visible:false});

    const settingLocattion = event => {
        event.preventDefault();
    
        props.history.push({
          pathname: "/setting-profile-shop",
          search: `?lat=${position.latitude}&lng=${position.longitude}`
        })
      }

      const Search = () => {
          return <Form inline>
                <Form.Control type="text" placeholder="Buscar tienda" />
                <Button className="form-button-custom" variant="primary" size="lg" block disabled>Buscar</Button>
            </Form>
      }

      if (props.ubication == undefined) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        })
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
            <Form.Group  >
                <Form.Control name="address" onClick={settingLocattion} onFocus={settingLocattion} type="text" required value={position.address} placeholder="Ingresa tu dirección" />
                <Form.Control.Feedback type="invalid">
                    Por favor ingresa una dirección valida.
                </Form.Control.Feedback>
            </Form.Group>
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
                        </NavDropdown>
                    
                    <SearchInNav visible ={props.ubication != undefined}>
                        <Form inline>
                            
                            <div>Ubicación</div>
                            <span>&nbsp;&nbsp;</span>
                            <Form.Group  >
                                <Form.Control name="address" onClick={settingLocattion} onFocus={settingLocattion} type="text" required value={position.address} placeholder="Ingresa tu dirección" />
                                <Form.Control.Feedback type="invalid">
                                    Por favor ingresa una dirección valida.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </SearchInNav>
                    

            </Navbar>
        </NavDesktop>
        
        
        <div className="card-container">
           
       
            <SearchContainer visible ={props.ubication == undefined}>
                
                Donde te encuentras?
                <Form.Group  >
                    <Form.Control name="address" onClick={settingLocattion} onFocus={settingLocattion} className="form-input" type="text" required value={position.address} placeholder="Ingresa tu dirección" />
                    <Form.Control.Feedback type="invalid">
                        Por favor ingresa una dirección valida.
                    </Form.Control.Feedback>
                </Form.Group>
                
            </SearchContainer>
        
            <Container className="form-container">
                <ListOfCategories />
            </Container>

            <ListOfShopCards />
           
        </div >
        </MainContainer>
</> 
    );
}
 
const mapStateToProps = state => {
return {
    ubication: state.ubication
}
}
  
export default connect(mapStateToProps, null)(CustomerMain);