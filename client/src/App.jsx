import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Contributors from './pages/Contributors'
import RolePage from './pages/RolePage'
import Inventory from './pages/Inventory'

import WorkerLogin from './pages/WorkerSignIn'
import Dashboard from './pages/dashboard'
import AddProductForm from './pages/AddProductForm'
import About from './pages/About'
import BillingPage from './pages/BillingPage'
import WorkerDashboard from './pages/WorkerDashboard'
import PastTransaction from './pages/past_transaction';
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
        <Route path='/seller/dashboard' element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/seller/past_transaction" element={<PastTransaction />} />        <Route path='/worker/dashboard' element={<WorkerDashboard />} />
        <Route path='/contributors' element={<Contributors />} />
        <Route path='/seller/add-product' element={<AddProductForm />} />
        <Route path='/about' element={< About />} /> 
        <Route path='/billing' element={<BillingPage />} />
        {/* <Route path='/about' element={< About />} />  */}
      </Routes>
      {/* <FooterComponent /> */}
    </BrowserRouter>
  )
}

export default App