import React, { useState } from 'react'
import './mainStyle.css'
import SideBar from './SideBar'
import ChatArea from './ChatArea'
import WelcomePage from './WelcomePage'
import { Outlet } from 'react-router-dom'

const MainComponent = () => {
    const [isWelcomeShow, setWelcomeShow] = useState(false)

  return (
    <div className='maincomponentCon'>
        <div className="overall-con">
            <SideBar />            
            <WelcomePage />
            {/* {isWelcomeShow === true ? <WelcomePage /> : <ChatArea />} */}
        </div>
       
    </div>
  )
}

export default MainComponent