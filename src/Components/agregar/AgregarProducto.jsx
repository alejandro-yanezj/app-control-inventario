import React from "react";

import { Button, Container, List,ListItem , TextField} from "@mui/material";

export const AgregarProducto = () =>{

    return (
        <>
            <Container fixed >
            <h1> Crear nuevo producto </h1>
            <List>
                <ListItem>
                    <TextField id="nombreProducto" label="Nombre Producto" variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField id="sku" label="SKU" variant="outlined" />
                </ListItem>
            </List>
            <Button variant="contained" color="error"> Cancelar</Button>
            <Button variant="contained" color="success"> Guardar</Button>
            </Container>
        </>
    )
}