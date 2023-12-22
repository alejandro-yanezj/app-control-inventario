import { Button, Container, Modal, Table, TableBody, TableHead, Typography } from "@mui/material"
import { ContainerModalConfirmacionStyle } from "../../Utils/Temas"

export const ModalInformacion = ({openModalInformacion, mensaje, handleClickOK}) => {
    return (
        <>
        <Modal
            open={openModalInformacion}
        >
            <Container sx={ContainerModalConfirmacionStyle}>
                <Table>
                    <TableHead>
                        <Typography sx={{ textAlign: 'center', margin: '10%' }}>{mensaje}</Typography>
                    </TableHead>
                    <TableBody>
                        <Typography align="center">
                            <Button sx={{ margin: 2 }} variant="contained" color="success" onClick={handleClickOK}> OK</Button>
                        </Typography>
                    </TableBody>
                </Table>
            </Container>
        </Modal>
        </> 
    )
}