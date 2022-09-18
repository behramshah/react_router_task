import { useState, useEffect } from "react";
import { axiosInstance } from "../../utils/axios";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const List = () => {

    const [list, setList] = useState([]);

    console.log(list)

    useEffect(() =>{
        axiosInstance.get()
        .then(response => setList(response.data))
    }, [list])

    console.log(list) 
    return(
        <>
        <Box sx={{ bgcolor: '#cfe8fc', p: "5rem"}} align="center">            
            <Typography sx={{color: '#f542ec'}} align="center" variant="h3" gutterBottom>
                Suppliers
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>                        
                        <TableCell sx={{fontSize:"32px"}} align="left">ID</TableCell>
                        <TableCell sx={{fontSize:"32px"}} align="left">Company Name</TableCell>
                        <TableCell sx={{fontSize:"32px"}} align="left">Contact Title</TableCell>
                        <TableCell sx={{fontSize:"32px"}} align="left">Contact Name</TableCell>
                        <TableCell sx={{fontSize:"32px"}} align="left">Country</TableCell>
                        <TableCell sx={{fontSize:"32px"}} align="left">Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>                    
                    {
                                    
                        list.map(item => ( 
                            <TableRow key={item.id}>
                                <>
                                    <TableCell sx={{fontSize:"24px"}}>{item?.id}</TableCell>                            
                                    <TableCell sx={{fontSize:"24px"}}>{item?.companyName}</TableCell>                            
                                    <TableCell sx={{fontSize:"24px"}}>{item?.contactTitle}</TableCell>                            
                                    <TableCell sx={{fontSize:"24px"}}>{item?.contactName}</TableCell>                            
                                    <TableCell sx={{fontSize:"24px"}}>{item.address?.country}</TableCell>
                                    <TableCell sx={{fontSize:"24px"}}>details</TableCell>                
                                </>                        
                            </TableRow>))                        
                    }
                
                </TableBody>
            </Table>
        </Box>
        </>
    )
}

export default List;