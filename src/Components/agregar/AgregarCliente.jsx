import React from "react";

import { Button, Container, List,ListItem , TextField} from "@mui/material";

export const AgregarCliente = () =>{

    return (
        <>
            <Container fixed >
            <h1> Crear nuevo cliente </h1>
            <List>
                <ListItem>
                    <TextField id="nombreCliente" label="Nombre Cliente" variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField id="rut" label="rut" variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField id="telefono" label="telefono" variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField id="email" label="email" variant="outlined" />
                </ListItem>
            </List>
            <Button variant="contained" color="error"> Cancelar</Button>
            <Button variant="contained" color="success"> Guardar</Button>
            </Container>
        </>
    )
}