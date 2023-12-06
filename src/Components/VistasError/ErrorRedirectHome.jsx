import { Container, Box, Button, Typography, TableCell, TableRow, TableHead, TableBody } from "@mui/material"
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { ContainerErrorStyle } from "../../Utils/Temas";

import HouseIcon from '@mui/icons-material/House';

export const ErrorRedirectHome = () => {

    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate("/");
    }

    return (
        <Container sx={ContainerErrorStyle}>
            <TableBody>
                <TableRow>
                    <Typography color="red" fontSize={"130%"} marginTop={"10%"} align="center" > <ErrorOutlineIcon/> Error 404. No se logra encontrar el recurso solicitado</Typography>
                </TableRow>
                <TableRow>
                    <Typography align={"center"} marginTop={"10%"}>
                        
                        <Button startIcon={<HouseIcon/>} variant="text" color="primary"  onClick={handleClickHome}> Volver al Inicio</Button>
                    </Typography>

                </TableRow>
            </TableBody>











        </Container>



    )
}