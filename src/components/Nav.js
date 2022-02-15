import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Link, Navigate } from 'react-router-dom';
import './styles/nav.css'

function Nav() {
  const token = localStorage.getItem('SavedToken')

  const handleLogout = () => {
    console.log('logout');
    localStorage.removeItem("SavedToken");
    window.location.replace('/blog-client');
    // Navigate("/blog-client");
  }

  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar className='nav'>

            <div className='nav-left'>
              <IconButton onClick={() => window.location.replace('/blog-client')}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                // sx={{ mr: 1 }}
              >
                <TravelExploreIcon />
              </IconButton>

              <Button onClick={() => window.open('https://chrisnotthere.github.io/portfolio', "_self")} color="inherit">Back to Portfolio</Button>
            </div>

            <div className='nav-right'>
              {token
                ? <>
                  <Link to='/blog-client/admin/dashboard' color="inherit" >
                    <Button style={{ color: 'white' }}>Admin</Button>
                  </Link>
                  <Button onClick={handleLogout} style={{ backgroundColor: 'green', color: 'white' }}>Log Out</Button>
                </>
                :
                <Link to='/blog-client/admin' >
                  <Button style={{ backgroundColor: 'green', color: 'white' }}>Login</Button>
                </Link>
              }
            </div>

          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  )
}

export default Nav
