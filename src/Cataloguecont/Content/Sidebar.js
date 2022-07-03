import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import { Collapse, List, ListItemText, ListItemIcon } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import ArrowRightOutlined from '@mui/icons-material/ArrowRightOutlined'
import axios from 'axios'


function Sidebar() {

    const [data, setData] = useState([])

  const  [open, setOpen] = useState(true)


  const handleListClick = () => {
    setOpen(!open);
  }

    useEffect(() => {
    getData();
    },[]);

  const getData = async () => {
    const {data} = await axios.get(
      "https://fakestoreapi.com/products"
    )
    setData(data)
  }


  return (
    <div>
       <div className="sidebar-catcont">
        <div className="sidebar-innercont">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                      component="nav"
                      aria-labelledby="nested-list-subheader">
              <ListItemButton onClick={handleListClick}>
                <ListItemText primary="Category" />
                {open ? <ExpandMore /> : <ExpandLess />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          <ArrowRightOutlined />
                      </ListItemIcon>
                        <ListItemText primary="Electronics"/>
                      </ListItemButton>
                     
                      <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          <ArrowRightOutlined />
                      </ListItemIcon>
                        <ListItemText primary="Jewelery"  />
                      </ListItemButton>
                      
                      <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          <ArrowRightOutlined />
                      </ListItemIcon>
                        <ListItemText primary="Mens" />
                      </ListItemButton>

                    
                      <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          <ArrowRightOutlined />
                      </ListItemIcon>
                        <ListItemText primary="Womens"/>
                      </ListItemButton>
                    </List>
                </Collapse>
                
            </List>
            </div>
        </div> 
    </div>
  )
}

export default Sidebar