import  { Box, Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

export const TablaStockProductos = ({data=[], nombre}) =>{
    
    const encabezados = ["Fecha Compra", "Precio Compra", "Stock"]

    {if(data!=null && data.length>0){
        return(
            <>
                <Box sx={{textAlign:"center",fontSize:30}}> Stock de producto {nombre}</Box>
                <Table>
                    <TableHead style={{background:"#000000"}}>
                        <TableRow>
                            {encabezados.map(e =>{
                                return (<TableCell key={e} style={{color:"#FFFFFF"}} > {e} </TableCell>)
                            })}
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                    {data.map(d => {
                        return(
                            <TableRow key = {d.idStock}>
                                <TableCell> {d.fecha} </TableCell>
                                <TableCell> {d.precio} </TableCell>
                                <TableCell> {d.stock} </TableCell>
                            </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </>
            )
    }else if((data==null || data.length==0) && nombre!=null){
        return(
        <Box sx={{textAlign:"center",fontSize:30}}> No existe stock para el producto {nombre}</Box>
        )
    }
}
}
