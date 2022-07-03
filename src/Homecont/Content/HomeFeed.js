import React from 'react'
import Carousel from './Carousel/Carousel'
import Feed from './Feed'

import '../CssHome/HomeFeed.css'
import SecondFeed from './SecondFeed'

function HomeFeed() {
  return (
    <div>
      <Carousel />
      <Feed />
      <SecondFeed/>
     
    </div>
  )
}

export default HomeFeed