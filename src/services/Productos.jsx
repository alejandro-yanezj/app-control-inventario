import axios from 'axios';


const basePath = "http://localhost:8080/productos"

export const getProductos = async () => {
    try {
        const response = await axios.get(`${basePath}/obtener`)
        return response.data;
    } catch (error) {
        console.log(error)
        return []
    }
}


export const getProductoStockByIdProducto = async (idProducto) => {
    try {
        const response = await axios.get(`${basePath}/stock/obtener/${idProducto}`)
        return response.data;
    } catch (error) {
        console.log(error)
        return []
    }
}

export const addProducto = async (nombre= "",sku="", unidad = "") =>{
    try{
        debugger
        const producto = {
            "nombre":nombre,
            "sku":sku,
            "unidad":unidad
        };
        const response = await axios.put(`${basePath}/agregar`, producto)
        return response.data;
    }catch(error){
        console.log(error)
        return error.response.data;
    }

}
