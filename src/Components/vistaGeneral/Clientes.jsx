import { Container, Button, Box, Autocomplete, TextField, Table, TableCell } from "@mui/material"
import { getClientes, getVentas } from "../../Utils/DataUtils"
import { TablaVentas } from "../Tablas/TablaVentas";
import { useState, useEffect } from "react";
import { ListaVariable } from "../Listas/ListaVariable";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { AgregarCliente } from "../agregar/AgregarCliente";
import { useNavigate,Outlet } from 'react-router-dom';


export const Clientes = () => {

    const [clienteSeleccionado, setClienteSeleccionado] = useState(0);
    const [ventasFiltradas, setVentasFiltradas] = useState(null);
    const [nombreClienteSeleccionado, setNombreClienteSeleccionado] = useState(null);
    const [agregarVentaDisabled, setAgregarVentaDisabled] = useState(true);
    const [datosClienteSeleccionado, setDatosClienteSeleccionado] = useState(null);
    const navigate = useNavigate();

    const clientes = getClientes();
    const ventas = getVentas();

    const filtrarVentas = (ventas = []) => {
        let ventasFiltradas = []
        ventas.filter(v => {
            if (v.idCliente === clienteSeleccionado) {
                ventasFiltradas.push(v);
            }
        })
        setVentasFiltradas(ventasFiltradas);
    }

    const handleClickAgregarCliente = () => {
        navigate(`/app-inventario/clientes/agregar-cliente`)
    }

    const handleOnChange = (value) => {
        if (value != null) {
            setClienteSeleccionado(value.idCliente);
            setNombreClienteSeleccionado(value.nombre);
            setDatosClienteSeleccionado({
                "Nombre": value.nombre,
                "Rut": value.rut + "-" + value.dv,
                "Direccion": value.direccion,
                "Email": value.email,
                "Telefono": value.telefono
            });

        } else {
            setClienteSeleccionado(0);
            setNombreClienteSeleccionado(null);
            setDatosClienteSeleccionado(null);
        }
    }

    useEffect(() => {
        filtrarVentas(ventas)
        if (clienteSeleccionado == 0) {
            setAgregarVentaDisabled(true);
        }
        else {
            setAgregarVentaDisabled(false);
        }
    }, [clienteSeleccionado]);

    return (
        <Container>
            <Table>
                <TableCell>
                    <Button variant="contained" color="success" sx={{ align: "center" }} endIcon={<PersonAddIcon />} onClick={handleClickAgregarCliente} >Agregar Cliente</Button>
                </TableCell>
                <TableCell>
                    <Autocomplete
                        id="cliente-seleccionado"
                        sx={{ width: 320, margin: 5 }}
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
                                label="Seleccionar Cliente"
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

            <ListaVariable data={datosClienteSeleccionado}></ListaVariable>
            <TablaVentas data={ventasFiltradas} nombre={nombreClienteSeleccionado}></TablaVentas>
            <Button variant="outlined" color="success" sx={{ align: "right", margin: 2 }} disabled={agregarVentaDisabled} endIcon={<AddShoppingCartIcon />} > Agregar Venta</Button>
            <Outlet></Outlet>
        </Container>)

}