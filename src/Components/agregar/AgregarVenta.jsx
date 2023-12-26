import React, { useEffect, useRef, useState } from 'react';
import {
    Button,
    Modal,
    TextField,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Container,
    Switch,
    Paper,
    Autocomplete,
    Typography,
    Box,
    IconButton,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import { CabeceraTablaStyle, ContainerModalAgregarVentaStyle, TablaScrollStyle, TablaVentaScrollStyle } from '../../Utils/Temas';
import { makeStyles } from '@mui/styles';
import { addVenta, getVentaResumenById, getVentas } from '../../services/Ventas';
import { getProductos } from '../../services/Productos';
import { ModalInformacion } from '../Modals/ModalInformacion';
import { useNavigate, useOutletContext } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import { getClientes } from '../../services/Clientes';
import { ModalConfirmacion } from '../Modals/ModalConfirmacion';


export const AgregarVenta = () => {
    const [openModal, setOpenModal] = useState(true);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [ventaSeleccionada, setVentaSeleccionada] = useState(null);
    const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
    const [clienteAgregado, setClienteAgregado] = useState(null);
    const [codigoRespuestaAgregarVenta, setCodigoRespuestaAgregarVenta] = useState(null);

    const [cantidad, setCantidad] = useState(0);
    const [precio, setPrecio] = useState(0);
    const [listaProductos, setListaProductos] = useState([]);
    const [listaClientes, setListaClientes] = useState([]);
    const [listaProductosAgregados, setListaProductosAgregados] = useState([])
    const [ventas, setVentas] = useState([]);
    const [showTablaProductos, setShowTablaProductos] = useState(false);
    const [openModalInformacion, setOpenModalInformacion] = useState(false);
    const [openModalConfirmacion, setOpenModalConfirmacion] = useState(false);
    const [mensajeModalInformacion, setMensajeModalInformacion] = useState(null);
    const [openModalConfirmacionCopiar, setOpenModalConfirmacionCopiar] = useState(false);
    const [openModalInformacionCopiar, setOpenModalInformacionCopiar] = useState(false);
    const [mensajeModalInformacionCopiar, setMensajeModalInformacionCopiar] = useState(null);


    const encabezados = ["Nombre", "SKU", "Unidad", "Cant.", "Precio unitario", "Eliminar"]

    const useStyles = makeStyles(TablaVentaScrollStyle);
    const classes = useStyles();

    const navigate = useNavigate();

    const [from] = useOutletContext();



    const handleOnClose = () => {
        setOpenModal(false);
    };

    const getVentasService = async () => {
        const ventas = await getVentas();
        setVentas(ventas);
    }

    const getProductosService = async () => {
        const productos = await getProductos();
        setListaProductos(productos);
    }

    const getClientesService = async () => {
        const clientes = await getClientes();
        setListaClientes(clientes);
    }

    const addVentaService = async () => {
        debugger
        const venta = await addVenta(clienteAgregado.id, listaProductosAgregados);
        setCodigoRespuestaAgregarVenta(venta.codigo)
        setMensajeModalInformacion(venta.mensaje);
    }

    const getVentaCopiarService = async () => {
        debugger
        const venta = await getVentaResumenById(ventaSeleccionada.idVenta);
        if(venta.idVenta!=null){
            setClienteAgregado(venta.cliente);
            setListaProductosAgregados(venta.productos);
            setVentaSeleccionada(null);
            setMensajeModalInformacionCopiar("Cliente y productos copiados correctamente")
        }
        else{
            setMensajeModalInformacionCopiar(venta.mensaje);
        }
    }

    useEffect(() => {
        getVentasService();
        getProductosService();
        getClientesService();
    }, []);

    useEffect(() => {
        if (listaProductosAgregados != null && listaProductosAgregados.length > 0) {
            setShowTablaProductos(true);
        }
        else {
            setShowTablaProductos(false)
        }
    }, [listaProductosAgregados]);

    const handleAddProduct = () => {
        debugger
        if (productoSeleccionado !== null) {

            const productData = {
                ...productoSeleccionado,
                cantidad,
                precio,
            };
            if (!verificarListaProductosAgregados(productData)) {
                setListaProductosAgregados([...listaProductosAgregados, productData]);
            } else {
                setMensajeModalInformacion("El producto que desea agregar ya se encuentra en la lista de productos agregados");
                setOpenModalInformacion(true);
            }
            setProductoSeleccionado(null);
            setCantidad(0);
            setPrecio(0);
        }
    };

    const verificarListaProductosAgregados = (productoNuevo) => {
        const existe = listaProductosAgregados.find(item => item.id === productoNuevo.id);
        if (existe != null) {
            return true;
        }
        return false;
    }

    const handleOnChangeProducto = (value) => {
        setProductoSeleccionado(value);
    }

    const handleOnChangeVenta = (value) => {
        setVentaSeleccionada(value);
    }

    const handleOnChangeCliente = (value) => {
        setClienteSeleccionado(value);
    }
    const handleDeleteProduct = (index) => {
        const updatedList = listaProductosAgregados.filter((_, idx) => idx !== index);
        setListaProductosAgregados(updatedList);
    };

    const handleClickCopy = () => {
        setOpenModalConfirmacionCopiar(true);
    }

    const handleDeleteCliente = () => {
        setClienteAgregado(null)
    }

    const handleClickOK = () => {
        if (codigoRespuestaAgregarVenta === "200") {
            setOpenModalInformacion(false);
            navigate("/app-inventario/ventas");
        } else {
            setOpenModalInformacion(false);
        }
    }

    const handleAddCliente = () => {

        if (clienteSeleccionado != null && clienteAgregado == null) {
            setClienteAgregado(clienteSeleccionado);
        }
        else if (clienteSeleccionado === clienteAgregado) {
            setMensajeModalInformacion("El cliente ya ha sido agregado");
            setOpenModalInformacion(true);
        }
        else {
            setMensajeModalInformacion("La venta solo puede tener un cliente a la vez");
            setOpenModalInformacion(true);
        }
        setClienteSeleccionado(null);
    }

    const handleUpdateQuantity = (value, index) => {
        const updatedList = [...listaProductosAgregados];
        updatedList[index].cantidad = value;
        setListaProductosAgregados(updatedList);
    };

    const handleUpdatePrice = (value, index) => {
        const updatedList = [...listaProductosAgregados];
        updatedList[index].precio = value;
        setListaProductosAgregados(updatedList);
    };

    const handleOnClickVolver = () => {
        navigate(`/app-inventario/${from}`)
    }

    const handleClickGenerarVenta = () => {
        if (validarCliente() && validarProductos()) {
            setOpenModalConfirmacion(true);
        } else {
            setOpenModalInformacion(true);
        }
    }

    const validarCliente = () => {
        debugger
        if (clienteAgregado == null) {
            setMensajeModalInformacion("No se puede agregar una venta sin cliente")
            return false;
        }
        return true;
    }

    const validarProductos = () => {
        debugger
        if (listaProductosAgregados == null || listaProductosAgregados.length === 0) {
            setMensajeModalInformacion("No se puede agregar una venta sin productos")
            return false;
        } else {
            const productosInvalidos = listaProductosAgregados.filter(producto => producto.precio <= 0 || producto.cantidad <= 0);
            if (productosInvalidos != null && productosInvalidos.length > 0) {
                setMensajeModalInformacion("No se pueden agregar productos sin cantidad o precio")
                return false;
            }
            return true;

        }

    }



    const handleClickConfirmarInfo = async () => {
        const response = await addVentaService();
        setOpenModalInformacion(true);
        setOpenModalConfirmacion(false);
    }

    const handleClickCancelarInfo = () => {
        setOpenModalConfirmacion(false);
    }

    const handleClickCancelarCopiar = () => {
        setOpenModalConfirmacionCopiar(false);
    }

    const handleClickOKCopiar = () => {
        setOpenModalInformacionCopiar(false);
    }

    const handleClickConfirmarCopiar = async () => {
        debugger
        const response = await getVentaCopiarService();
        setOpenModalInformacionCopiar(true);
        setOpenModalConfirmacionCopiar(false);
    }



    return (
        <Modal open={openModal} onClose={handleOnClose} BackdropProps={{ onClick: (event) => event.stopPropagation() }}>
            <Container style={ContainerModalAgregarVentaStyle}>
                <Container style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ mt: '2%', textAlign: 'center', fontWeight: 'bold', fontSize: '120%' }}>Agregar Venta</Typography>
                    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <IconButton color="error" onClick={handleOnClickVolver} sx={{ fontSize: '100%', alignSelf: 'flex-start' }}>
                            <ArrowBackIosIcon />
                            Volver
                        </IconButton>

                        <IconButton
                            color="success" onClick={handleClickGenerarVenta} sx={{ fontSize: '100%', alignSelf: 'flex-end' }}>
                            <ShoppingCartRoundedIcon />
                            Generar venta
                        </IconButton>
                    </Box>
                </Container>
                <Container style={{ display: 'flex', alignItems: 'center' }}>

                    <Autocomplete
                        sx={{ width: '60%', marginRight: '1%' }}
                        value={ventaSeleccionada}
                        options={ventas}
                        getOptionLabel={(option) => option.fecha + " | " + option.nombreCliente + " | " + option.numero + " | " + option.monto}
                        renderOption={(props, option) => (
                            <Box component="li"{...props}>
                                {option.fecha} | {option.nombreCliente} | numero:{option.numero} | monto:{option.monto}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField {...params} label="¿Importar detalle desde otra venta?" size="small" />
                        )}
                        onChange={(e, newValue) => handleOnChangeVenta(newValue)}
                    />
                    <Button color="info" onClick={handleClickCopy} disabled={!ventaSeleccionada}>
                        <ContentCopyTwoToneIcon />
                        Copiar detalle
                    </Button>
                </Container>

                <Container style={{ display: 'flex', alignItems: 'center' }}>
                    <Autocomplete
                        value={clienteSeleccionado}
                        sx={{ width: '60%', marginRight: '1%' }}
                        options={listaClientes}
                        getOptionLabel={(option) => option.rut + "-" + option.dv + " | " + option.nombre}
                        renderOption={(props, option) => (
                            <Box component="li"{...props}>
                                {option.rut}-{option.dv} | {option.nombre}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Seleccionar cliente para la nueva venta"
                                size="small"
                            />
                        )}
                        onChange={(e, newValue) => handleOnChangeCliente(newValue)}
                    />

                    <Button onClick={handleAddCliente} disabled={!clienteSeleccionado}>
                        <AddBoxRoundedIcon />
                        Agregar Cliente
                    </Button>
                </Container>

                <Container style={{ display: 'flex', alignItems: 'center', marginBottom: '2%' }}>
                    <Autocomplete
                        value={productoSeleccionado}
                        sx={{ width: '60%', marginRight: '1%' }}
                        options={listaProductos}
                        getOptionLabel={(option) => option.sku + " | " + option.nombre + " | " + option.unidad}
                        renderOption={(props, option) => (
                            <Box component="li"{...props}>
                                {option.sku} | {option.nombre} | {option.unidad}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Seleccionar producto a agregar"
                                size="small"
                            />
                        )}
                        onChange={(e, newValue) => handleOnChangeProducto(newValue)}
                    />

                    <Button onClick={handleAddProduct} disabled={!productoSeleccionado}>
                        <AddBoxRoundedIcon />
                        Agregar Producto
                    </Button>
                </Container>
                {clienteAgregado && (
                    <Container style={{ display: 'flex', alignItems: 'center', marginBottom: '2%' }}>
                        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '100%', mr: '3%' }}>
                            Venta para el cliente {clienteAgregado.nombre}
                        </Typography>
                        <Button color="error" onClick={handleDeleteCliente}>
                            <DeleteForeverIcon />
                            Eliminar cliente
                        </Button>

                    </Container>
                )}
                {showTablaProductos && (<TableContainer component={Paper} className={classes.tableContainer}>
                    <Table className={classes.table}>
                        <TableHead className={classes.tableHeader}>
                            <TableRow>
                                {encabezados.map((e, index) => (
                                    <TableCell key={index} align="center">
                                        {e}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listaProductosAgregados.map((product, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center" sx={{ width: '40%' }}>
                                        {product.nombre}
                                    </TableCell>
                                    <TableCell align="center" sx={{ width: '10%' }}>
                                        {product.sku}
                                    </TableCell>
                                    <TableCell align="center" sx={{ width: '10%' }}>
                                        {product.unidad}
                                    </TableCell>
                                    <TableCell align="center" sx={{ width: '15%' }}>
                                        <TextField
                                            type="number"
                                            value={product.cantidad}
                                            onChange={(e) => handleUpdateQuantity(e.target.value, index)}
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell align="center" sx={{ width: '20%' }}>
                                        <TextField
                                            type="number"
                                            value={product.precio}
                                            onChange={(e) => handleUpdatePrice(e.target.value, index)}
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell align="center" sx={{ width: '5%' }}>
                                        <Button color="error" onClick={() => handleDeleteProduct(index)}>
                                            <DeleteForeverIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>)}

                <ModalConfirmacion
                    openModalConfirmacion={openModalConfirmacion}
                    mensaje={"¿Confirma que desea generar una nueva venta con los datos ingresados?"}
                    handleClickCancelarInfo={handleClickCancelarInfo}
                    handleClickConfirmarInfo={handleClickConfirmarInfo}
                />

                <ModalConfirmacion
                    openModalConfirmacion={openModalConfirmacionCopiar}
                    mensaje={"¿Confirma que desea copiar la venta? Los datos que hayan sido ingresados previamente serán borrados"}
                    handleClickCancelarInfo={handleClickCancelarCopiar}
                    handleClickConfirmarInfo={handleClickConfirmarCopiar}
                />

                <ModalInformacion
                    openModalInformacion={openModalInformacion}
                    mensaje={mensajeModalInformacion}
                    handleClickOK={handleClickOK}
                />

                <ModalInformacion
                    openModalInformacion={openModalInformacionCopiar}
                    mensaje={mensajeModalInformacionCopiar}
                    handleClickOK={handleClickOKCopiar}
                />
            </Container>
        </Modal>

    )
};
