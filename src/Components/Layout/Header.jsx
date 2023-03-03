import React, { useState } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, Divider } from '@mui/material'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import { Link } from 'react-router-dom';
import '../../Styles/HeaderStyles.css'
import WidgetsIcon from '@mui/icons-material/Widgets';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
const Header = () => {
    const [mobileOpen, setmobileOpen] = useState(false);
    //handle menu click
    const handleDrawerToggle = () => {
        setmobileOpen(!mobileOpen)
    }
    //menu drwawer
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography color={'goldenrod'} variant='h6' component='div'
             sx={{ flexGrow: 1,my:2 }} >
                <ConnectingAirportsIcon />
         Emirates
            </Typography>
<Divider></Divider>
            <ul className='Mobile_navigation'>
                <li>
                    <Link to={'/'}>Book</Link>
                </li>
                <li>
                    <Link to={'/Manage'}>Manage</Link>
                </li><li>
                    <Link to={'/Experience'}>Experience</Link>
                </li><li>
                    <Link to={'/Where_we_fly'}>Where_we_fly</Link>
                </li>
            </ul>

        </Box>
    )
    return (
        <>
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
                    <Toolbar>
                        <IconButton color='inherit' aria-label='open drawer'
                            edge='start'
                            sx={{
                                mr: 1,
                                display: { sm: 'none' }
                            }}
                            onClick={handleDrawerToggle}>
                            <WidgetsIcon />
                        </IconButton>
                        <Typography color={'goldenrod'} variant='h6' component='div' sx={{ flexGrow: 1 }} >
                            <ConnectingAirportsIcon />
                           <Box sx={{display:{sm:'inline'}}}> Emirates</Box>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className='navigation-menu'>
                                <li>
                                    <Link to={'/'}>Book</Link>
                                </li>
                                <li>
                                    <Link to={'/Manage'}>Manage</Link>
                                </li><li>
                                    <Link to={'/Experience'}>Experience</Link>
                                </li><li>
                                    <Link to={'/Where_we_fly'}>Where we fly</Link>
                                </li>
                            </ul>
                            
                        </Box>
                        <Box>
                       <ul className='search' >
                        <li className='travelIcon'>  <TravelExploreIcon/></li>
                       <li >
                      
                      <Link to={'/Search'}>Search
                        </Link> 
                       </li>
                       </ul>
                        </Box>
                      
                        
                    </Toolbar>

                </AppBar>
                <Box component='nav'>
                    <Drawer 
                    variant='temporary'
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        sx={{ display: { xs: 'block', sm: 'none'},
                       "& .MuiDrawer-paper":{
                        boxSizing:"border-box",
                        width:'300px'
                       }
                     }}
                        onClick={handleDrawerToggle} >
                        {drawer}
                    </Drawer>
                </Box>
                <Box >
                <Toolbar/>
                </Box>
            </Box>
        </>
    );
}

export default Header;
