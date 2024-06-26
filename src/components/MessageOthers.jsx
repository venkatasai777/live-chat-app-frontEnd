import React from 'react'

const MessageOthers = () => {
    let props = {name : "Random User", message: "This is a sample message Hi Hlo How are You nice to meet You", timeStamp: '12:00 PM'}
  return (
    <div className='other-message-container'>
        <div className='conversation-container'>
            <p className='con-icon'>{props.name[0]}</p>
            <div className='message-text-con'>
                <p className='name-message-others name-message-others-para'>{props.name}</p>
                <p className='name-message-others'>{props.message}</p>
                <p className='name-message-others name-message-others-timeStamp'>{props.timeStamp}</p>
            </div>
        </div>

    </div>
  )
}

export default MessageOthers