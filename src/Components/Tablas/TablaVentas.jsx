import { TableBody, TableHead, TableRow, TableCell, Table, Box} from "@mui/material"
import  { CabeceraTablaStyle } from '../../Utils/Temas'

export const TablaVentas= ({ventas = [], validar=false, clientes=[]}) =>{

    const encabezados = ["Codigo venta", "Fecha compra", "Cliente"]

    {if(ventas!=null && ventas.length>0){
        return(
            <>
                <Table >
                    <TableHead >
                        <TableRow>
                            {encabezados.map(e =>{
                                return (<TableCell align = "center" key={e} sx={CabeceraTablaStyle} > {e} </TableCell>)
                            })}
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                    {ventas.map(v => {
                        return(
                            <TableRow key = {v.idVenta}>
                                <TableCell align="center"> {v.numero} </TableCell>
                                <TableCell align="center"> {v.fecha} </TableCell>
                                <TableCell align="center">
                                    {clientes.map(c=>{
                                        if(c.idCliente===v.idCliente) return c.nombre
                                    })}
                                </TableCell>
                            </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </>
            )
    }else if(validar){
        return(<Box sx={{textAlign:"center",fontSize:'100%', margin:'3%'}}> No existen ventas para cliente seleccionado</Box>)
    }
}
}