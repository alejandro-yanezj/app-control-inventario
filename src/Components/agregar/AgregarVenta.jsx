import React, { useEffect, useState } from 'react';
import {
    Button,
    Modal,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
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
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import { CabeceraTablaStyle, ContainerModalAgregarVentaStyle, TablaScrollStyle, TablaVentaScrollStyle } from '../../Utils/Temas';
import { makeStyles } from '@mui/styles';
import { getVentas } from '../../services/Ventas';

export const AgregarVenta = () => {
    const [openModal, setOpenModal] = useState(true);
    const [sku, setSku] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [productList, setProductList] = useState([]);
    const [showSales, setShowSales] = useState(false);
    const [ventas, setVentas] = useState([]);

    const encabezados = ["SKU", "Cant.", "P. venta", "Eliminar"]

    const useStyles = makeStyles(TablaVentaScrollStyle);
    const classes = useStyles();

    const handleOnClose = () => {
        setOpenModal(false);
    };

    const getVentasService = async () => {
        const vc = await getVentas();
        setVentas(vc);
    }

    useEffect(() => {
        getVentasService()
    }, []);

    const handleAddProduct = () => {
        if (sku !== '' && quantity > 0 && price > 0) {
            const productData = {
                sku,
                quantity,
                price,
            };
            setProductList([...productList, productData]);
            setSku('');
            setQuantity(0);
            setPrice(0);
        }
    };

    const handleDeleteProduct = (index) => {
        const updatedList = productList.filter((_, idx) => idx !== index);
        setProductList(updatedList);
    };

    const handleClickCopy = () => {
        console.log("boton copy")
    }

    return (
        <Modal open={openModal} onClose={handleOnClose}>
            <Container style={ContainerModalAgregarVentaStyle}>
                <Container style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ marginBottom: '2%', textAlign: 'center', fontWeight: 'bold', fontSize: '120%' }}>Agregar Ventas</Typography>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Typography variant="body1" sx={{ marginBottom: '3%' }}>
                            ¿Copiar desde otra venta?
                        </Typography>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '60%', flexBasis: '60%' }}>
                            <Switch checked={showSales} onChange={() => setShowSales(!showSales)} sx={{ mb: '5%', ml: '2%', mr: '2%' }} />
                            {showSales && (
                                <>

                                    <Autocomplete
                                        sx={{ width: '100%' }}
                                        options={ventas}
                                        getOptionLabel={(option) => option.fecha+ " | "+option.nombreCliente+ " | "+ option.numero+" | " + option.monto}
                                        renderOption={(props, option) => (
                                            <Box component="li"{...props}>
                                                {option.fecha} | {option.nombreCliente} | numero:{option.numero} | monto:{option.monto}
                                            </Box>
                                        )}
                                        renderInput={(params) => (
                                            <TextField {...params} label="Seleccionar venta a copiar" size="small" />
                                        )}
                                    />
                                    <Button color="success" onClick={handleClickCopy} style={{ marginLeft: '5px' }}>
                                        <ContentCopyRoundedIcon />
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </Container>

                <Container style={{ display: 'flex', alignItems: 'center', marginBottom: '2%' }}>
                    <Autocomplete
                        sx={{ width: '50%', marginRight: '1%' }}
                        options={['SKU001', 'SKU002']}
                        renderInput={(params) => (
                            <TextField {...params} label="Agregar Producto" size="small" />
                        )}
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                    />
                    <TextField
                        type="number"
                        label="Cant."
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        size="small"
                        sx={{ width: '10%', marginRight: '1%' }}
                        disabled={!sku}
                    />
                    <TextField
                        type="number"
                        label="Precio"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        size="small"
                        sx={{ width: '20%' }}
                        disabled={!sku}
                    />
                    <Button onClick={handleAddProduct} disabled={!sku}>
                        <AddBoxRoundedIcon />
                    </Button>
                </Container>
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table className={classes.table}>
                        <TableHead className={classes.tableHeader}>
                            <TableRow>
                                {encabezados.map(e => {
                                    return (<TableCell align="center" key={e} x> {e} </TableCell>)
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productList.map((product, index) => (
                                <TableRow key={index}>
                                    <TableCell>{product.sku}</TableCell>
                                    <TableCell>{product.quantity}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>
                                        <Button color="error" onClick={() => handleDeleteProduct(index)}> <DeleteForeverIcon /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Modal>

    )
};
