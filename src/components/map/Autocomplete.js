import React from "react";
import { Form } from 'react-bootstrap'
/* global google */


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["address"]});
    this.autocomplete.setComponentRestrictions({'country': "co"});
    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged(){
    const place = this.autocomplete.getPlace();
    
    this.props.onPlaceLoaded({
      address: place.formatted_address,
    neighborhood: place.vicinity,
    latitude: place.geometry.location.lat(),
    longitude: place.geometry.location.lng()
    });
  }



  render() {
    return (
        <Form.Group className="input-group-custom" >
                  <Form.Control ref={this.autocompleteInput} id="autocomplete" name="address" className="form-input" type="text"  placeholder="Ingresa tu dirección" />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa una dirección valida.
                  </Form.Control.Feedback>
        </Form.Group>
    );
  }
}
export default SearchBar;