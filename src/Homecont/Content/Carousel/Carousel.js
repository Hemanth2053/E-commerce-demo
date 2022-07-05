import React, { useState } from 'react'
import Appliance from './Images/appliance.jpg'
import Camera from './Images/camera.jpg'
import Dress from './Images/dress.jpg'
import Lap from './Images/lap.jpg'
import './Carousel.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';




export const  images = [
  {title: "Electronic items", subtitle: "Hurry up to grab your favourite items",  button:"Shop selection now", img:  Lap},
  {title: "Up to  50% off for 2022 collections", subtitle: "Hurry up to grab your favourite items",  button:"View items on sale", img: Appliance},
  {title: "Minimaliastic items", subtitle: "Hurry up to grab your favourite items",  button:"Discover category", img: Dress},
  {title: "Exclusive home decor", subtitle: "Hurry up to grab your favourite items",  button:"Read & Shop", img: Camera},
  
]
  

function Carousel() {

  const [currImg, setCurrImg] = useState(0)

  const handleLeftClick = () => {
    if(currImg <= 0){
      setCurrImg(3)
    }else{
      setCurrImg(currImg - 1)
    }
  }

  const handleRightClick = () => {
    if(currImg >= 3){
      setCurrImg(0)
    }else{
      setCurrImg(currImg + 1)
    }
  }

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{backgroundImage: `url(${images[currImg].img})`}}>
          <div className="left" onClick={handleLeftClick}>
          <ChevronLeftIcon fontSize='large'/>
        </div>
        <div className="center">
          <h1>{images[currImg].title}</h1>
          <p sx={{color: "white",
          fontweight:"bold",
          fontSize: "22px"}}
          >
      {images[currImg].subtitle}</p>
          <button className="carousel-btn">{images[currImg].button}</button>

        </div>
        <div className="right" onClick={handleRightClick}>
          <ChevronRightIcon fontSize='large'/>
        </div>

      </div>
      
    </div>
  )
}

export default Carousel