import { Container, Button, Box} from "@mui/material"
import { TablaProductos } from "../Tablas/TablaProductos"

export const Productos = () =>{

    const productos = [
        {
            "nombre":"Pollo",
            "sku": "10001",
            "unidad": "kg"
        },
        {
            "nombre":"Chuleta",
            "sku": "10002",
            "unidad": "kg"
        },
        {
            "nombre":"Aceite 900ml",
            "sku": "10003",
            "unidad": "unidad"
        }
    ]
    

    return (
    <Container>
        <Box fontSize={40} textAlign="center"> Productos </Box>
        <Button  variant="contained" color = "primary"> Atrás </Button>
        <TablaProductos data = {productos}></TablaProductos>
    </Container>)

}