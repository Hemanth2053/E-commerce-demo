import React from 'react'
import { useEffect, useState,} from 'react'
import Card from '../OtherCata/Card'
import axios from 'axios'
import '../CssCatalogue/CatalogueFeed.css'
import { useNavigate } from 'react-router-dom'


function CatalogueFeed() {

  const[data, setData] = useState([])

  

  const Navigate = useNavigate()

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
    <div className="cataloguefeed">
      <header>PRODUCTS</header>
      <div className="feed-innercont" style={{display:"flex", flexWrap: "wrap", width:"100%",}}>
        {data.map((d) => (
        <div key={d.id} >
          <Card onClick={() => Navigate('/detail', {state:{data:d.id}})}
          image={d.image}
          title={d.title}
          price={d.price}
          rating={d.rating.rate}
          />
        </div>
        ))}
      </div>
    </div>
  )
}

export default CatalogueFeed