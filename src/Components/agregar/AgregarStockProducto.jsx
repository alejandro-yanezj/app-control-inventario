import { Container, List, ListItem, TextField, Button, Box, Modal, Typography, Alert, Grid, IconButton } from '@mui/material'
import { useState } from 'react'
import { ContainerModalAgregarProductoStyle, ContainerModalAgregarStyle } from '../../Utils/Temas'
import { ModalConfirmacion } from '../Modals/ModalConfirmacion';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { ModalInformacion } from '../Modals/ModalInformacion';
import { addStockProducto } from '../../services/Productos';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import { getCurrentDate } from '../../Utils/Utils';

export const AgregarStock = () => {

    const [idProductoSeleccionado] = useOutletContext();

    const [openModal, setOpenModal] = useState(true);
    const [openModalConfirmacion, setOpenModalConfirmacion] = useState(false);
    const [openModalInformacion, setOpenModalInformacion] = useState(false);
    const [codigoRespuestaAgregar, setCodigoRespuestaAgregar] = useState("")
    const [mensajeRespuestaAgregar, setMensajeRespuestaAgregar] = useState(null);
    const [fechaCompra, setFechaCompra] = useState(null);
    const [precioCompra, setPrecioCompra] = useState(null);
    const [cantidadStock, setCantidadStock] = useState(null);


    //Alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState("info");
    const [alertContent, setAlertContent] = useState("Contenido de alerta por defecto!");

    const navigate = useNavigate();

    if (idProductoSeleccionado == null || idProductoSeleccionado === 0) {
        navigate("/app-inventario/productos");
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


    const handleClickCancelar = () => {
        setOpenModal(false);
        navigate("/app-inventario/productos");
    }

    const validarStock = () => {
        if (validarFecha()
            && validarPrecio()
            && validarCantidad()) {
            return true;
        }
        return false;
    }
    const handleOnChangeFecha = (e) => {
        setFechaCompra(e.target.value);
    }
    const handleOnChangePrecio = (e) => {
        setPrecioCompra(e.target.value);
    }
    const handleOnChangeCantidad = (e) => {
        setCantidadStock(e.target.value);
    }

    const validarFecha = () => {
        if (fechaCompra === null || fechaCompra.length === 0) {
            mostrarAlerta("error", "Se debe ingresar Fecha de compra");
            return false;
        }
        return true;
    }
    const validarPrecio = () => {
        if (fechaCompra === null || fechaCompra.length === 0) {
            mostrarAlerta("error", "Se debe ingresar Precio de compra");
            return false;
        }
        return true;
    }
    const validarCantidad = () => {
        if (fechaCompra === null || fechaCompra.length === 0) {
            mostrarAlerta("error", "Se debe ingresar Cantidad");
            return false;
        }
        return true;
    }

    const handleClickButtonGuardar = () => {
        if (validarStock() == true) {
            setOpenModalConfirmacion(true);
        }
    }

    const handleClickCancelarInfo = () => {
        setOpenModalConfirmacion(false);
    }

    const handleClickConfirmarInfo = async () => {
        const response = await addStockProducto(idProductoSeleccionado, fechaCompra, precioCompra, cantidadStock);
        setCodigoRespuestaAgregar(response.codigo)
        setMensajeRespuestaAgregar(response.mensaje)
        setOpenModalInformacion(true);
        setOpenModalConfirmacion(false);
    }

    const handleClickOK = () => {
        if (codigoRespuestaAgregar === "200") {
            setOpenModalInformacion(false);
            navigate("/app-inventario/productos");
        } else {
            setOpenModalInformacion(false);
        }
    }

    


    return (
        <>
            {idProductoSeleccionado != null && <Modal
                open={openModal}
                onClose={console.log("cerrando modal stock productos")}
                BackdropProps={{ onClick: (event) => event.stopPropagation() }}>
                <Container sx={ContainerModalAgregarProductoStyle} >
                    <Typography sx={{ textAlign: 'center', fontSize: '200%', margin: '5%' }}> Agregar Stock </Typography>

                    <Grid container justifyContent="space-between" margin={'5%'}>
                        <IconButton color="error" onClick={handleClickCancelar}>
                            <ArrowBackIosIcon />
                            Volver
                        </IconButton>
                        <IconButton color="success" onClick={handleClickButtonGuardar}>
                            Guardar
                            <InventoryRoundedIcon />
                        </IconButton>
                    </Grid>
                    <List sx={{ width: '100%' }}>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <input
                                type="date"
                                value={fechaCompra}
                                onChange={handleOnChangeFecha}
                                style={{ width: '72%', padding: '15px', borderRadius: '4px', border: '1px solid #ccc' }}
                                max={getCurrentDate()} // Establecer la fecha máxima como la fecha actual

                            />
                        </ListItem>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField sx={{ width: '80%' }} label="Precio de compra" variant="outlined" onChange={handleOnChangePrecio} />
                        </ListItem >
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField sx={{ width: '80%' }} label="Cantidad" variant="outlined" onChange={handleOnChangeCantidad} />
                        </ListItem>
                    </List>

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
                        mensaje={"¿Confirma que desea agregar stock?"}
                        handleClickCancelarInfo={handleClickCancelarInfo}
                        handleClickConfirmarInfo={handleClickConfirmarInfo}
                    />
                    <ModalInformacion
                        openModalInformacion={openModalInformacion}
                        mensaje={mensajeRespuestaAgregar}
                        handleClickOK={handleClickOK}
                    />
                </Container>
            </Modal >}
        </>
    )
}