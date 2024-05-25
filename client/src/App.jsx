import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import FooterComponent from './components/Footer'
import Contributors from './pages/Contributors'
import RolePage from './pages/RolePage'
import Inventory from './pages/Inventory'


const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/role" element={<RolePage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/contributors' element={<Contributors />} />
      </Routes>
      {/* <FooterComponent /> */}
    </BrowserRouter>
  )
}

export default App