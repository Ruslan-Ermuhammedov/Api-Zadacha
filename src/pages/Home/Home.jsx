import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import { ApiInitialState, apiReducer } from '../../reducer/apiReducer/apiReducer';
import { LOADING, REJECTED, SUCCESS } from '../../reducer/apiReducer/apiReducerType';
import '../Home/Home.css'
import { RotatingLines } from 'react-loader-spinner'
import Datas from '../Datas/Datas';
function Home() {
    const [state, dispatch] = useReducer(apiReducer, ApiInitialState)
    useEffect(() => {
        function fetchData() {

            dispatch({ type: LOADING })
            axios.get("https://fakestoreapi.com/products")
                .then((res) => dispatch({ type: SUCCESS, payload:  res.data  }))
                .catch(() => dispatch({ type: REJECTED, payload: "Xatolik roy berdi" }))
        }
        fetchData()
    }, []);
    return (
        <div className='HomeContener'>
            <h1>Home sahifa</h1>
            {/* <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="306"
                    visible={true}
                /> */}
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
            {state.isSuccess && <Datas products={state.datas} />}
        </div>
    )
}
// state.datas.map((item) => <h1 key={item.id}>{item.title}</h1>
export default Home
