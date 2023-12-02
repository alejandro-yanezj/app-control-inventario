import { TableBody, TableHead, TableRow, TableCell, Table, Box} from "@mui/material"
import  { CabeceraTablaStyle } from '../../Utils/Temas'

export const TablaVentas= ({data = [], nombre=""}) =>{

    const encabezados = ["Codigo", "Fecha"]

    {if(data!=null && data.length>0){
        return(
            <>
                <Box sx={{textAlign:"center",fontSize:30, margin:5}}> Ventas {nombre}</Box>
                <Table >
                    <TableHead style={{background:"#e9791a"}}>
                        <TableRow>
                            {encabezados.map(e =>{
                                return (<TableCell key={e} sx={CabeceraTablaStyle} > {e} </TableCell>)
                            })}
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                    {data.map(d => {
                        return(
                            <TableRow key = {d.idVenta}>
                                <TableCell> {d.numero} </TableCell>
                                <TableCell> {d.fecha} </TableCell>
                            </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </>
            )
    }else if((data==null || data.length==0) && nombre!=null){
        return(
        <Box sx={{textAlign:"center",fontSize:30, margin:5}}> No existen ventas para el cliente {nombre}</Box>
        )
    }
}
}