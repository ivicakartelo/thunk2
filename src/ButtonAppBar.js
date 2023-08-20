import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>     
      <AppBar position="static" sx={{ backgroundColor: '#8b05fa'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="AssignmentTurnedInTwoToneIcon"
            sx={{ mr: 2 }}
          >
            <AssignmentTurnedInTwoToneIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Brand name
          </Typography>
          <Button color="inherit">Price</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}