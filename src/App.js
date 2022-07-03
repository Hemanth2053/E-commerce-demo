import React  from 'react'
import Home from './Pages/Home'
import Catalogue from './Pages/Catalogue'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Form from './Pages/Form'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/form' element={<Form/>} />
      </Routes>
      
    </div>
  )
}

export default App