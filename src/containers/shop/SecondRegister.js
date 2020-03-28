import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Map from '../../components/map/Map';
import Button from 'react-bootstrap/Button';


class SecondRegister extends Component {
	render() {
		return (
			<section className="register">
				<section className="register__container">
					<Map
						google={this.props.google}
						center={{ lat: 18.5204, lng: 73.8567 }}
						height='300px'
						zoom={15}
					/>
					<Link to="2-registro">
						<a class="button">Siguiente</a>
					</Link>
				</section>
			</section>
		);
	}
}

export default SecondRegister;