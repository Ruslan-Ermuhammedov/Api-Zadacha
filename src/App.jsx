import { useState } from 'react'
import Navbar from './loyaut/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Datas from './pages/Datas/Datas'
import Data from './pages/Data/Data'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='datas' element={<Datas/>}/>
  <Route path='data/:id' element={<Data/>}/>

</Routes>
    </>
  )
}

export default App
