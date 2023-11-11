// import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { Login } from './pages/Login_SignUp/components/Login'
import { Home } from './pages/Home/Home';
import { MyAccount } from './pages/Home/components/MyAccount';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/myAccount" element={<MyAccount/>} />
      </Routes>
    </Router>
  )
}

export default App
