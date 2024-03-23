import React from 'react'
import { useParams } from 'react-router-dom'

function DataCard({product}) {
console.log(product)
 return (
    <div>
     <img src={product.data.image} alt="" />

    <h1>{product.data.title}</h1>
    </div>
  )
}

export default DataCard
