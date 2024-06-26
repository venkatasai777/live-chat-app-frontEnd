import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import livechat from '../assets/live-chat.png'
import './mainStyle.css'
import { useNavigate } from 'react-router-dom'
import API_URL from '../components/ApiUrl'


const Register = () => {
    const [email, setEmail] = useState("");
    const [name, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitRegister = async (e) => {
        e.preventDefault()
        console.log(email, name, password)
        try {
            const method = {
                headers: {
                    "Content-Type" : "application/json"
                },
                method: 'POST',
                body: JSON.stringify({email, name, password})
            }
    
            const response = await fetch(`${API_URL}/user/register`, method)
            const data = await response.json()
            console.log(response.status)
            if (response.ok) {
                alert(data.message);
                navigate('/login')
            }
        }catch(error) {
            console.error(error)
        }
        
    }
    const navigate = useNavigate()
  return (
    <div  className='login-page-con'  >
    <div className='image-container'>
        <img src={livechat} className='live-chat-image-css'/>
    </div>
    <div className='login-container'>
        <form id="registerForm" className='login-form-css' onSubmit={onSubmitRegister}>
            <p>Login to your Account</p>
            <div className='user-sec-con'>
                <label htmlFor='email'>E-MAIL</label>
                <input type='e-mail' className='username-login' value={email} id='email' placeholder='Please Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='user-sec-con'>
                <label htmlFor='usernameLogin'>USERNAME</label>
                <input type='text' className='username-login' value={name} id='usernameLogin' placeholder='Please Enter Username' onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className='user-sec-con'>
                <label htmlFor='usernamePassword'>PASSWORD</label>
                <input type='password' className='username-login' value={password} id='usernamePassword' placeholder='Please Enter Password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type='Submit' className='login-btn'>Register</button>
            <button className='register-login-btn' onClick={() => navigate('/login')}>Login</button>
        </form>
    </div>
</div>
  )
}

export default Register