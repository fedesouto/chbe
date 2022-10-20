import React from 'react'

const ChatMessage = (props: {type: String, message: String}) => {
    const {type, message} = props;
    return(
        <div className={`message ${type}`} >
            {message}
        </div>
    )
}

export default ChatMessage;