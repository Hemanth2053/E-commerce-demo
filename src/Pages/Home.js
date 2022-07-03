import React from 'react'

import HomeFeed  from '../Homecont/Content/HomeFeed'
import Footer from '../Homecont/Content/Footer'
import '../CssPage/Home.css'

function Home() {
  return (
    <div className="home-main">
        
        <HomeFeed />
        <Footer  />
    </div>
  )
}

export default Home