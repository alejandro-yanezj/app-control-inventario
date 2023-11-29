import  { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

export const TablaProductos = ({data=[]}) =>{
    
    const encabezados = ["Sku", "Nombre", "Unidad"]

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
                    <TableRow key = {d.sku}>
                        <TableCell> {d.sku} </TableCell>
                        <TableCell> {d.nombre} </TableCell>
                        <TableCell> {d.unidad} </TableCell>
                    </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </>
    )
}
