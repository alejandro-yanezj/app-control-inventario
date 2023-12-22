import { Container, Box, Button, Typography, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import HouseIcon from '@mui/icons-material/House';

export const ErrorRedirectHome = () => {

    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate("/");
    }

    return (
        <Container>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Typography color="red" fontSize={"130%"} align="center" marginTop={'5%'}>
                        <ErrorOutlineIcon /> No se logra encontrar el recurso solicitado
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                        <Button startIcon={<HouseIcon />} variant="text" color="primary" onClick={handleClickHome}>
                            Volver al Inicio
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>


    )
}