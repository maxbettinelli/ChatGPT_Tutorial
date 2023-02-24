import React from 'react'
import Chat from '../../../components/Chat'
import ChatInput from '../../../components/ChatInput'

type Props = {
    params: {
        id: string;
    }
}

function ChatPage({ params:  { id }}: Props ) {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
        {/* Chat */}
        {/* stopped at 1:59:35 */}
        <Chat chatId={id}/>
        {/* Chat Input */}
        <ChatInput chatId={id}/>
    </div>
  )
}

export default ChatPage