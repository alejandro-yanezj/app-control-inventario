import React, { useState, useEffect } from "react";

import { Button, Container, List, ListItem, TextField, Modal, Box, Table, TableCell, TableHead, Typography, Alert, TableBody, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ContainerModalAgregarStyle, ContainerModalConfirmacionStyle } from '../../Utils/Temas'
import { ModalConfirmacion } from "../Modals/ModalConfirmacion";

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
        if (validarNombre()
            && validarRut()
            && validarTelefono()
            && validarEmail()) {
            return true;
        }
        return false;
    }

    const validarNombre = () => {
        console.log("validando nombre -->", nombreCliente);
        if (nombreCliente === null || nombreCliente.length < 1) {
            mostrarAlerta("error", "Debe ingresar nombre cliente");
            return false;
            //ingresar rut;
        }
        return true;
        //agregar mas validaciones
    }

    const validarRut = () => {
        console.log("validando rut")
        if (rut === null || rut.length < 1) {
            mostrarAlerta("error", "Debe ingresar rut cliente");
            return false;
            //ingresar rut;
        }
        return true;
        //validar modulo 11
    }

    const validarTelefono = () => {
        console.log("validando telefono")
        if (telefono === null || telefono.length < 1) {
            mostrarAlerta("error", "Debe ingresar telefono cliente");
            return false;
            //ingresar rut;
        }
        return true;
        //validar modulo 11
    }

    const validarEmail = () => {
        console.log("validando email")
        if (email === null || email.length < 1) {
            mostrarAlerta("error", "Debe ingresar email cliente");
            return false;
            //ingresar rut;
        }
        return true;
        //validar modulo 11
    }

    const mostrarAlerta = (tipoAlerta, mensaje) => {
        if(showAlert) return
        setAlertSeverity(tipoAlerta);
        setAlertContent(mensaje);
        setTimeout(() => {
            setShowAlert(false)
        }, 3000);
        setShowAlert(true);
    }

    const handleClickCancelarInfo = () => {
        setOpenModalConfirmacion(false);
    }

    const handleClickConfirmarInfo = () => {
        return true;
    }

    const handleClickButtonGuardar = () => {
        if (validarCliente() == true) {
            setOpenModalConfirmacion(true);
        }
    }

    const handleOnChangeNombre = (e) => {
        setNombreCliente(e.target.value)
    }

    const handleOnChangeRut = (e) => {
        //validar (?)
        setRut(e.target.value)


    }
    const handleOnChangeTelefono = (e) => {
        //validar (?)
        setTelefono(e.target.value)

    }

    const handleOnChangeEmail = (e) => {
        //validar (?)
        setEmail(e.target.value)

    }

    return (
        <>
            <Modal
                open={openModal}
                onClose={console.log("cerrando modal")}>
                <Container sx={ContainerModalAgregarStyle} >
                    <Box sx={{ textAlign: 'center', fontSize: '200%', margin: '5%' }}>Agregar Cliente</Box>
                    <List>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField sx={{ width: '80%' }} label="Nombre Cliente" onChange={handleOnChangeNombre} />
                        </ListItem>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField sx={{ width: '80%' }} label="Rut" variant="outlined" onChange={handleOnChangeRut} />
                        </ListItem>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField sx={{ width: '80%' }} label="Telefono" variant="outlined" onChange={handleOnChangeTelefono} />
                        </ListItem>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField sx={{ width: '80%' }} label="Email" variant="outlined" onChange={handleOnChangeEmail} />
                        </ListItem>
                    </List>
                    <Typography align="center">
                        <Button sx={{ margin: 2 }}
                            variant="contained" color="error" onClick={handleClickCancelar}> Cancelar</Button>
                        <Button sx={{ margin: 2 }} variant="contained" color="success" onClick={handleClickButtonGuardar}> Guardar</Button>
                        {showAlert && <Alert sx={{ marginTop: '5%' }} severity={alertSeverity}>{alertContent}</Alert>}
                    </Typography >
                    <ModalConfirmacion
                     openModalConfirmacion={openModalConfirmacion}
                     mensaje={"¿Confirma que desea agregar cliente?"}
                     handleClickCancelarInfo={handleClickCancelarInfo}
                     handleClickConfirmarInfo={handleClickConfirmarInfo}
                     />
                </Container >
            </Modal >
        </>
    )

}