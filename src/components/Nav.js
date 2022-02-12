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
            <IconButton onClick={() => window.open('https://chrisnotthere.github.io/blog-client/',"_self")}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <TravelExploreIcon />
            </IconButton>
            <Button onClick={() => window.open('https://chrisnotthere.github.io/portfolio',"_self")} color="inherit">Back to Portfolio</Button>
            {/* <Typography onClick={() => window.location.replace('/')} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Blog
            </Typography> */}
            {token 
              ? <Button onClick={() => window.open('https://chrisnotthere.github.io/blog-client/admin/dashboard',"_self")} color="inherit">Admin</Button>
              : <Button onClick={() => window.open('https://chrisnotthere.github.io/blog-client/admin',"_self")} color="inherit">Login</Button>
            }
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  )
}

export default Nav
