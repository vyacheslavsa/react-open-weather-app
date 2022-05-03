import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BeachAccessSharpIcon from '@mui/icons-material/BeachAccessSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';

export default function ButtonAppBar() {

  const styles = {
    background: 'linear-gradient(45deg, #fddb92, #d1fdff)',
    borderRadius: '10px',
    color: 'black'
  }

  return (
    <Box sx={{ flexGrow: 5 }} >
      <AppBar position="static" sx={styles}>
        <Toolbar>
          <BeachAccessSharpIcon sx={{ marginRight:'20px'}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Weather
          </Typography>
          <Button color="inherit">
            <LoginSharpIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
