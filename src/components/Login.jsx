import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import livechat from '../assets/live-chat.png'
import './mainStyle.css'
import { useNavigate } from 'react-router-dom'
import API_URL from '../components/ApiUrl'
import Cookies from 'js-cookie'



const Login = () => {

    const [name, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitLogin = async (e) => {
        e.preventDefault()
        console.log(name, password)
        try {
            const method = {
                headers: {
                    "Content-Type" : "application/json"
                },
                method: 'POST',
                body: JSON.stringify({name, password})
            }
    
            const response = await fetch(`${API_URL}/user/login`, method)
            const data = await response.json()
            console.log(data)
            if (response.ok) {
                alert(data.message);
                Cookies.set('jwtToken', data.token, {expires: 30})
                Cookies.set('userId', data.id, {expires: 30})
                navigate('/app')
            }
        }catch(error) {
            console.error(error)
        }
        
    }

    const navigate = useNavigate()
  return (
    <div className='login-page-con'>
        <div className='image-container'>
            <img src={livechat} className='live-chat-image-css'/>
        </div>
        <div className='login-container'>
            <form id="loginForm" className='login-form-css' onSubmit={onSubmitLogin}>
                <p>Login to your Account</p>
                <div className='user-sec-con'>
                    <label htmlFor='usernameLogin'>USERNAME</label>
                    <input type='text' className='username-login' value={name} onChange={(e) => setUserName(e.target.value)} id='usernameLogin' placeholder='Please Enter Username'/>
                </div>
                <div className='user-sec-con'>
                    <label htmlFor='usernamePassword'>PASSWORD</label>
                    <input type='password' className='username-login' value={password} id='usernamePassword' onChange={(e) => setPassword(e.target.value)} placeholder='Please Enter Password'/>
                </div>
                <button type='submit' className='login-btn'>Continue</button>
                <p className='sign-up-para'>Don't Have an Account? <button onClick={() => navigate('/register')} className='sign-up-btn'>Sign Up</button></p>
            </form>
        </div>
    </div>
  )
}

export default Login