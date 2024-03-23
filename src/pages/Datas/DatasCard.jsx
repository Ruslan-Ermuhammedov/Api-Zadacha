import React from 'react'
import { useNavigate } from 'react-router-dom';
function text(str) {
    return str.slice(0, 19)
}
function DatasCard({ item }) {
    const navigate = useNavigate()
    const addData = () => {
        navigate(`/data/${item.id}`)
    }
    return (
        <div onClick={addData} key={item.id} className='DatasCard'>
            <img src={item.image} alt="" />
            <h1>{text(item.title)}</h1>
            <button>Add Basket</button>
        </div>
    )
}

export default DatasCard
