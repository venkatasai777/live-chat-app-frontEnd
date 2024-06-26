import React  from 'react'
import MainComponent from './components/MainComponent'
import './App.css'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'
import ChatArea from './components/ChatArea'
import WelcomePage from './components/WelcomePage'
import SideBar from './components/SideBar'
import Register from './components/Register'
import HomePage from './components/HomePage'

const App = () => {
  
  
  return <Routes>
    <Route  path="/login" element={<Login />} />
    <Route  path="/" element={<HomePage />} />
    <Route path="/app" element={ <MainComponent />} />
    <Route path="app/chat" element={ <ChatArea /> } />
    <Route path='/register' element={<Register />} />
  </Routes>
  
 


}

export default App
