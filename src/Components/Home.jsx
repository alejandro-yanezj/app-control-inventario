import React, { useState, useEffect } from 'react';
import { Container, Button, Box, BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
import { IconoNavBarSize, BotonesNavBarStyle, NavBarStyle } from '../Utils/Temas';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';

export const Home = () => {

    const [seleccionado, setSeleccionado] = useState(null)

    useEffect(() => {
        if (seleccionado === 0) {
            navigate("clientes");
        }
        else if (seleccionado === 1) {
            navigate("productos")
        }
        else if (seleccionado === 2) {
            navigate("ventas")
        }
    }, [seleccionado]);

    const navigate = useNavigate();

    return (
        <>
            <BottomNavigation
                sx={NavBarStyle}
                showLabels
                value={seleccionado}
                onChange={(event, value) => {
                    setSeleccionado(value);
                }}
            >
                <BottomNavigationAction sx={BotonesNavBarStyle} label={<Typography sx={{ fontSize: 30 }}>Clientes</Typography>} icon={<PersonOutlineTwoToneIcon sx={IconoNavBarSize} />} />
                <BottomNavigationAction sx={BotonesNavBarStyle} label={<Typography sx={{ fontSize: 30 }}>Productos</Typography>} icon={<Inventory2TwoToneIcon sx={IconoNavBarSize} />} />
                <BottomNavigationAction sx={BotonesNavBarStyle} label={<Typography sx={{ fontSize: 30 }}>Ventas</Typography>} icon={<ShoppingCartTwoToneIcon sx={IconoNavBarSize} />} />
            </BottomNavigation>
            <Outlet></Outlet>


        </>
    );
}


