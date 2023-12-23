export const BotonesNavBarStyle = {
    color: 'black',
    '&.Mui-selected': { color: 'white' },
};

export const ContainerRootStyle = {
    '&.MuiContainer-root': { padding: 0, margin: 0, maxWidth: '100%' }
}

export const TableStyle = {
    '.table': {
        width: '95%',
        display: 'block',
        overflowX: 'auto'
    }
}

export const CabeceraTablaStyle = {
    color: "white",
    backgroundColor: "#C8C8C8",
    fontSize: '130%',
}

export const NavBarStyle = {
    bgcolor: '#C8C8C8',
    width: '100%',
    '&.MuiBottomNavigation-root': { width: '100%' }
}

export const IconoNavBarSize = {
    fontSize: '200%'
}

export const ContainerModalAgregarStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    maxWidth: '90%',
    maxHeight: '90vh',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

export const ModalDetalleVenta = {

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxWidth: '90%', // Ajusta el ancho del modal según tus necesidades
    maxHeight: '90vh', // Ajusta la altura máxima del modal según tus necesidades
    overflow: 'auto', // Agrega un scroll si el contenido excede el tamaño del modal

};

export const ContainerModalConfirmacionStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
    p: 2,
    width: '30%',
    maxWidth: '90%', // Ancho máximo para dispositivos grandes
    maxHeight: '60vh', // Altura máxima para dispositivos grandes
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};


export const TablaScrollStyle = {
    table: {
        minWidth: 650,
    },
    tableContainer: {
        maxHeight: '300px',
        overflowY: 'auto',
    },
    tableHeader: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: '#C8C8C8',
        color: 'blue'
    },
}

export const ModalDetalleVentaStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxWidth: '100%', // Ajusta el ancho del modal según tus necesidades
    maxHeight: '90%', // Ajusta la altura máxima del modal según tus necesidades
    overflow: 'hidden', // Para evitar el desbordamiento
}


export const ContainerModalAgregarVentaStyle = {
    position: 'absolute',
    top: '10%',
    left: '15%',
    width: '70%',
    height: '80%',
    maxWidth: '80%',
    maxHeight: '80%',
    overflowY: 'auto',
    backgroundColor: 'white',
    boxShadow: '24px',
    padding: '16px',
    overflow: 'hidden', // Para evitar el desbordamiento

};


export const TablaVentaScrollStyle = {
    table: {
        minWidth: 600,
        '& .MuiTableCell-root': {
            padding: '8px 16px', // Ajusta el padding vertical
            height: '10px', // Ajusta la altura de las celdas
        },
        '& .MuiTableRow-root': {
            height: '20px', // Ajusta la altura de las filas
        },
    },
    tableContainer: {
        maxHeight: '300px',
        overflowY: 'auto',
    },
    tableHeader: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: '#C8C8C8',
        color: 'blue',
    },
};
