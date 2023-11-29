import React from 'react';
import {Container,Button} from '@mui/material';
import { Link } from 'react-router-dom';

export const Home = () =>{
    return (
        <>
        <h1>App control inventario</h1>
        <Container>
            <Button variant="contained" component={Link} > Clientes </Button>
            <Button variant="contained" > Productos </Button>
            <Button variant="contained" > Ventas </Button>
            <Button variant="contained" > Facturas </Button>
        </Container>
        </>
    );          
}


