import { Container, List, ListItem, TextField, Button, Box, Modal, Typography } from '@mui/material'
import { useState } from 'react'
import { ContainerModalAgregarStyle } from '../../Utils/Temas'
import { ModalConfirmacion } from '../Modals/ModalConfirmacion';
import { useNavigate, useOutletContext } from 'react-router-dom';

export const AgregarStock = () => {

    const [datosProductoSeleccionado] = useOutletContext();

    const [openModal, setOpenModal] = useState(true);
    const [openModalConfirmacion, setOpenModalConfirmacion] = useState(false);
    const navigate = useNavigate();

    console.log(`parametros: id-->`+ JSON.stringify(datosProductoSeleccionado));

    if(! datosProductoSeleccionado!=null){
        navigate("/app-inventario/productos");
    }

     //alert
     const [showAlert, setShowAlert] = useState(false);
     const [alertSeverity, setAlertSeverity] = useState("info");
     const [alertContent, setAlertContent] = useState("Contenido de alerta por defecto!");

    const handleClickCancelar = () => {
        setOpenModal(false);
        navigate("/app-inventario/productos");
    }

    const handleClickButtonGuardar = () =>{

    }

    const handleClickCancelarInfo = () => {
        setOpenModalConfirmacion(false);
    }

    const handleClickConfirmarInfo = () => {
        return true;
    }


    return (
        <>
            {datosProductoSeleccionado!=null && <Modal
                open={openModal}
                onClose={console.log("cerrando modal stock productos")}>
                 <Container sx={ContainerModalAgregarStyle} >
                    <Box sx={{ textAlign: 'center', fontSize: '200%', margin: '5%' }}> Agregar Stock {datosProductoSeleccionado.nombre}</Box>
                    <List>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField sx={{ width: '80%' }}label="Fecha de compra" variant="outlined" />
                        </ListItem>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField sx={{ width: '80%' }} label="Precio de compra" variant="outlined" />
                        </ListItem >
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField sx={{ width: '80%' }} label="Cantidad" variant="outlined" />
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
                        mensaje={"¿Confirma que desea agregar stock?"}
                        handleClickCancelarInfo={handleClickCancelarInfo}
                        handleClickConfirmarInfo={handleClickConfirmarInfo}
                    />
                </Container>
            </Modal >}
        </>
    )
}