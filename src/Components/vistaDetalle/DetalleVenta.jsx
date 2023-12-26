import { Box, Container, Grid, IconButton, List, ListItem, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { getDetalleVenta } from "../../Utils/DataUtils"
import { ListaVariable } from "../Listas/ListaVariable";
import { CabeceraTablaStyle, ContainerModalAgregarVentaStyle, ModalDetalleVenta, ModalDetalleVentaStyle } from "../../Utils/Temas";
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { getVentaById } from "../../services/Ventas";


export const DetalleVenta = () => {

    const encabezados = ["Nombre Producto", "SKU", "Unidad", "Cantidad", "P. Compra", "P. Venta", "Total", "Ganancia $", "Ganancia %"]
    const [openModal, setopenModal] = useState(true);
    const [detalleVenta, setdetalleVenta] = useState(null);
    const navigate = useNavigate();
    const [from] = useOutletContext();

    const routeParams = useParams();

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
        tableContainer: {
            maxHeight: '300px',
            overflowY: 'auto',
        },
        tableHeader: {
            position: 'sticky',
            top: 0,
            zIndex: 1,
            backgroundColor: '#C8C8C8',
            color: 'blue'
        },
    });
    const classes = useStyles();

    const handleButtonVolver = () => {
        navigate(`/app-inventario/${from}`)
    }
    const idVenta = routeParams.idVenta

    const getVentaService = async () => {
        const venta = await getVentaById(idVenta);
        if (venta != null) {
            setdetalleVenta(venta);
        }
        else {
            navigate(`/app-inventario/${from}`)
        }
    }



    const handleCloseModal = () => {
        console.log("cerrando modal")
    }

    useEffect(() => {
        getVentaService();
    }, []);

    if (detalleVenta != null) {
        return (

            <Modal open={openModal} onClose={handleCloseModal}>
                <Box
                    sx={ContainerModalAgregarVentaStyle}
                >

                    <Typography variant="h5" gutterBottom align="center">
                        Detalles de la Venta
                    </Typography>

                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2%' }}>
                        <IconButton color="error" onClick={handleButtonVolver}>
                            <ArrowBackIosIcon />
                            Volver
                        </IconButton>

                    </Box>

                    <ListaVariable data={
                        {
                            "Numero": detalleVenta.numeroVenta,
                            "Nombre Cliente": detalleVenta.nombreCliente,
                            "Fecha": detalleVenta.fecha

                        }}>
                    </ListaVariable>


                    <TableContainer component={Paper} className={classes.tableContainer}>
                        <Table className={classes.table}>
                            <TableHead className={classes.tableHeader}>
                                <TableRow>
                                    {encabezados.map((e) => (
                                        <TableCell align="center" sx={{ color: 'white' }} key={e}>
                                            {e}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>

                            <TableBody>

                                {detalleVenta.detalleVenta.map((d) => (
                                    <TableRow key={d.idProducto}>
                                        <TableCell align="center">{d.nombreProducto}</TableCell>
                                        <TableCell align="center">{d.sku}</TableCell>
                                        <TableCell align="center">{d.unidad}</TableCell>
                                        <TableCell align="center">{d.cantidad}</TableCell>
                                        <TableCell align="center">{d.precioCompra}</TableCell>
                                        <TableCell align="center">{d.precioVenta}</TableCell>
                                        <TableCell align="center">{d.totalVenta}</TableCell>
                                        <TableCell align="center">{d.ganancia}</TableCell>
                                        <TableCell align="center">{d.gananciaPorcentual}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Modal>


        )
    }
}