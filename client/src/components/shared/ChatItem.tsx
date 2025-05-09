import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents'
import { Stack, Typography } from '@mui/material'
import AvatarCard from './AvatarCard'

const ChatItem = ({ avatar = [], name, _id, chatId, groupChat = false, sameSender, isOnline, newMessageAlert, index = 0, handleDeleteChatOpen }) => {
    return (
        <Link sx={{ padding: 0 }} to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)} >
            <div style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: sameSender ? 'black' : 'unset',
                color: sameSender ? 'white' : 'unset',
                position: 'relative'
            }}>
                {/* Avatar card */}
                <AvatarCard avatar={avatar} />
                <Stack>
                    <Typography>{name}</Typography>
                    {newMessageAlert && (
                        <Typography sx={{ fontSize: '0.75rem' }}>{newMessageAlert.count} New Message</Typography>
                    )}
                </Stack>
                { }
            </div>
        </Link>
    )
}

export default memo(ChatItem)
