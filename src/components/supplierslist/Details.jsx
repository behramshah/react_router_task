import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../utils/axios";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Details = () => {

    const [supplier, setSupplier] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axiosInstance.get(id)
        .then(response => setSupplier(response.data))
    }, [id])
      
      const card = (
        <>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              About Supplier
            </Typography>
            <Typography variant="h5" component="div">
               The Company:  {supplier?.companyName}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Contact with {supplier?.contactTitle} of company, {supplier?.contactName}, phone number {supplier?.address?.phone}
            </Typography>
            <Typography variant="body2">
             Company located in {supplier?.address?.country}, {supplier?.address?.city} city, region {supplier?.address?.region},
              { supplier?.address?.street} street, postal code {supplier?.address?.postalCode}
            </Typography>
          </CardContent>
        </>
      );

    return(
        <Box sx={{ minWidth: 275, m:"15rem" }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    )
}

export default Details;