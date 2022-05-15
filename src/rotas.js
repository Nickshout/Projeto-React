import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './views/home'
import CadastroProdutos from './views/produtos/cadastro'

const Routes = () => {
  return (
    <Routes>
      <Route path="/cadastro-produtos" element={<CadastroProdutos />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default Routes
