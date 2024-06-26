import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import Login from './Login'
import MainComponent from './MainComponent'




const HomePage = () => {
        if (Cookies.get('jwtToken') === undefined) {
            return <Login />
       } 
  return <MainComponent />
}

export default HomePage