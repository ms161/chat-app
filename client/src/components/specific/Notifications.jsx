import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { sampleNotifications } from '../../constants/sampleData'

const Notifications = () => {
  const friendRequestHandler = ({ _id, accept }) => {

  }
  return (
    <Dialog open>
      <Stack p={{ xs: '1rem', sm: '2rem' }} maxWidth={'90vw'} width={'35rem'}>
        <DialogTitle>Notifications</DialogTitle>
        {
          sampleNotifications.length > 0 ?
            sampleNotifications.map((i) => (
              <NotificationItem sender={i.sender} _id={i._id} handler={friendRequestHandler} />
            ))
            : <Typography>No notifications</Typography>
        }
      </Stack>
    </Dialog>
  )
}

const NotificationItem = ({ sender, _id, handler }) => {
  const { name, avatar } = sender
  return <ListItem >
    <Stack direction={'row'} alignItems={'center'} spacing={'1rem'} width={'100%'}>
      <Avatar  />
      <Typography
        variant='body1'
        sx={{
          flexGrow: 1,
          display: '-webkit-box',
          WebkitLineClamp: 1,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '100%'
        }}
      >{name} sent you a friend request</Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }}>
        <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
        <Button color='error' onClick={() => handler({ _id, accept: false })}>Reject</Button>
      </Stack>
    </Stack>
  </ListItem>
}

export default Notifications
