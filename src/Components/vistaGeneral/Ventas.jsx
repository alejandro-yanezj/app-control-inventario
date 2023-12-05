import { Container, Box, Table, TableCell, Button, Autocomplete, TextField } from "@mui/material"
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PlaylistAddTwoToneIcon from '@mui/icons-material/PlaylistAddTwoTone';

import { getClientes, getVentas } from "../../Utils/DataUtils"
import { TablaVentas } from "../Tablas/TablaVentas";
import { useState } from "react";
import { OrdenarVentasDesc } from "../../Utils/Utils";


export const Ventas = () => {

    const clientes = getClientes();
    const ventasTotales = OrdenarVentasDesc(getVentas());
    const [ventas, setVentas] = useState(ventasTotales);
    const [validarVentasTabla, setValidarVentasTabla] = useState(false);

    const handleOnChange = (value) => {
        if (value != null) {
            setValidarVentasTabla(true);
            let ventasCliente = [];
            ventasTotales.map(v => {
                if (v.idCliente === value.idCliente) {
                    ventasCliente.push(v);
                };
            });
            setVentas(ventasCliente);
        }
        else {
            setValidarVentasTabla(false);
            setVentas(ventasTotales)
        }

    }




    return (
        <Container>
            <Table sx={{ marginTop: '2%' }}>
                <TableCell sx={{ width: '30%' }}>

                    <Button variant="contained" color="success" sx={{ align: "center" }} endIcon={<AddBusinessIcon />} onClick={console.log("Agregar venta")} >Agregar Venta</Button>

                </TableCell>
                <TableCell sx={{ width: '70%' }}>
                    <Autocomplete
                        id="cliente-seleccionado"
                        sx={{ marginBottom: '2%', textAlign: 'center' }}
                        options={clientes}
                        autoHighlight
                        getOptionLabel={(option) =>  option.nombre + "  " + option.rut + "-" + option.dv}
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
            <TablaVentas ventas={ventas} validar={validarVentasTabla} clientes={clientes}></TablaVentas>

        </Container>)

}