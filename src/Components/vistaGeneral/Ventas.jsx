import { Container, Box, Table, TableCell, Button, Autocomplete, TextField } from "@mui/material"
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AddShoppingCartIcon from '@mui/icons-material/PlaylistAddTwoTone';

import { TablaVentas } from "../Tablas/TablaVentas";
import { useEffect, useState } from "react";
import { getVentasByIdCliente, getVentas } from "../../services/Ventas"
import { getClientes } from "../../services/Clientes";
import { Outlet, useNavigate } from "react-router-dom";
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';



export const Ventas = () => {

    const [ventasTotales, setVentasTotales] = useState([])
    const [ventas, setVentas] = useState(ventasTotales);
    const [validarVentasTabla, setValidarVentasTabla] = useState(false);
    const [clientes, setClientes] = useState([]);
    const from = "ventas"

    const navigate = useNavigate();



    const getVentasService = async () => {
        const vc = await getVentas();
        console.log("ventas -->", vc)
        setVentasTotales(vc);
        setVentas(vc);
    }

    const getClientesService = async() =>{
        const c = await getClientes();
        setClientes(c);
    }

    const getVentasClienteService = async (idCliente) => {
        const vc = await getVentasByIdCliente(idCliente);
        setVentas(vc);
    }

    useEffect(() => {
        getClientesService();
        getVentasService();
    }, []);

    const handleOnChange = (value) => {
        if (value != null) {
            setValidarVentasTabla(true);
            getVentasClienteService(value.id)
        }
        else {
            setValidarVentasTabla(false);
            setVentas(ventasTotales)
        }

    }

    const handleOnClickAgregarVenta = () =>{
        navigate("/app-inventario/ventas/generar-venta")
    }
    

    return (
        <Container>
            <Table sx={{ marginTop: '2%' }}>
                <TableCell sx={{ width: '30%' }}>

                    <Button variant="contained" color="success" sx={{ align: "center" }} endIcon={<ShoppingCartCheckoutRoundedIcon />} onClick={handleOnClickAgregarVenta} >Agregar Venta</Button>

                </TableCell>
                <TableCell sx={{ width: '70%' }}>
                    <Autocomplete
                        id="cliente-seleccionado"
                        sx={{ marginBottom: '2%', textAlign: 'center' }}
                        options={clientes}
                        autoHighlight
                        getOptionLabel={(option) => option.nombre + "  " + option.rut + "-" + option.dv}
                        renderOption={(props, option) => (
                            <Box component="li"{...props}>
                                {option.rut + "-" + option.dv} |  {option.nombre}
                            </Box>
                        )}
                        noOptionsText="Sin coincidencias"
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Filtrar por cliente"
                                inputProps={{
                                    ...params.inputProps,
                                }}
                            />
                        )}
                        onChange={(event, newValue) => { handleOnChange(newValue) }}
                        isOptionEqualToValue={(option, value) => { return value.idCliente }}
                    />
                </TableCell>

            </Table>
            <TablaVentas ventas={ventas} validar={validarVentasTabla}></TablaVentas>

            <Outlet context={[from]}></Outlet>

        </Container>)

}