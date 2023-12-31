import axios from 'axios';


import {config} from '../../config'

const basePath =`${config.inventarioMSBasePath}/productos`

export const getProductos = async () => {
    try {
        const response = await axios.get(`${basePath}/obtener`)
        return response.data.sort((v1, v2) => (v1.sku > v2.sku) ? -1 : (v1.sku < v2.sku) ? 1 : 0);
    } catch (error) {
        console.log(error)
        return []
    }
}


export const getProductoStockByIdProducto = async (idProducto) => {
    try {
        const response = await axios.get(`${basePath}/stock/obtener/${idProducto}`)
        return response.data.sort((v1, v2) => (v1.fecha < v2.fecha) ? -1 : (v1.fecha > v2.fecha) ? 1 : 0);
    } catch (error) {
        console.log(error)
        return []
    }
}

export const addProducto = async (nombre = "", sku = "", unidad = "") => {
    try {
        const producto = {
            "nombre": nombre,
            "sku": sku,
            "unidad": unidad
        };
        const response = await axios.put(`${basePath}/agregar`, producto)
        return response.data;
    } catch (error) {
        if (error!= null && error['response']  && error.response['data']) {
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

export const addStockProducto = async (idProducto = 0, fechaCompra = "", precioCompra = "0.0", stock = 0) => {
    try {
        const productoStock = {
            "idProducto": idProducto,
            "fechaCompra": fechaCompra,
            "precioCompra": Number.parseFloat(precioCompra).toFixed(2),
            "stock": stock
        };
        const response = await axios.put(`${basePath}/stock/agregar`, productoStock)
        return response.data;
    } catch (error) {
        if (error!= null && error['response']  && error.response['data']) {
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
