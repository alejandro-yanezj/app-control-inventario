import { Container, Button, Box, Autocomplete, TextField, Table, TableCell } from "@mui/material"
import { TablaStockProductos } from "../Tablas/TablaStockProductos"
import { useState, useEffect } from "react"
import { getStockProductos } from "../../Utils/DataUtils"
import { ListaVariable } from "../Listas/ListaVariable"
import { CabeceraTablaStyle } from "../../Utils/Temas"
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PlaylistAddTwoToneIcon from '@mui/icons-material/PlaylistAddTwoTone';
import { useNavigate, Outlet } from 'react-router-dom';
import { getProductoStockByIdProducto, getProductos } from "../../services/Productos"


export const Productos = () => {


    const [productoSeleccionado, setProductoSeleccionado] = useState(0);
    const [nombreProductoSeleccionado, setNombreProductoSeleccionado] = useState(null);
    const [agregarStockDisabled, setAgregarStockDisabled] = useState(true);
    const [datosProductoSeleccionado, setDatosProductoSeleccionado] = useState(null);
    const [productos, setproductos] = useState([]);
    const [stockProductoSeleccionado, setStockProductoSeleccionado] = useState([]);
    const navigate = useNavigate();

    const getProductosService = async () => {
        const p = await getProductos();
        setproductos(p);
    }
    const getProductoStockSeleccionado = async (productoSeleccionado) => {
        const p = await getProductoStockByIdProducto(productoSeleccionado);
        console.log("response servicio stock -->", p)
        setStockProductoSeleccionado(p);
    }

    useEffect(() => {
        getProductosService();

    }, []);

    useEffect(() => {
        getProductoStockSeleccionado(productoSeleccionado);
        if (productoSeleccionado == 0) {
            setAgregarStockDisabled(true);
        }
        else {
            setAgregarStockDisabled(false);
        }
    }, [productoSeleccionado]);

    const handleOnChange = (value) => {
        if (value != null) {
            setProductoSeleccionado(value.id);
            setNombreProductoSeleccionado(value.nombre);
            setDatosProductoSeleccionado({

                "Nombre": value.nombre,
                "SKU": value.sku,
                "Unidad": value.unidad
            }
            )
        } else {
            setProductoSeleccionado(0);
            setNombreProductoSeleccionado(null);
            setDatosProductoSeleccionado(null);
        }
    }

    const handleClickAgregarProducto = () => {
        navigate("/app-inventario/productos/agregar-producto")
    }

    const handleClickAgregarStock = () => {
        navigate("/app-inventario/productos/agregar-stock")
    }

    return (
        <Container>
            <Table sx={{ marginTop: '2%' }}>
                <TableCell sx={{ width: '30%' }}>
                    <Button variant="contained" color="success" sx={{ align: "center" }} endIcon={<AddBusinessIcon />} onClick={handleClickAgregarProducto} >Agregar Producto</Button>
                    <Button variant="outlined" color="success" sx={{ align: "right", margin: 2 }} disabled={agregarStockDisabled} endIcon={<PlaylistAddTwoToneIcon />} onClick={handleClickAgregarStock} > Agregar Stock</Button>

                </TableCell>
                <TableCell sx={{ width: '70%' }}>
                    <Autocomplete
                        id="producto-seleccionado"
                        sx={{ marginBottom: '2%', textAlign: 'center' }}
                        options={productos}
                        autoHighlight
                        getOptionLabel={(option) => option.sku + "  " + option.nombre + "  " + option.unidad}
                        renderOption={(props, option) => (
                            <Box component="li"{...props}>
                                {option.sku} | {option.nombre} | {option.unidad}
                            </Box>
                        )}
                        noOptionsText="Sin coincidencias"
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Seleccionar producto"
                                inputProps={{
                                    ...params.inputProps,
                                }}
                            />
                        )}
                        onChange={(event, newValue) => { handleOnChange(newValue) }}
                        isOptionEqualToValue={(option, value) => { return value.id }}
                    />
                </TableCell>

            </Table>

            <ListaVariable data={datosProductoSeleccionado}></ListaVariable>
            <TablaStockProductos data={stockProductoSeleccionado} nombre={nombreProductoSeleccionado} estilo={CabeceraTablaStyle}></TablaStockProductos>

            <Outlet context={[productoSeleccionado]}></Outlet>


        </Container>

    )

}