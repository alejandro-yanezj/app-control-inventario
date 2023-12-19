import { TableBody, TableHead, TableRow, TableCell, Table, Box, Button, IconButton } from "@mui/material"
import { CabeceraTablaStyle } from '../../Utils/Temas'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useNavigate } from "react-router-dom";


export const TablaVentas = ({ ventas = [], validar = false }) => {

    const encabezados = ["", "Codigo venta", "Fecha compra", "Cliente"]

    const navigate = useNavigate();

    const handleOnClick = (idVenta) => {
        navigate("/ventas/detalle/" + idVenta);
    }

    {
        if (Array.isArray(ventas) && ventas != null && ventas.length > 0) {
            return (
                <>
                    <Table >
                        <TableHead >
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
                                        <TableCell>
                                            <IconButton color="primary" onClick={() => handleOnClick(v.idVenta)}>
                                                <DescriptionOutlinedIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell align="center">
                                            {v.numero} </TableCell>
                                        <TableCell align="center"> {v.fecha} </TableCell>
                                        <TableCell align="center"> {v.nombreCliente} </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </>
            )
        } else if (validar) {
            return (<Box sx={{ textAlign: "center", fontSize: '100%', margin: '3%' }}>No se encontraron ventas para el cliente</Box>)
        }        
    }
}