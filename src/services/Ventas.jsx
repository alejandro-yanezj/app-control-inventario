import axios from 'axios';


const basePath = "http://localhost:8080/ventas"

export const getVentasByIdCliente = async(idCliente) => {
    try{
        const response = await axios.get(`${basePath}/obtener/cliente/${idCliente}`)
        return response.data.sort((v1, v2) => (v1.numero > v2.numero) ? -1 : (v1.numero < v2.numero) ? 1 : 0);
    } catch(err){
        return []
    }
}

export const getVentas = async() => {
    try{
        const response = await axios.get(`${basePath}/obtener`);
        return response.data.sort((v1, v2) => (v1.numero > v2.numero) ? -1 : (v1.numero < v2.numero) ? 1 : 0);
    }catch(err){
        return []
    }
}


export const getVentaById = async(idVenta) => {
    try{
        const response = await axios.get(`${basePath}/obtener/${idVenta}`)
        return response.data;
    } catch(err){
        return null;
    }
}
