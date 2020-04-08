import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'
import Map from '../../components/map/Map';
import Axios from 'axios';
import '../../assets/styles/components/shop/SettingProfileShop.scss'


const SettingProfile = (props) => {

	

	const [actionState, setActionState] = 
      useState({sending: false, error: null});

	const coreBaseUrl = 'http://3.21.21.68:9072/tutendero';

	const [position, setPosition] = useState({
		latitude: 4.60971,
		longitude: -74.08175
	});

	const [isMapReady, setFlag] = useState(false);


	const saveUser = async () => {
		setActionState({ sending: true, error: null, });		

		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();

		today = mm + '/' + dd + '/' + yyyy;
		const user = {
			type: "STORE_USER",
			creationDate: today,
			email: props.user.email,
			password: props.user.password,
			name: props.user.name,
			role: "SHOP_PRINCIPAL"
		}

		try {
			console.log('Enviando ...')
			const responseU = await Axios.post(`${coreBaseUrl}/user`, user);
			//const responseS = await Axios.post(`${coreBaseUrl}/shop`, shop);

			console.log("Respuesta usuario" + responseU);
			//console.log(responseS);

			if (responseU.status === 200) {
				setActionState({ sending: false, error: 'OK' })
			} else {
				setActionState({ sending: false, error: 'Error, por favor intente nuevamente' })
			}

		} catch (error) {

			console.log("Error usuario " + error);
			setActionState({ sending: false, error: "A ocurrido un error por favor intente mas tarde", });
		}
	};

	navigator.geolocation.watchPosition((position) => {
		console.log("Latitude is :", position.coords.latitude);
		console.log("Longitude is :", position.coords.longitude);
		setPosition({
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		})
		setFlag(true)
	})

	const RegistroExitoso = () => {
		return <div className="registroExitoso">
		  <h3>Felicitaciones! Ahora haces parte de TuTendero, proximamente nos comunicaremos para continuar con el proceso. </h3>
		  <a href="">Iniciar sesión</a>
		</div>
	  }
	  console.log(props.user)
	return (
		<section className="default-container">
			<div>nombre usuario: ${props.user.name}</div>
			{actionState.error === 'OK'
          		?  <RegistroExitoso />
          		: (
          		<>
            	{actionState.error 
              	? <span className="spanServiceError">{actionState.error}</span>
              	: <span>	&nbsp;</span>
               }
			<section className="setting-shop-section">
				{isMapReady ?
					<Map
						google={props.google}
						center={{ lat: position.latitude, lng: position.longitude }}
						height='300px'
						zoom={15}
					/> : ""
				}
			</section>
			<section className="setting-shop-section text-center">
				
			{!actionState.sending
                  ? <Button className="form-button-custom" size="lg">REGÍSTRATE</Button>
                  : <Button disabled className="form-button-custom" size="lg">REGÍSTRATE</Button>
                }				
			</section>
			</>
		)}
		</section>
	);
}

  
  const mapStateToProps = state => {
	return  {
	  user: state.user
	}
  }
  
  export default connect(mapStateToProps, null)(SettingProfile);