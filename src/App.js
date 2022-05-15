import React from 'react'
import Navbar from './components/navbar'
import { Link } from 'react-router-dom'
import Home from './views/home'
import CadastroProdutos from './views/produtos/cadastro'

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Link to="/cadastro-produtos" element={<CadastroProdutos />} />|{' '}
        <Link to="/" element={<Home />} />
      </div>
    </>
  )
}

export default App
