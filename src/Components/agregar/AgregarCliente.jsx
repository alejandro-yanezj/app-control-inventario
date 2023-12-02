import React, { useState, useEffect } from "react";

import { Button, Container, List, ListItem, TextField, Modal, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ContainerModalAgregarStyle } from '../../Utils/Temas'

export const AgregarCliente = () => {

    const [openModal, setOpenModal] = useState(true)
    const navigate = useNavigate();

    const handleClickCancelar = () => {
        setOpenModal(false);
        navigate("/app-inventario/clientes")

    }



    useEffect(() => {

    }, [openModal]);

    return (
        <>

            <Modal
                open={openModal}
                onClose={console.log("cerrando modal")}
                aria-labelledby="modal title"
                aria-describedby="modal description"
            >
                <Container sx={ContainerModalAgregarStyle} >
                    <Box sx={{ textAlign: 'center', fontSize: 30 }}>Agregar Cliente</Box>
                    <List sx={{alignItems:'center'}}>
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
                    <Container textAlign='center'>
                        <Button variant="contained" color="error" onClick={handleClickCancelar}> Cancelar</Button>
                        <Button variant="contained" color="success" > Guardar</Button>
                    </Container>

                </Container>
            </Modal>



        </>
    )
}