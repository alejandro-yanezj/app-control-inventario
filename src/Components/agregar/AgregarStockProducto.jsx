import { Container, List, ListItem,TextField, Button, Box}from '@mui/material'

export const AgregarStock = () =>{

    return (
        <>
            <Container>
            <Box sx={{fontSize:40}}> Agregar Stock para el producto "id/nombre del producto" </Box>
            <List>
                <ListItem>
                    <TextField id="fechaCompra" label="Fecha de compra" variant="outlined"/>
                </ListItem>
                <ListItem>
                    <TextField id="cantidad" label="Cantidad" variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField id="precio" label="Precio de compra" variant="outlined" />
                </ListItem>
            </List>
            <Button variant="contained" color="error" sx={{margin:10}}> Cancelar</Button>
            <Button variant="contained" color="success"> Guardar</Button>
            </Container>
        </>
    )
}