import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { ApiInitialState, apiReducer } from '../../reducer/apiReducer/apiReducer'
import { LOADING,SUCCESS,REJECTED } from '../../reducer/apiReducer/apiReducerType'
import axios from 'axios'
import { RotatingLines } from 'react-loader-spinner'
import DataCard from './DataCard'

function Data() {
  const [state, dispatch] = useReducer(apiReducer, ApiInitialState)
  const { id } = useParams()

  useEffect(() => {
    function fetchData() {

      dispatch({ type: LOADING })
      axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => dispatch({ type: SUCCESS, payload:{ data:res.data}}))
        .catch(() => dispatch({ type: REJECTED, payload: "Xatolik roy berdi" }))
    }
    fetchData()
  }, []);

  return (
    <div>
      {state.arror && <h1>{state.arror}</h1>}
            {state.isloding &&
                <RotatingLines 
                   
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="306"
                    visible={true}
                />
            }
            {state.isSuccess && <DataCard product={state.data}/> }
    </div>
  )
}

export default Data
