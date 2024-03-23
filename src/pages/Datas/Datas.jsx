import React from 'react'
import DatasCard from './DatasCard'
import '../Datas/Datas.css'
function Datas({ products }) {
  return (
    <div className='DatasContener'>
      {products.map((item) => (
          // <div className='DatasContener'>
            <DatasCard key={item.id} item={item} />
        // </div>
      ))}
    </div>
  )
}

export default Datas
