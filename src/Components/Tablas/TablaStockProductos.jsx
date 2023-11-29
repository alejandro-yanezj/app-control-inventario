import  { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

export const TablaStockProductos = ({data=[]}) =>{
    
    const encabezados = ["Fecha Compra", "Precio Compra", "Stock"]

    return(
    <>
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
                    <TableRow key = {d.fecha}>
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
}
