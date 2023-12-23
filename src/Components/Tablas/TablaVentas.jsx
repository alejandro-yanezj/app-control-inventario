import { TableBody, TableHead, TableRow, TableCell, Table, Box, Button, IconButton, TableContainer, Paper } from "@mui/material"
import { CabeceraTablaStyle } from '../../Utils/Temas'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";


export const TablaVentas = ({ ventas = [], validar = false }) => {

    const encabezados = ["Detalle", "Número venta", "Monto" ,"Fecha compra", "Cliente"]

    const navigate = useNavigate();

    const handleOnClick = (idVenta) => {
        navigate("detalle-venta/" + idVenta);
    }

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
        tableContainer: {
            maxHeight: '640px',
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

    {
        if (Array.isArray(ventas) && ventas != null && ventas.length > 0) {
            return (
                <>
                    <TableContainer component={Paper} className={classes.tableContainer}>
                        <Table className={classes.table}>
                            <TableHead className={classes.tableHeader}>
                                <TableRow>
                                    {encabezados.map(e => {
                                        return (<TableCell align="center" key={e} sx={CabeceraTablaStyle} > {e} </TableCell>)
                                    })}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {ventas.map(v => {
                                    return (
                                        <TableRow key={v.idVenta}>
                                            <TableCell align="center">
                                                <IconButton  color="primary" onClick={() => handleOnClick(v.idVenta)}>
                                                    <DescriptionOutlinedIcon />
                                                </IconButton>
                                            </TableCell>
                                            <TableCell align="center"> {v.numero} </TableCell>
                                            <TableCell align="center"> {v.monto} </TableCell>

                                            <TableCell align="center"> {v.fecha} </TableCell>
                                            <TableCell align="center"> {v.nombreCliente} </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )
        } else if (validar) {
            return (<Box sx={{ textAlign: "center", fontSize: '100%', margin: '3%' }}> No se encontraron ventas para el cliente</Box>)
        }
    }
}