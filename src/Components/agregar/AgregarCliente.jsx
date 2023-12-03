import React, { useState, useEffect } from "react";

import { Button, Container, List, ListItem, TextField, Modal, Box, Table, TableCell, TableHead, Typography, Alert, TableBody, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ContainerModalAgregarStyle, ContainerModalConfirmacionStyle } from '../../Utils/Temas'

export const AgregarCliente = () => {

    const [openModal, setOpenModal] = useState(true)
    const [openModalConfirmacion, setOpenModalConfirmacion] = useState(false);
    const [nombreCliente, setNombreCliente] = useState(null);
    const [rut, setRut] = useState(null);
    const [telefono, setTelefono] = useState(null);
    const [email, setEmail] = useState(null);

    //alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState("info");
    const [alertContent, setAlertContent] = useState("Contenido de alerta por defecto!")


    const navigate = useNavigate();

    const handleClickCancelar = () => {
        setOpenModal(false);
        navigate("/app-inventario/clientes");
    }

    const validarCliente = () => {
        console.log("datos del cliente antes de validar", nombreCliente, rut, telefono, email);
        if (nombreCliente != null &&
            rut != null &&
            telefono != null &&
            email != null) {
            return true;
        }
        return false;
    }

    const mostrarAlerta = (tipoAlerta, mensaje) => {
        setAlertSeverity(tipoAlerta);
        setAlertContent(mensaje);
        setTimeout(() => {
            setShowAlert(false)
        }, 3000);
        setShowAlert(true);
    }

    const handleClickCancelarInfo = () => {
        console.log("cancelando confirmacion agregar cliente");
        setOpenModalConfirmacion(false);

    }

    const handleClickConfirmarInfo = () => {

    }

    const handleClickButtonGuardar = () => {
        if (validarCliente() == true) {
            console.log("cliente valido")
            setOpenModalConfirmacion(true);
        }
        else {
            console.log("cliente no valido")
            mostrarAlerta("error", "debe ingresar la informacion completa del cliente")
        }
    }

    const handleOnChangeNombre = (e) => {
        //validar (?)
        if (e.target.value != null || e.target.value.lengh() > 0) {
            setNombreCliente(e.target.value)
        }
    }

    const handleOnChangeRut = (e) => {
        //validar (?)
        if (e.target.value != null || e.target.value.lengh() > 0) {
            setRut(e.target.value)
        }

    }
    const handleOnChangeTelefono = (e) => {
        //validar (?)
        console.log("info telefono -->", e.target.value)
        if (e.target.value != null || e.target.value.lengh() > 0) {
            setTelefono(e.target.value)
        }
    }

    const handleOnChangeEmail = (e) => {
        //validar (?)
        if (e.target.value != null || e.target.value.lengh() > 0) {
            setEmail(e.target.value)
        }
    }

    return (
        <>

            <Modal
                open={openModal}
                onClose={console.log("cerrando modal")}
            >
                <Container sx={ContainerModalAgregarStyle} >
                    <Box sx={{ textAlign: 'center', fontSize: '250%', marginTop: '5%' }}>Agregar Cliente</Box>
                    <List>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField id="nombreCliente" label="Nombre Cliente" variant="outlined" onChange={handleOnChangeNombre} />
                        </ListItem>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField id="rut" label="rut" variant="outlined" onChange={handleOnChangeRut} />
                        </ListItem>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField id="telefono" label="telefono" variant="outlined" onChange={handleOnChangeTelefono} />
                        </ListItem>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField id="email" label="email" variant="outlined" onChange={handleOnChangeEmail} />
                        </ListItem>
                    </List>
                    <Typography align="center">
                        <Button sx={{ margin: 2 }}
                            variant="contained" color="error" onClick={handleClickCancelar}> Cancelar</Button>
                        <Button sx={{ margin: 2 }} variant="contained" color="success" onClick={handleClickButtonGuardar}> Guardar</Button>
                    </Typography >
                    {showAlert && <Alert sx={{ marginTop: '5%' }} severity={alertSeverity}>{alertContent}</Alert>}

                    <Modal
                        open={openModalConfirmacion}
                        onClose={console.log("cerrando modal")}
                    >
                        <Container sx={ContainerModalConfirmacionStyle}>

                            <Table sx={{ margin: '5%' }}>
                                <TableHead>
                                    <TableCell>
                                        <Typography >Confirma los datos ingresados?</Typography>

                                    </TableCell>

                                   
                                </TableHead>
                                <TableBody>
                                    <TableCell>
                                        <Button sx={{ margin: 2 }} variant="contained" color="error" onClick={handleClickCancelarInfo}> Cancelar</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button sx={{ margin: 2 }} variant="contained" color="success" onClick={handleClickConfirmarInfo}> Confirmar</Button>
                                    </TableCell>
                                </TableBody>
                            </Table>



                        </Container>

                    </Modal>
                </Container >
            </Modal >
        </>
    )
}