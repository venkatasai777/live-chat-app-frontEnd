import React, { useEffect } from 'react'
import { useState } from 'react';
import ConversationItem from './ConversationItem';
import './mainStyle.css'
import { CgProfile } from "react-icons/cg";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import API_URL from './ApiUrl';


const SideBar = () => {
    const navigate = useNavigate()

    const [conversations, setConversations] = useState([
        {
            name: 'Test1',
            lastMessage: 'lastMessage #1',
            timeStamp: 'today'
        },
        {
            name: 'Test2',
            lastMessage: 'lastMessage #1',
            timeStamp: 'today'
        },
        {
            name: 'Test3',
            lastMessage: 'lastMessage #1',
            timeStamp: 'today'
        },
        {
            name: 'Test4',
            lastMessage: 'lastMessage #1',
            timeStamp: 'today'
        },
    ])

    useEffect(() => {
        const ApiCall = async () => {
            const token = Cookies.get('jwtToken')
        const userId = Cookies.get('userId')
        const ApiUrl = `${API_URL}/user/fetchUsers/${userId}`
        const method = {
            headers: {
                authorization: token
            },
            method: 'GET',            
        }

        const response = await fetch(ApiUrl, method)
        const data = await response.json()
        setConversations(prevState => ([...prevState, ...data.filteredResult]))
        }
        ApiCall()
    }, [])

    

    const onClickLogoutBtn = () => {
        Cookies.remove('jwtToken');
        Cookies.remove('userId')
        return navigate('/login');
    }
    console.log(conversations)
  return (
    <div className='sidebar-css'>
        <div className='sb-header'>
            <div>
                <CgProfile  className='profile' color='black' size={20}/>
            </div>
            <button className='logout-btn' type='button' onClick={onClickLogoutBtn}>Logout</button>
        </div>
        <div className='sb-conversation'>
            <ul className='conversation-list'>
                {conversations.map(each => <ConversationItem each={each} key={each.name}  />)}
                
            </ul>
        </div>
    </div>
  )
}

export default SideBar