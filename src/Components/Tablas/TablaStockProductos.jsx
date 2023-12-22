import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { CabeceraTablaStyle, TablaScrollStyle } from '../../Utils/Temas'
import { makeStyles } from '@mui/styles';


export const TablaStockProductos = ({ data = [], nombre }) => {

    const encabezados = ["Fecha Compra", "Precio Compra", "Stock disponible"]

    const useStyles = makeStyles(TablaScrollStyle);
    const classes = useStyles();

    {
        if (data != null && data.length > 0) {
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
                                {data.map(d => {
                                    return (
                                        <TableRow key={d.idStock}>
                                            <TableCell align="center"> {d.fecha} </TableCell>
                                            <TableCell align="center"> {d.precio} </TableCell>
                                            <TableCell align="center"> {d.stock} </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )
        } else if ((data == null || data.length == 0) && nombre != null) {
            return (
                <Box sx={{ textAlign: "center", fontSize: 30, margin: 5 }}> No existe stock para el producto {nombre}</Box>
            )
        }
    }
}
