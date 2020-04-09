import Axios from 'axios';

const registerShopService = async (user, shop, callBack) => {

    const coreBaseUrl = 'http://3.21.21.68:9072/tutendero';

    setActionState({ sending: true, error: null, });

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
}

export default registerShopService;