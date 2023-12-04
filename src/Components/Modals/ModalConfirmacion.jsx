import { Container, Modal, Table, TableHead, TableBody, Typography, Button } from "@mui/material"
import { ContainerModalConfirmacionStyle } from '../../Utils/Temas'

export const ModalConfirmacion = ({openModalConfirmacion, mensaje, handleClickCancelarInfo, handleClickConfirmarInfo}) => {
    return (
        <>
        <Modal
            open={openModalConfirmacion}
        >
            <Container sx={ContainerModalConfirmacionStyle}>
                <Table>
                    <TableHead>
                        <Typography sx={{ textAlign: 'center', margin: '10%' }}>{mensaje}</Typography>
                    </TableHead>
                    <TableBody>
                        <Typography align="center">
                            <Button sx={{ margin: 2 }} variant="contained" color="error" onClick={handleClickCancelarInfo}> Cancelar</Button>
                            <Button sx={{ margin: 2 }} variant="contained" color="success" onClick={handleClickConfirmarInfo}> Confirmar</Button>
                        </Typography>
                    </TableBody>
                </Table>
            </Container>
        </Modal>
        </> 
    )
}