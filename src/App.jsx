import { useState } from 'react'
import './App.css'
import OtpForm from './pages/OtpForm'
import Topbar from './components/Topbar'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import Teacher from './pages/Teacher';
import Student from './pages/Student';

function App() {

  const user = localStorage.getItem("user")

  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/register" element={<OtpForm />} />
          <Route path="/login" element={!user ? <LoginForm /> : <Navigate to="/" replace />} />
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" replace />} />
          <Route path="/teacher" element={user ? <Teacher /> : <Navigate to="/login" replace />} />
          <Route path="/student" element={user ? <Student /> : <Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
