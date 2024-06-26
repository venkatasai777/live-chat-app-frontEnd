import React from 'react'
import { CgProfile } from "react-icons/cg";
import './mainStyle.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ConversationItem = (props) => {
  const navigate = useNavigate()
    const {each } = props 
    const {name, lastMessage, timeStamp} = each
    const onClickChat = () => {
      navigate('app/chat')
    }
  return (
    <li className='conversaton-item-con'>
      <Link className='each-chat-person-link' to="/app/chat">
        <p className='conversation-item-logo'>{name[0]}</p>
        <div className='conversation-item-details-con'>
            <p className='name-conversation-item'>{name}</p>
            <div className='timeStamp-con'>
                <p className='displayInline'>{lastMessage}</p>
                <p className='displayInline'>{timeStamp}</p>
            </div>
        </div>
        </Link>
    </li>
  )
}

export default ConversationItem