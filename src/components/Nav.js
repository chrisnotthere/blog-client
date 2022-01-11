import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

function Nav() {
  const token = localStorage.getItem('SavedToken')

  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton onClick={() => window.location.replace('/')}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <TravelExploreIcon />
            </IconButton>
            <Typography onClick={() => window.location.replace('/')} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Blog Client
            </Typography>
            {token 
              ? <Button onClick={() => window.location.replace('/admin/dashboard')} color="inherit">Admin</Button>
              : <Button onClick={() => window.location.replace('/admin')} color="inherit">Login</Button>
            }
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  )
}

export default Nav
