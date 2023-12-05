import { TableBody, TableHead, TableRow, TableCell, Table, Box} from "@mui/material"
import  { CabeceraTablaStyle } from '../../Utils/Temas'

export const TablaVentas= ({ventas = [], validar=false, clientes=[]}) =>{

    const encabezados = ["Codigo", "Fecha", "Cliente"]

    {if(ventas!=null && ventas.length>0){
        return(
            <>
                <Box sx={{textAlign:"left",fontSize:30, margin:5}}> Ventas: </Box>
                <Table >
                    <TableHead >
                        <TableRow>
                            {encabezados.map(e =>{
                                return (<TableCell key={e} sx={CabeceraTablaStyle} > {e} </TableCell>)
                            })}
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                    {ventas.map(v => {
                        return(
                            <TableRow key = {v.idVenta}>
                                <TableCell> {v.numero} </TableCell>
                                <TableCell> {v.fecha} </TableCell>
                                <TableCell>
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
        return(<Box sx={{textAlign:"center",fontSize:'100%', margin:'3%'}}> No existen ventas</Box>)
    }
}
}