import  { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import  { CabeceraTablaStyle } from '../../Utils/Temas'

export const TablaStockProductos = ({data=[], nombre}) =>{
    
    const encabezados = ["Fecha Compra", "Precio Compra", "Stock disponible"]

    {if(data!=null && data.length>0){
        return(
            <>
                <Table >
                    <TableHead>
                        <TableRow>
                            {encabezados.map(e =>{
                                return (<TableCell align="center" key={e} sx={CabeceraTablaStyle} > {e} </TableCell>)
                            })}
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                    {data.map(d => {
                        return(
                            <TableRow key = {d.idStock}>
                                <TableCell align="center"> {d.fecha} </TableCell>
                                <TableCell align="center"> {d.precio} </TableCell>
                                <TableCell align="center"> {d.stock} </TableCell>
                            </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </>
            )
    }else if((data==null || data.length==0) && nombre!=null){
        return(
        <Box sx={{textAlign:"center",fontSize:30,margin:5}}> No existe stock para el producto {nombre}</Box>
        )
    }
}
}
