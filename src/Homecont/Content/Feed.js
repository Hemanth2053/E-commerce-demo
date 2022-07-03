import React from 'react'
import Elec from './Elec.jpg'
import Cloth from './Cloth.jpg'
import Gmail from './Gmail.jpg'
import './Feed.css'

function Feed() {
  return (
    <div>
      <div className="img-cont">
        <div className="img-cont-in">
          <div>
          <img className="img-cont-1" src={require('./Elec.jpg')} alt="homeimage" />
          </div>
          <div className="text-cont">
            <h2>New Gedgets</h2>
            <p>With good quality</p>
            <button>Shop  Now</button>
          </div>
        </div>
        <div className="img-cont-in">
          <div>
          <img className="img-cont-2" src={Cloth} alt="homeimage" />
          </div>
          <div className="text-cont">
            <h2>Dress collections</h2>
            <p>Exclusive trendy items</p>
            <button>Shop  Now</button>
          </div>
        </div>
        <div className="img-cont-in">
          <div>
          <img className="img-cont-3" src={Gmail} alt="homeimage" />
          </div>
          <div className="text-cont">
            <h2>Sign up now & get 10% off</h2>
            <p>Be the first to know about new arrivals and <br/> exclusive offer.</p>
            <button className="email-btn">Sign up Now</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Feed