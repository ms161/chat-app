import { Stack } from '@mui/material'
import React from 'react'
import ChatItem from '../shared/ChatItem'

const ChatList = ({
  w = '100%',
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [{
    chatId: '',
    count: 0
  },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={'column'}>
      {
        chats?.map((data, index) => {
         
          const { _id, groupChat, name, avatar, sameSender, members } = data
          const newMessageAlert = newMessagesAlert.find((alert) => alert.chatId === _id)
          const isOnline = members.some((member) => onlineUsers.includes(_id))
          return <ChatItem
            name={name}
            index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            handleDeleteChatOpen={handleDeleteChat}
            key={_id}
            groupChat={groupChat}
            avatar={avatar}
            _id={_id}
            sameSender={chatId === _id}
          />
        })
      }
    </Stack>
  )
}

export default ChatList
