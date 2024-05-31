import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Contributors from './pages/Contributors'
import RolePage from './pages/RolePage'
import Inventory from './pages/Inventory'

import WorkerLogin from './pages/WorkerSignIn'
import Dashboard from './pages/Dashboard'
import AddProductForm from './pages/AddProductForm'


const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/role" element={<RolePage />} />
        <Route path='/seller/sign-in' element={<SignIn />} />
        <Route path='/worker/sign-in' element={<WorkerLogin />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/contributors' element={<Contributors />} />
        <Route path='/add-product' element={<AddProductForm />} />
        

      </Routes>
      {/* <FooterComponent /> */}
    </BrowserRouter>
  )
}

export default App