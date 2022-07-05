import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import '../CssPage/Detail.css'

function Detail() {

    const location = useLocation();

    const [data, setData] = React.useState({})

    useEffect (() => {
      getData();
    },[])

    const getData = async () => {
        
        const {data} = await axios.get(
            `https://fakestoreapi.com/products/${location.state.data}`
        )
        setData({...data})
    }

    

  return (
    <div className="detail">
      <div className="cont-1">
      <img className="det-image" src={data.image} alt="images"/>
      </div>
      <div className="cont-2">
        <h2 className="det-title">{data.title}</h2> 
        <h4 className="det-price">Price : {data.price} $</h4>
        {/* <p>{data.rating.rate}</p>
        <p>{data.rating.count}</p> */}
        <h4 className="det-cate">Category : {data.category}</h4>
        <p className="description">Description : </p>
        <p className="det-desc">{data.description}</p>
        
       
      </div>
       
    </div>
  )
}

export default Detail