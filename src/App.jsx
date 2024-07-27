import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './homepage'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        {/* <Route path='/contact' element={<Contact/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App