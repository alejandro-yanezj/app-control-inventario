import { Container, Button, Box, Autocomplete, TextField, Table, TableCell } from "@mui/material"
import { getClientes as getClientesDummy,getVentas } from "../../Utils/DataUtils"
import { TablaVentas } from "../Tablas/TablaVentas";
import { useState, useEffect } from "react";
import { ListaVariable } from "../Listas/ListaVariable";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate,Outlet } from 'react-router-dom';
import { getClientes, getClienteById } from "../../services/Clientes";
import { getVentasByIdCliente } from '../../services/Ventas'


export const Clientes = () => {

    const [clienteSeleccionado, setClienteSeleccionado] = useState(0);
    const [ventasFiltradas, setVentasFiltradas] = useState(null);
    const [validarVentasTabla, setValidarVentasTabla] = useState(false);
    const [agregarVentaDisabled, setAgregarVentaDisabled] = useState(true);
    const [datosClienteSeleccionado, setDatosClienteSeleccionado] = useState(null);
    const [clientes, setClientes] = useState([]);
    const from = "clientes"
    const navigate = useNavigate();

    const getClientesService = async() =>{
        const c = await getClientes();
        setClientes(c);
    }

    const getVentasClienteService = async(idCliente) =>{
        const vc = await getVentasByIdCliente(idCliente);
        setVentasFiltradas(vc);
    }

    const getClienteSeleccionado = async(idCliente) =>{
        const c = await getClienteById(idCliente);
        if (c!=null){
            setDatosClienteSeleccionado({
                "Nombre":c.nombre,
                "Rut": c.rut + "-" + c.dv,
                "Direccion": c.direccion,
                "Email": c.email,
                "Telefono": c.telefono
            });
            setClienteSeleccionado(c.id);
            getVentasClienteService(c.id)
        }
        else{
            setDatosClienteSeleccionado(0)
        }
        
    }

    useEffect(() => {
        getClientesService();
    }, []);

    useEffect(() => {
        if(clienteSeleccionado!= null && clienteSeleccionado !=0){
            setAgregarVentaDisabled(false)
        }
        else{
            setAgregarVentaDisabled(true)
        }
    }, [clienteSeleccionado]);

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
        debugger
        if (value != null) {
            setClienteSeleccionado(value.id);
            setValidarVentasTabla(true);
            getClienteSeleccionado(value.id);

        } else {
            setClienteSeleccionado(0);
            setValidarVentasTabla(false);
            setDatosClienteSeleccionado(null);
            setVentasFiltradas(null)
        }
    }

    return (
        <Container>
            <Table sx={{marginTop:'2%'}}>
                <TableCell sx={{width:'30%'}}>
                    <Button variant="contained" color="success" endIcon={<PersonAddIcon />} onClick={handleClickAgregarCliente} >Agregar Cliente</Button>
                    <Button variant="outlined" color="success" sx={{ align: "right", margin: 2 }} disabled={agregarVentaDisabled} endIcon={<AddShoppingCartIcon />} > Agregar Venta</Button>

                </TableCell>
                <TableCell sx={{width:'80%'}}>
                    <Autocomplete
                        id="cliente-seleccionado"
                        sx={{marginBottom:'2%'}}
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
            <TablaVentas ventas={ventasFiltradas} validar={validarVentasTabla}></TablaVentas>
            <Outlet context={[from]}></Outlet>
        </Container>)
}