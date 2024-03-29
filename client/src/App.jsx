import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import FooterComponent from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path='/sign-in' element={<SignIn></SignIn>} />
        <Route path='/sign-up' element={<SignUp></SignUp>} />
      </Routes>
      {/* <FooterComponent></FooterComponent> */}
    </BrowserRouter>
  )
}

export default App