import axios from 'axios';


const basePath = "http://localhost:8080/clientes"

export const getClientes = async() => {
    try{
        const response = await axios.get(`${basePath}/obtener`)
        return response.data;
    } catch(error){
        console.log(error)
        return null
    }  
}

export const getClienteById = async(idCliente) => {
    try{
        const response = await axios.get(`${basePath}/obtener/${idCliente}`)
        return response.data
    } catch(error){
        console.log(error)
        return null
    }  
}