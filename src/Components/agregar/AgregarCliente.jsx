import React, { useState, useEffect } from "react";

import { Button, Container, List, ListItem, TextField, Modal, Box, Table, TableCell, TableHead, Typography, Alert, TableBody, TableRow, IconButton, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ContainerModalAgregarStyle, ContainerModalAgregarVentaStyle, ContainerModalConfirmacionStyle } from '../../Utils/Temas'
import { ModalConfirmacion } from "../Modals/ModalConfirmacion";
import { addCliente } from "../../services/Clientes";
import { ModalInformacion } from "../Modals/ModalInformacion";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';


export const AgregarCliente = () => {

    const [openModal, setOpenModal] = useState(true)
    const [openModalConfirmacion, setOpenModalConfirmacion] = useState(false);
    const [openModalInformacion, setOpenModalInformacion] = useState(false);
    const [codigoRespuestaAgregarCliente, setCodigoRespuestaAgregarCliente] = useState("")
    const [mensajeRespuestaAgregar, setMensajeRespuestaAgregar] = useState(null);
    const [nombreCliente, setNombreCliente] = useState(null);
    const [rutConDV, setRutConDV] = useState(null);
    const [rut, setRut] = useState(null);
    const [dv, setDv] = useState(null);
    const [direccion, setDireccion] = useState(null);
    const [telefono, setTelefono] = useState(null);
    const [email, setEmail] = useState(null);

    //alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState("info");
    const [alertContent, setAlertContent] = useState("Contenido de alerta por defecto!")


    const navigate = useNavigate();

    useEffect(() => {

    }, [codigoRespuestaAgregarCliente]);

    useEffect(() => {

    }, [mensajeRespuestaAgregar]);

    const handleClickCancelar = () => {
        setOpenModal(false);
        navigate("/app-inventario/clientes");
    }

    const validarCliente = () => {
        if (validarNombre()
            && validarRut()
            && validarDireccion()
            && validarTelefono()
            && validarEmail()) {
            return true;
        }
        return false;
    }

    const validarNombre = () => {
        const regexNombre = /^[a-zA-Z0-9_ñ\s]*$/;
        if (!validarRegex(regexNombre,nombreCliente)) {
            mostrarAlerta("error", "Debe ingresar nombre válido");
            return false;
        }
        return true;
    }

    const validarRut = () => {
        const regexRut = /^\d{1,2}\d{3}\d{3}-[0-9kK]$/;
        if (!validarRegex(regexRut,rutConDV)) {
            mostrarAlerta("error", "Debe ingresar rut válido en formato 11111111-1");
            return false;
        }
        return validacionRutModulo11();
    }

    const validarTelefono = () => {
        const regexTelefono = /^\+?[0-9_ñ]{8,11}$/;
        if (!validarRegex(regexTelefono,telefono)) {
            mostrarAlerta("error", "Debe ingresar telefono válido");
            return false;
        }
        return true;
    }

    const validarEmail = () => {
        const regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!validarRegex(regexEmail, email)) {
            mostrarAlerta("error", "Debe ingresar email valido");
            return false;
        }
        return true;
    }

    const validarDireccion = () => {
        const regexDireccion = /^[a-zA-Z0-9\s#ñ]{5,}$/;
        if (!validarRegex(regexDireccion,direccion)) {
            mostrarAlerta("error", "Debe ingresar direccion válida");
            return false;
        }
        return true;
    }

    const validacionRutModulo11 = () => {
        const rut = rutConDV.replace("-","")
        const dv = rut.slice(-1);
        const rutSinDV = rut.slice(0, -1);
        let suma = 0;
        let multiplicador = 2;
        for (let i = rutSinDV.length - 1; i >= 0; i--) {
            suma += parseInt(rutSinDV.charAt(i)) * multiplicador;
            multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
        }
        const dvEsperado = 11 - (suma % 11);
        const dvCalculado = dvEsperado === 11 ? "0" : dvEsperado === 10 ? "K" : dvEsperado.toString();
        if(dv === dvCalculado){
            setRut(rutSinDV);
            setDv(dv);
            return true;
        }
        mostrarAlerta("error", "El rut ingresado es invalido");
        return false;
    }

    const mostrarAlerta = (tipoAlerta, mensaje) => {
        if (showAlert) return
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

    const handleClickOK = () => {
        if (codigoRespuestaAgregarCliente === "200") {
            setOpenModalInformacion(false);
            navigate("/app-inventario/clientes");
        } else {
            setOpenModalInformacion(false);
        }
    }

    const handleClickConfirmarInfo = async () => {
        const response = await addCliente(nombreCliente, rut, dv, direccion, telefono, email);
        setCodigoRespuestaAgregarCliente(response.codigo)
        setMensajeRespuestaAgregar(response.mensaje)
        setOpenModalInformacion(true);
        setOpenModalConfirmacion(false);
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
        setRutConDV(e.target.value)
    }

    const handleOnChangeDireccion = (e) => {
        setDireccion(e.target.value)
    }

    const handleOnChangeTelefono = (e) => {
        setTelefono(e.target.value)
    }

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleCloseModal = () => {
        console.log("cerrando modal")
    }

    const validarRegex = (regex, input) => {
        console.log("se valida regex -->", regex,"para el input -->", input)
        if(regex.test(input)){
            return true;
        }
        return false;
    }

    return (
        <>


            <Modal open={openModal} onClose={handleCloseModal} BackdropProps={{ onClick: (event) => event.stopPropagation() }}>
                <Container sx={ContainerModalAgregarStyle}>
                    <Typography sx={{ fontSize: '200%', marginBottom: '20px' }}>Agregar Cliente</Typography>
                    <Grid container justifyContent="space-between" margin={'5%'}>
                        <IconButton color="error" onClick={handleClickCancelar}>
                            <ArrowBackIosIcon />
                            Volver
                        </IconButton>
                        <IconButton color="success" onClick={handleClickButtonGuardar}>
                            Guardar
                            <PersonAddAltRoundedIcon />
                        </IconButton>
                    </Grid>
                    <Box sx={{ width: '100%', overflowY: 'auto' }}>
                        <List sx={{ padding: 0 }}>
                            <ListItem sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <TextField fullWidth label="Nombre Cliente" onChange={handleOnChangeNombre} />
                            </ListItem>
                            <ListItem sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <TextField fullWidth label="Rut" variant="outlined" onChange={handleOnChangeRut} />
                            </ListItem>
                            <ListItem sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <TextField fullWidth label="Direccion" variant="outlined" onChange={handleOnChangeDireccion} />
                            </ListItem>
                            <ListItem sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <TextField fullWidth label="Telefono" variant="outlined" onChange={handleOnChangeTelefono} />
                            </ListItem>
                            <ListItem sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <TextField fullWidth label="Email" variant="outlined" onChange={handleOnChangeEmail} />
                            </ListItem>
                        </List>
                    </Box>
                    <Alert sx={{
                        marginTop: '5%',
                        visibility: showAlert ? 'visible' : 'hidden', // Mostrar u ocultar la alerta
                        opacity: showAlert ? 1 : 0, // Ajustar la opacidad
                        transition: 'visibility 0s, opacity 0.5s linear' // Agregar transición
                    }} severity={alertSeverity}>
                        {alertContent}
                    </Alert>


                    <ModalConfirmacion
                        openModalConfirmacion={openModalConfirmacion}
                        mensaje={"¿Confirma que desea agregar cliente?"}
                        handleClickCancelarInfo={handleClickCancelarInfo}
                        handleClickConfirmarInfo={handleClickConfirmarInfo}
                    />
                    <ModalInformacion
                        openModalInformacion={openModalInformacion}
                        mensaje={mensajeRespuestaAgregar}
                        handleClickOK={handleClickOK}
                    />
                </Container>
            </Modal>
        </>
    )

}