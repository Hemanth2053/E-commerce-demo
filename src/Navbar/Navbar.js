import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, Person, Search, ShoppingBag, ShoppingBasket } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import './Navbar.css'


function Navbar() {

  const navigate = useNavigate()

  return (
    <div className="navbar-main">
      <div className="para-head">
        <div style={{display:"flex", flexDirection:"row"}}>
          <p>Customer Support</p>
          <p style={{color:"blueviolet"}}>001-2345-67-89</p>
        </div>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div style={{display:"flex", flexDirection:"row"}}>
            <p>Free delivary from</p> <p style={{color:"blueviolet"}}> $50</p>
          </div>
          <div style={{display:"flex", flexDirection:"row",paddingLeft:"15px"}}>
            <p> Returns extended to</p> <p style={{color:"blueviolet"}}> 60 days</p>
          </div>
        </div>
      </div>
        <Box sx={{flexGrow: 1}}>
        <AppBar position="sticky" color="transparent">
          <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{display:{xs:"block", sm:"none"},mr:2}}>
              <Menu/>
            </IconButton>
            <Typography variant='p' component='div' sx={{display:{xs:"none", sm:"block"},pr:2}} onClick={()=>navigate('/')}>Home</Typography>
            <Typography variant='p' component='div' sx={{display:{xs:"none", sm:"block"},pr:2}} onClick={()=>navigate('/catalogue')}>Catalogue</Typography>
            <Typography variant='p' component='div' sx={{display:{xs:"none", sm:"block"},pr:2}}>About</Typography>
            <Typography variant='p' component='div' sx={{display:{xs:"none", sm:"block"},pr:2}}>Blog</Typography>
            <Typography variant='p' component='div' sx={{display:{xs:"none", sm:"block"},pr:2}}>Info</Typography>
            <ShoppingBasket sx={{ flexGrow:1 , pl:30}}/>
            <Typography variant='h5' component='div' sx={{ flexGrow:1 , pr:30}}>sevenshop</Typography>
            <IconButton
            edge="end"
            color="inherit"
            sx={{pl:25}}>
              <Search sx={{pr:3}}/>
              <Person sx={{pr:3}} onClick={()=>navigate('/form')}/>
              <ShoppingBag sx={{pr:1}}/>
            </IconButton>
            
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar