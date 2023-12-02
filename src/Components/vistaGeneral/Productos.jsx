import { Container, Button, Box, Autocomplete, TextField, Table, TableCell } from "@mui/material"
import { TablaStockProductos } from "../Tablas/TablaStockProductos"
import { useState, useEffect } from "react"
import { getProductos, getStockProductos } from "../../Utils/DataUtils"
import { ListaVariable } from "../Listas/ListaVariable"
import { CabeceraTablaStyle } from "../../Utils/Temas"
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PlaylistAddTwoToneIcon from '@mui/icons-material/PlaylistAddTwoTone';

export const Productos = () => {

    const [productoSeleccionado, setProductoSeleccionado] = useState(0);
    const [stockFiltrado, setStockFiltrado] = useState(null);
    const [nombreProductoSeleccionado, setNombreProductoSeleccionado] = useState(null);
    const [agregarStockDisabled, setAgregarStockDisabled] = useState(true);
    const [datosProductoSeleccionado, setDatosProductoSeleccionado] = useState(null);

    //traer info desde el servicio backend
    const productos = getProductos();
    const stockProductos = getStockProductos();

    const handleOnChange = (value) => {
        if (value != null) {
            setProductoSeleccionado(value.id);
            setNombreProductoSeleccionado(value.nombre);
            setDatosProductoSeleccionado({
                "Nombre": value.nombre,
                "SKU": value.sku,
                "Unidad": value.unidad
            })
        } else {
            setProductoSeleccionado(0);
            setNombreProductoSeleccionado(null);
            setDatosProductoSeleccionado(null);
        }
    }

    const filtarStockProducto = (stockProductos = []) => {
        let productosFiltrados = []
        stockProductos.filter(p => {
            if (p.idProducto === productoSeleccionado) {
                productosFiltrados.push(p);
            }
        })
        setStockFiltrado(productosFiltrados);
    }

    useEffect(() => {
        filtarStockProducto(stockProductos)
        if (productoSeleccionado == 0) {
            setAgregarStockDisabled(true);
        }
        else {
            setAgregarStockDisabled(false);
        }
    }, [productoSeleccionado]);


    return (
        <Container>
            <Table>
                <TableCell>
                <Button variant="contained" color="success" sx={{ align: "center"}} endIcon={<AddBusinessIcon/>} >Agregar Producto</Button>

                </TableCell>
                <TableCell>
                <Autocomplete
                id="producto-seleccionado"
                sx={{ width: 300, marginTop: 5 }}
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
                isOptionEqualToValue={(option, value) => { return value.sku }}
            />
                </TableCell>

            </Table>
            
            <ListaVariable data={datosProductoSeleccionado}></ListaVariable>
            <TablaStockProductos data={stockFiltrado} nombre={nombreProductoSeleccionado} estilo={CabeceraTablaStyle}></TablaStockProductos>
            <Button variant="outlined" color="success" sx={{ align: "right", margin: 2 }} disabled={agregarStockDisabled} endIcon={<PlaylistAddTwoToneIcon />} > Agregar Stock</Button>
        </Container>)

}