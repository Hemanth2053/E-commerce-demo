import React  from 'react'
import Home from './Pages/Home'
import Catalogue from './Pages/Catalogue'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Form from './Pages/Form'
import Detail from './Pages/Detail'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/form' element={<Form/>} />
        <Route path='/detail' element={<Detail/>} />
      </Routes>
      
    </div>
  )
}

export default App