import axios from 'axios';
import {config} from '../../config'

const basePath =`${config.inventarioMSBasePath}/ventas`

export const getVentasByIdCliente = async (idCliente) => {
    try {
        const response = await axios.get(`${basePath}/obtener/cliente/${idCliente}`)
        return response.data.sort((v1, v2) => (v1.numero > v2.numero) ? -1 : (v1.numero < v2.numero) ? 1 : 0);
    } catch (err) {
        return []
    }
}

export const getVentas = async () => {
    try {
        const response = await axios.get(`${basePath}/obtener`);
        return response.data.sort((v1, v2) => (v1.numero > v2.numero) ? -1 : (v1.numero < v2.numero) ? 1 : 0);
    } catch (err) {
        return []
    }
}


export const getVentaById = async (idVenta) => {
    try {
        const response = await axios.get(`${basePath}/obtener/${idVenta}`)
        return response.data;
    } catch (err) {
        return null;
    }
}

export const getVentaResumenById = async (idVenta) => {
    try {
        const response = await axios.get(`${basePath}/obtener/resumen/${idVenta}`)
        return response.data;
    } catch (err) {
        if (error != null && error['response'] && error.response['data']) {
            return error.response.data;
        }
        else {
            return {
                "codigo": "500",
                "mensaje": "Error de conexion con el servidor"
            }
        }
    }
}

export const addVenta = async (idCliente = "", productos = []) => {
    try {
        const request = {
            "idCliente": idCliente,
            "productos": productos.map(producto => ({
                "idProducto": producto.id,
                "nombre":producto.nombre,
                "cantidad": parseFloat(producto.cantidad), 
                "precioVenta": parseInt(producto.precio)
            }))
        };
        const response = await axios.put(`${basePath}/generar/nueva`, request)
        return response.data;
    } catch (error) {
        if (error != null && error['response'] && error.response['data']) {
            return error.response.data;
        }
        else {
            return {
                "codigo": "500",
                "mensaje": "Error de conexion con el servidor"
            }
        }
    }
}


