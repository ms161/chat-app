import { Avatar, Stack, Typography } from '@mui/material'
import {
  Face as FaceIcon,
  AlternateEmail as UsernameIcon,
  CalendarMonth as CalenderIcon
} from "@mui/icons-material";
import moment from 'moment'
import React from 'react'

const Profile = () => {
  return (
    <Stack spacing={'2rem'} direction={'column'} alignItems={'center'}>
      <Avatar sx={{
        width: '200px',
        height: '200px',
        objectFit: 'contain',
        marginBottom: '1rem',
        border: '2px solid white'
      }} />
      <ProfileCard heading={'Bio'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'} />
      <ProfileCard heading={'Username'} text={'ms161'} Icon={<UsernameIcon />} />
      <ProfileCard heading={'Name'} text={'Mohit'} Icon={<FaceIcon />} />
      <ProfileCard heading={'Joined'} text={moment('2025-01-01T00:00:02.007Z').fromNow()} Icon={<CalenderIcon />} />
    </Stack>
  )
}


const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      spacing={'1rem'}
      color={'white'}
      textAlign={'center'}
    >
      {Icon && Icon}
      <Stack>

        <Typography variant='body1'>{text}</Typography>
        <Typography color='gray' variant='caption'>{heading}</Typography>
      </Stack>


    </Stack>
  )
}


export default Profile