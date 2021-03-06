import React from 'react'
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import { MainContainer, DivList, Container, SearchContainer, RoundIconContainer } from './styles'
import { FaToolbox } from 'react-icons/fa'
import { GiShop } from "react-icons/gi";
import { useHistory } from "react-router-dom";

import InputLocation from "../../components/basic/InputLocation"



const SelectService = (props) => {

  const history = useHistory();

  function handleClick() {
    history.push("/principal");
  }
    return (
        <>
        <MainContainer padding="80px">
        
        
        <Container>


        <SearchContainer visible="true">
            Donde te encuentras?
            <InputLocation />
          Que estas Buscando?
        </SearchContainer>
            <DivList>
          <CardDeck>
            <Card>
              <RoundIconContainer>
                <GiShop size="50" />
              </RoundIconContainer>
              <Card.Body>
                
                <Card.Title><h5>TIENDAS</h5></Card.Title>
                <Card.Text>
                  Tus tiendas preferidas y cercanas
                </Card.Text>
              </Card.Body>
              
            </Card>
            <Card>
              <RoundIconContainer>
                <FaToolbox size="50" />
              </RoundIconContainer>
              <Card.Body>
                <Card.Title><h5>SERVICIOS / SUMINISTROS</h5></Card.Title>
                <Card.Text>
                  Instalaciones , Reparaciones , Mantenimientos ...
                </Card.Text>
              </Card.Body>
              
            </Card>
            
          </CardDeck>
          </DivList>
          <p></p>
          <Button className="form-button-custom" onClick={handleClick} variant="primary" size="lg" block>
                        Continuar
                    </Button>
          </Container>
          
        </MainContainer>
        

        </>
    )
}

const mapStateToProps = reducers => {
  return {
      ubication: reducers.shopUserReducer.ubication
  }
  }
    
  export default connect(mapStateToProps, null)(SelectService);