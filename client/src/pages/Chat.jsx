import { IconButton, Stack } from '@mui/material';
import React, { useRef } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { grayColor } from '../constants/color';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { InputBox } from '../components/styles/StyledComponents';
import { sampleMessage } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';

const user = {
  _id: '1',
  name: 'chaman'
}
const Chat = () => {
  const containerRef = useRef(null)
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={'border-box'}
        bgcolor={grayColor}
        padding={'1rem'}
        spacing={'1rem'}
        height={'90%'}
        sx={{
          overflowX: 'hidden',
          overflowY: 'auto',
        }}
      >

        {
          sampleMessage.map((i) => {
            console.log(i)
            return <MessageComponent message={i} user={user} />
          })
        }

      </Stack>
      <form action="" style={{ height: '10%' }}>
        <Stack bgcolor={'white'} direction={'row'} height={'100%'} padding={'1rem'} alignItems={'center'} position={'relative'}>
          <IconButton
            sx={{
              position: 'absolute',
              left: '1.5rem',
              rotate: '45deg'
            }}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder='Type a message' />
          <IconButton type='submit' sx={{
            backgroundColor: '#ea7070',
            color: 'white',
            marginLeft: '1rem',
            padding: '0.5rem',
            '&:hover': {
              bgcolor: 'error.dark'
            }
          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
    </>
  )
}

export default AppLayout()(Chat)
