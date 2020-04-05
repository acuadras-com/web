import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Map from '../../components/map/Map';
import '../../assets/styles/components/shop/SettingProfileShop.scss'


class SettingProfile extends Component {
	render() {
		return (
			<section className="default-container">
				    <section className="setting-shop-section">
						<Map
							google={this.props.google}
							center={{ lat: 18.5204, lng: 73.8567 }}
							height='300px'
							zoom={15}
						/>
					</section>
					<section className="setting-shop-section text-center">
						<Button className="form-button-custom" size="lg">
						  REGÍSTRATE
						</Button>
					</section>									
			</section>
		);
	}
}

export default SettingProfile;