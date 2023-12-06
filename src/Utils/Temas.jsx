export const BotonesNavBarStyle = {
    color:'black',
    '&.Mui-selected':{color:'white'},
};

export const ContainerRootStyle = {
    '&.MuiContainer-root':{padding:0, margin:0, maxWidth:'100%'}
}

export const CabeceraTablaStyle = {
    color:"white", 
    backgroundColor:"#C8C8C8",
    fontSize:'130%',
}

export const NavBarStyle = { 
    bgcolor: '#C8C8C8',
    width:'100%',
    '&.MuiBottomNavigation-root':{width:'100%'}
}

export const IconoNavBarSize = {
    fontSize:'200%'
}

export const ContainerModalAgregarStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '85%',
    bgcolor: 'white',
    boxShadow: 10,
    borderRadius:'2%',
  };

  export const ContainerModalConfirmacionStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -30%)',
    width: '40%',
    height: '30%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderColor:'blue',
    borderRadius:'5%'
  };

 
export const ContainerErrorStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -100%)',
    width: '40%',
    height: '30%',
    bgcolor: '#C8C8C8',
    boxShadow: 10,
    borderColor:'blue',
    borderRadius:'5%',
    display:"flex",
    justifyContent:"center"
};
