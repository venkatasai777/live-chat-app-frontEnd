import React from 'react'
import MessageOthers from './MessageOthers';
import SideBar from './SideBar';
import MessageSelf from './MessageSelf'
import { MdDelete } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";

const ChatArea = (props) => {
    const each = {
        name: 'Test1',
        lastMessage: 'lastMessage #1',
        timeStamp: 'today'
    }
  return (
    <div className="overall-con">
            <SideBar />
            <div className='chat-area-con'>
        <div className='chat-area-header'>
            <div className='chat-area-header-profile-con'>
                <p className='chat-area-header-profile'>{each.name[0]}</p>
                <div className='chat-area-header-profile-name'>
                    <p>{each.name}</p>
                    <p>{each.timeStamp}</p>
                </div>
            </div>
            <div>
                <button type='button' className='delete-btn-chat-header'>
                    <MdDelete size={20} className='del-btn-chat'/>
                </button>
            </div>
        </div>
        <div className='messages-container'>
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
        </div>
        <div className='text-input-container'>
            <input type='text' className='message-input' name='message'placeholder='Type a message'/>
            <button type='button' className='send-btn'>
                <BsFillSendFill size={30} color='black'/>
            </button>
        </div>
    </div>
            {/* {isWelcomeShow === true ? <WelcomePage /> : <ChatArea />} */}
</div>
    
    

   
  )
}

export default ChatArea