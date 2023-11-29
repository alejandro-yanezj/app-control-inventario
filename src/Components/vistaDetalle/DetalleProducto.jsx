import { TablaStockProductos } from "../Tablas/TablaStockProductos"
import { Box, Button,Container } from "@mui/material"
import { ListaVariable } from "../Listas/ListaVariable"

export const DetalleProducto= () =>{

    const datosProducto = {
        "Nombre":"Aceite 900ml",
        "Sku": "12345678",
        "Unidad": "unidad"
    }

    const datosStock = [
        {
            "fecha":"25/11/2023",
            "precio":" 1490",
            "stock" : 20
        },
        {
            "fecha":"26/11/2023",
            "precio":" 1600",
            "stock" : 50
        },
        {
            "fecha":"27/11/2023",
            "precio":" 1300",
            "stock" : 30
        }
]

    return (<>
        <Box textAlign={"center"} fontSize={50} margin={5}>Detalle producto "producto" </Box>
        <Container>
            <Button variant="contained" color = "primary" margin={2}> Atrás </Button>
            <Button variant="contained" color="warning" > Agregar Stock </Button>
            <Button variant="contained" color="error"> Eliminar Producto </Button>
            <ListaVariable data = {datosProducto}/>
            <TablaStockProductos data = {datosStock}></TablaStockProductos>
        </Container>
        </>
)

}