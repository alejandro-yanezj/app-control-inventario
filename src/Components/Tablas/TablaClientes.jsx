import  { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

export const TablaClientes = ({data=[]}) =>{
    
    const encabezados = ["Nombre", "Nombre", "Unidad"]

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
