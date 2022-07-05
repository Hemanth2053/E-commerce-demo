import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, Person, Search, ShoppingBag, ShoppingBasket } from '@mui/icons-material'
import { AppBar, Box, IconButton, Drawer, Toolbar, Typography } from '@mui/material'
import './Navbar.css'



function Navbar() {

  const navigate = useNavigate()

  const [state, setState] = React.useState(false)

  const [state1, setState1] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    setState(open)
  }

  const toggleCartDrawer = (open) => (event) => {
    setState1(open)
  }

  const searchItem = () => {
    
    <button height="25px" width="80px">Search</button>
  }

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
        <Box width="100%">
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
            <Typography variant='h5' component='div' sx={{ flexGrow:1, pr:25}}>sevenshop</Typography>
            
            <IconButton
            edge="end"
            color="inherit"
            
            >
                <Search sx={{ml:4}}
                aria-label="Search"
                onClick={toggleDrawer(true)}/>
            
                <Drawer
                anchor="top"
                open={state}
                onClose={toggleDrawer(false)}>
                  <Box
                  p={3} height="100px" textAlign="center" role="presentation">
                    <input placeholder="Search" height="20px" width="200px"/>
                    
                  </Box>
                </Drawer>
                
                  <Person sx={{ml:4}}  onClick={()=>navigate('/form')}/>


                  <ShoppingBag sx={{ml:4}} 
                  aria-label="Cart"
                  onClick={toggleCartDrawer(true)}/>
                  <Drawer
                    anchor="right"
                    open={state1}
                    onClose={toggleCartDrawer(false)}>
                  <Box
                  p={3} width="200px" textAlign="center" role="presentation">
                    <p>Cart Items</p>
                    
                  </Box>
                </Drawer>
                </IconButton>
            </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar