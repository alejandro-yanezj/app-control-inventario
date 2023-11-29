import React from "react";

import { Box, Button, Container, List,ListItem , TableContainer, TableHead, TableRow,  TextField} from "@mui/material";
import { ListaVariable } from "../Listas/ListaVariable";
import { TablaVentas } from "../Tablas/TablaVentas";

export const Detallecliente = () =>{

    //obtener desde informacion de las ventas
    const datosVenta = [
            {
                "codigo":10001,
                "fecha":"2023/11/28"
            },
            {
                "codigo":10002,
                "fecha":"2023/11/28"
            }
    ]

    //obtener desde informacion de los clientes
    const datosCliente = {
        'Nombre':'Cliente 1', 
        'Rut':'18610378-5', 
        'Telefono cliente':'+56912345678',
        'Email': 'emailcliente1@gmail.com'
    }

    return (<>
            <Box textAlign={"center"} fontSize={50}>Detalle del cliente "nombre cliente" </Box>
            <Container>
                <Button variant="contained" color = "primary"> Atrás </Button>
                <Button variant="contained" color="warning" > Editar Cliente </Button>
                <Button variant="contained" color="error"> Eliminar Cliente </Button>
                <ListaVariable data = {datosCliente}/>
                <TablaVentas data = {datosVenta}></TablaVentas>
            </Container>
            </>
    )
}