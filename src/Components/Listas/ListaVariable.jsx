import { Box, List, ListItem, TextField} from "@mui/material"


export const ListaVariable = ({data = {}}) =>{

    const keys = data!=null?Object.keys(data):[];
    const values = data!=null?Object.values(data):[];

    return(
        <List> 
            {keys.map((k,i) =>{
                return (
                    <ListItem key = {k}>
                    <Box sx={{fontSize:20}}> {k}: {values[i]} </ Box>
                    </ListItem>)
            })}
        </List>)        
}