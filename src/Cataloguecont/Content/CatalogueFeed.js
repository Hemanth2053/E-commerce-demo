import React from 'react'
import { useEffect, useState,} from 'react'
import Card from '../OtherCata/Card'
import axios from 'axios'
import '../CssCatalogue/CatalogueFeed.css'

function CatalogueFeed() {

    const[data, setData] = useState([])

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
        <div key={d._id}>
          <Card 
          image={d.image}
          title={d.title}
          price={d.price}
          rating={d.rating}
          value={d.rating}/>
        </div>
        ))}
      </div>
    </div>
  )
}

export default CatalogueFeed