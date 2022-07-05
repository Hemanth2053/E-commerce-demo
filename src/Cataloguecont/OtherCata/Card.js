import React from 'react'
import './Card.css'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function Card({title,price,image,rating,onClick
}) {
  return (
    <div className="container" onClick={onClick}>
            
            <img src={image} alt="" height="250px" width="200px" align="center"></img>
            <h5>{title}</h5>
            <p>Price: {price}$</p>
            
            <div>
            <Box sx={{display:"flex", flexDirection:"row"}}>
              <Typography component="legend">Rating : </Typography>
              <Rating name="rating" value={rating} readOnly/>
            </Box>
            </div>
          
    </div>
  )
}

export default Card