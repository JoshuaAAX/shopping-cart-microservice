import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { 
  Alert, 
  AppBar, 
  Icon, 
  IconButton, 
  Toolbar,
  Typography,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Card,
  CardContent,
  CardActions
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function App() {

  const tableData = [
    { id: "iphone", name: 11, description: 10 },
    { id: "samsung", name: 2, description: 20},
    { id: "huawei", name: 3, description: 5 },
  ];

  return (
    <Stack spacing={2} alignItems="center"  height="100vh" style={{ height: '100vh' }}>
    
      <AppBar position="static" sx={{ backgroundColor: '#FBB402', width: '100%', margin: '0 auto' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Logo
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton  edge="start" color="inherit" aria-label="add to shopping cart" sx={{ mr: 2 }}>
            <AddShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" spacing={3}>

        <Card sx={{ margin: '20px', padding: '20px' }}>
        <CardContent>
        <TableContainer  >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ textAlign: 'center' }}>PRODUCTO</TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  CANTIDAD
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>PRECIO</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell style={{ textAlign: 'center' }}>{row.id}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>
                   <Button 
                      variant="outlined" 
                      size="small"
                      sx={{ bgcolor: '#FBB400', color: '#fff' }}>
                       -
                   </Button>
                    {row.name}
                    <Button 
                      variant="outlined" 
                      size="small"
                      sx={{ bgcolor: '#FBB400', color: '#fff' }}>
                       +
                   </Button>
                  </TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{row.description}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>
                  <Button 
                      variant="outlined" 
                      size="small"
                      sx={{ bgcolor: '#FBB400', color: '#fff' }}>
                       Eliminar
                   </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <Stack direction="row" spacing={2} sx={{ marginTop: '20px' }}>
            <Paper elevation={1} sx={{ marginLeft: 'auto' }}>
              <Typography>Total: 44</Typography>
            </Paper>
            
          </Stack>
        </TableContainer>
       
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', marginTop: '10px' }}>
        <Button 
          variant="outlined" 
          sx={{ bgcolor: '#FFA500', color: '#fff'}}>
            Volver
        </Button>
        
        <Button 
          variant="outlined" 
          sx={{ bgcolor: '#FFA500', color: '#fff' }}>
            realizar compra
        </Button>
        </CardActions>
        </Card>


      </Container>

    </Stack>
  );
}

export default App;
