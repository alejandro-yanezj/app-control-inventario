import { TableBody, TableHead, TableRow, TableCell, Container, TablePagination, Table } from "@mui/material"


export const TablaVentas= ({data = []}) =>{

    const encabezado = ["Codigo", "Fecha"]

    return (
        <Container>
            <Table>
                <TableHead style={{background:"#000000"}}>
                <TableRow >
                    {encabezado.map(e =>{
                        return (<TableCell key={e} style={{color:"#FFFFFF"}} > {e} </TableCell>)
                    })}
                </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(d => {
                        return(
                            <TableRow key = {d.codigo}>
                            <TableCell> {d.codigo} </TableCell>
                            <TableCell> {d.fecha} </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Container>
    )
}