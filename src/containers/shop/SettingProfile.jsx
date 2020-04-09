import React, { useState } from 'react';
import { connect } from 'react-redux';
import Map from '../../components/map/Map';
import '../../assets/styles/components/shop/SettingProfileShop.scss'
import { saveUserToState } from '../../actions';



const SettingProfile = (props) => {

	const [position, setPosition] = useState({
		address: "",
		neighborhood: "",
		latitude: props.location !== undefined && props.location.search !== undefined ? Number(new URLSearchParams(props.location.search).get('lat')) : 4.60971,
		longitude: props.location !== undefined && props.location.search !== undefined ? Number(new URLSearchParams(props.location.search).get('lng')) : -74.08175
	});

	const updateLocation = (ubication) => {
		setPosition({
			address: ubication.address,
			neighborhood: ubication.neighborhood,
			latitude: ubication.latitude,
			longitude: ubication.longitude
		})
		props.saveUserToState({
			user:props.user,
			shop:props.shop,
			ubication: ubication
		})

		props.history.goBack()
	}

	return (
		<section className="default-container">
			<section className="setting-shop-section">

				<Map
					google={props.google}
					center={{ lat: position.latitude, lng: position.longitude }}
					height='300px'
					zoom={15}
					updateLocation={updateLocation}
				/>

			</section>

		</section>
	);
}


const mapDispatchToProps = {
	saveUserToState
}

const mapStateToProps = state => {
	return {
		user: state.user,
		shop: state.shop,
		ubication: state.ubication
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingProfile);