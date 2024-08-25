import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Oferta from './Ofertas'
import Oferta from './Produtos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/oferta"element={<Oferta/>}/>
      <Route path="/produto"element={<Produto/>}/>
      <Route path="/produto"element={<Layout/>}/>

  

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



