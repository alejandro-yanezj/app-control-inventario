import { Box, List, ListItem, TextField} from "@mui/material"


export const ListaVariable = ({data = {}}) =>{

    const keys = Object.keys(data);
    const values = Object.values(data);

    return(
        <List> 
            {keys.map((k,i) =>{
                return (
                    <ListItem key = {k}>
                    <Box> {k}: {values[i]} </ Box>
                    </ListItem>)
            })}
        </List>)        
}