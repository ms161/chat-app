import React from 'react'
import Header from './Header'
import Title from '../shared/Title'
import { Grid } from '@mui/material'
import ChatList from '../specific/ChatList'
import { sampleChats } from '../../constants/sampleData'
import { useParams } from 'react-router-dom'
import Profile from '../specific/Profile'

const AppLayout = () => (WrappedComponent) => {
   
    return (props) => {
        const params = useParams()
        const chatId = params.chatId
        const handleDeleteChat = (e, _id, isGroup) => {
            e.preventDefault()
        }
        return (
            <>
                <Title />
                <Header />
                <Grid container height={'calc(100vh - 4rem)'}>
                    <Grid item size={{ sm: 4, md: 3 }} sx={{ display: { xs: 'none', sm: 'block' } }} maxHeight={'calc(100vh - 4rem)'} overflow={'auto'}>
                        <ChatList
                            chatId={chatId}
                            chats={sampleChats}
                            newMessagesAlert={[{ chatId, count: 4 }]}
                            onlineUsers={['1', '2']}
                            handleDeleteChat={handleDeleteChat}
                        /></Grid>
                    <Grid item size={{ xs: 12, sm: 8, md: 5, lg: 6 }} height={'100%'} bgcolor={'primary.main'}>
                        <WrappedComponent {...props} />
                    </Grid>
                    <Grid item size={{ md: 4, lg: 3 }} height={'100%'}
                        sx={{ display: { xs: 'none', md: 'block' }, padding: '2rem', bgcolor: 'rgba(0,0,0,0.85)' }}
                    >
                        <Profile />
                    </Grid>
                </Grid>
            </>
        )

    }
}

export default AppLayout
