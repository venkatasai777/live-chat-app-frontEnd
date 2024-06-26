import React from 'react'

const MessageSelf = () => {
    let prop2 = {name : "you", message: "This is a sample message Hi Hlo How are You nice to meet You", timeStamp: '12:00 PM'}
  return (
    <div className='message-self-con'>
        <div className='conversation-container'>
            <div className='message-text-con message-text-con-you'>
                <p className='name-message-others name-message-others-you'>{prop2.message}</p>
                <p className='name-message-others name-message-others-timeStamp name-message-others-timeStamp-you'>{prop2.timeStamp}</p>
            </div>
        </div>
    </div>
  )
}

export default MessageSelf