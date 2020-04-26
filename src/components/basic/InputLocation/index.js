import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form'

const InputLocation = (props) => {

    const [position, setPosition] = useState({
        address: props.ubication !== undefined ? props.ubication.address : "",
        neighborhood: props.ubication !== undefined ? props.ubication.neighborhood : "",
        latitude: props.ubication !== undefined ? props.ubication.latitude : 4.60971,
        longitude: props.ubication !== undefined ? props.ubication.longitude : -74.08175
      });
      const history = useHistory();

      const settingLocattion = event => {
        event.preventDefault();
    
        history.push({
          pathname: "/setting-profile-shop",
          search: `?lat=${position.latitude}&lng=${position.longitude}`
        })
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
         <Form.Group  >
            <Form.Control name="address" onClick={settingLocattion} onFocus={settingLocattion} type="text" required defaultValue={position.address} placeholder="Ingresa tu dirección" />
            <Form.Control.Feedback type="invalid">
                Por favor ingresa una dirección valida.
            </Form.Control.Feedback>
        </Form.Group>
        
    )
}
const mapStateToProps = reducers => {
    return {
        ubication: reducers.shopUserReducer.ubication
    }
}

export default connect(mapStateToProps, null)(InputLocation);