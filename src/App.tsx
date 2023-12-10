import { useState } from 'react'
import SignUp from './pages/SingUp'
import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SingIn from './pages/SingUp.tsx'
import Login from './pages/Login.tsx'
function App() {
   return (
      <>
        <Router>
      <Routes>
      <Route path='/' />    
      <Route path='/sing-in' element={<SingIn/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
   </Router>
      </>
   )
}

export default App
