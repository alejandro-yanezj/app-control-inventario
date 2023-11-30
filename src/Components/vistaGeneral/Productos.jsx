import { Container, Button, Box, Autocomplete, TextField} from "@mui/material"
import { TablaStockProductos } from "../Tablas/TablaStockProductos"
import { useState, useEffect } from "react"
import { getProductos, getStockProductos } from "../../Utils/DataUtils"

export const Productos = () =>{
    
    const [productoSeleccionado, setProductoSeleccionado]= useState(0);
    const [stockFiltrado, setStockFiltrado] = useState(null);
    const [nombreProductoSeleccionado, setNombreProductoSeleccionado] = useState(null);
    const [agregarStockDisabled, setAgregarStockDisabled] = useState(true);


    //traer info desde el servicio backend
    const productos = getProductos();
    const stockProductos = getStockProductos();
    
    const handleOnChange = (value) =>{
        if(value !=null){
            setProductoSeleccionado(value.id);
            setNombreProductoSeleccionado(value.nombre);
        } else{
            setProductoSeleccionado(0);
            setNombreProductoSeleccionado(null);
        }
    }

    const filtarStockProducto = (stockProductos = [])=>{
        let productosFiltrados = []
        stockProductos.filter(p =>{
            if(p.idProducto === productoSeleccionado){
                productosFiltrados.push(p);
            }
        })
        setStockFiltrado(productosFiltrados);
    }

    useEffect(() => {
        filtarStockProducto(stockProductos)
        if(productoSeleccionado==0){
            setAgregarStockDisabled(true);
        }
        else{
            setAgregarStockDisabled(false);
        }
    }, [productoSeleccionado]);
    

    return (
    <Container>
        <Box sx={{fontSize:50,textAlign:"center"}}> Productos </Box>
        <Button  variant="contained" color = "primary" sx={{margin:2}}> Atrás </Button>

        <Autocomplete   
            id="producto-seleccionado"
            sx={{ width: 300 }}
            options={productos}
            autoHighlight
            getOptionLabel={(option) => option.sku +"  " +option.nombre+ "  "  + option.unidad}
            renderOption={(props, option) => (
                <Box component="li"{...props}>
                {option.sku} | {option.nombre} | {option.unidad}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Seleccionar producto"
                    inputProps={{
                    ...params.inputProps,
                    }}
                />  
            )}
            onChange={(event, newValue) => { handleOnChange(newValue) }}
            isOptionEqualToValue ={(option, value)=>{return value.sku}}
        />
        <Button  variant="contained" color = "success" sx={{align:"right",margin:2}} disabled={agregarStockDisabled} > + Agregar Stock</Button>
        <TablaStockProductos data = {stockFiltrado} nombre ={nombreProductoSeleccionado}></TablaStockProductos>
    </Container>)

}