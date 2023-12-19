import { Box, Container, List, ListItem, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { getDetalleVenta } from "../../Utils/DataUtils"
import { ListaVariable } from "../Listas/ListaVariable";
import { CabeceraTablaStyle } from "../../Utils/Temas";
import { useParams } from 'react-router-dom'


export const DetalleVenta = () => {

    const encabezados = ["Nombre Producto", "SKU","Unidad", "Cantidad", "P. Compra", "P. Venta","Total", "Ganancia $","Ganancia %"]

    const routeParams = useParams();
    console.log("props --> ",routeParams);

    const idVenta = routeParams.idVenta

    const detalleVenta = getDetalleVenta();


    return (
        <Container>
            <List>
                <ListItem>
                    <Box sx={{ fontSize: '100%' }}> Numero: {detalleVenta.numeroVenta} </ Box>
                </ListItem>

                <ListItem>
                    <Box sx={{ fontSize: '100%' }}> Cliente: {detalleVenta.nombreCliente} </ Box>
                </ListItem>

                <ListItem>
                    <Box sx={{ fontSize: '100%' }}> Fecha : {detalleVenta.fecha} </ Box>
                </ListItem>
            </List>

            <Table>
                <TableHead >
                    <TableRow>
                        {encabezados.map(e => {
                            return (<TableCell align="center" key={e} sx={CabeceraTablaStyle} > {e} </TableCell>)
                        })}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {detalleVenta.detalleVenta.map(d => {
                        return(
                            <TableRow key = {d.idProducto}>
                                <TableCell align="center"> {d.nombreProducto} </TableCell>
                                <TableCell align="center"> {d.sku} </TableCell>
                                <TableCell align="center"> {d.unidad} </TableCell>
                                <TableCell align="center"> {d.cantidad} </TableCell>
                                <TableCell align="center"> {d.precioCompra} </TableCell>
                                <TableCell align="center"> {d.precioVenta} </TableCell>
                                <TableCell align="center"> {d.totalVenta} </TableCell>
                                <TableCell align="center"> {d.ganancia} </TableCell>
                                <TableCell align="center"> {d.gananciaPorcentual} </TableCell>
                            </TableRow>
                            )
                        })}
                    </TableBody>
            </Table>
        </Container>
    )
}