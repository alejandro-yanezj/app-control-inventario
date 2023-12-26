import { Box, List, ListItem, TextField, Typography} from "@mui/material"


export const ListaVariable = ({data = {}}) =>{

    const keys = data!=null?Object.keys(data):[];
    const values = data!=null?Object.values(data):[];

    return(
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between', margin:'2%'}}>

        
            {keys.map((k,i) =>{
                return (
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '100%'}}> {k}: {values[i]} </Typography>
                    )
            })}
        </Box>)        
}