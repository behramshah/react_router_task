import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


export default function HomePage () {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{m: 0, pt: "3rem", pr:0, pl:0}} disableGutters={true}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', width: '100vw', p: '3rem'}}>
            <Typography sx={{color: '#f542ec'}} align="center" variant="h3" gutterBottom>
             Welcome, here you can watch, add or learn more about suppliers.
            </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}