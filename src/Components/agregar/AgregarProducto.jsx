import React, { useState } from "react";
import { Button, Container, List,ListItem , TextField, Modal, Box,Typography,Alert} from "@mui/material";
import { ContainerModalAgregarStyle } from "../../Utils/Temas";
import { ModalConfirmacion } from "../Modals/ModalConfirmacion";
import { useNavigate } from "react-router-dom";



export const AgregarProducto = () =>{

    const [openModal, setOpenModal] = useState(true)
    const [openModalConfirmacion, setOpenModalConfirmacion] = useState(false);
    const [nombreProducto, setNombreProducto] = useState(null);
    const [sku, setSku] = useState(null);
    const [unidad, setUnidad] = useState(null);

     //alert
     const [showAlert, setShowAlert] = useState(false);
     const [alertSeverity, setAlertSeverity] = useState("info");
     const [alertContent, setAlertContent] = useState("Contenido de alerta por defecto!");

     const navigate = useNavigate();

    const handleClickCancelar = () => {
        setOpenModal(false);
        navigate("/app-inventario/productos");
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
        if (validarProducto() == true) {
            setOpenModalConfirmacion(true);
        }
    }

    const handleOnChangeNombre = (e) => {
        setNombreProducto(e.target.value);
    }

    const handleOnChangeSku = (e) =>{
        setSku(e.target.value);
    }

    const handleOnChangeUnidad = (e) =>{
        setUnidad(e.target.value)
    }

    const validarProducto = () =>{
        if (validarNombre()
        && validarSku()
        && validarUnidad()){
            return true;
        }
        return false;
    }

    const validarNombre = ()=>{
        if (nombreProducto=== null || nombreProducto.length===0){
            mostrarAlerta("error", "Se debe ingresar nombre producto");
            return false;
        }
        return true;
    }

    const validarSku= () =>{
        if(sku===null || sku.length===0){
            mostrarAlerta("error","Se debe ingresar sku");
            return false;
        }
        return true;
    }

    const validarUnidad = () =>{
        if (unidad===null || unidad.length ===0){
            mostrarAlerta("error","Se debe ingresar unidad");
            return false;
        }
        return true;
    }

    return (
        <Modal
                open={openModal}
                onClose={console.log("cerrando modal")}>
                <Container sx={ContainerModalAgregarStyle} >
                    <Box sx={{ textAlign: 'center', fontSize: '200%', margin: '5%' }}>Agregar Producto</Box>
                    <List>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField sx={{ width: '80%' }} label="Nombre Producto" onChange={handleOnChangeNombre} />
                        </ListItem>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField sx={{ width: '80%' }} label="Sku" variant="outlined" onChange={handleOnChangeSku} />
                        </ListItem>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField sx={{ width: '80%' }} label="Unidad" variant="outlined" onChange={handleOnChangeUnidad} />
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
                     mensaje={"¿Confirma que desea agregar producto?"}
                     handleClickCancelarInfo={handleClickCancelarInfo}
                     handleClickConfirmarInfo={handleClickConfirmarInfo}
                     />
                </Container >
            </Modal >
    )
}