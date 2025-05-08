import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import moment from 'moment';
import { CurveButton, SearchField } from '../../components/styles/StyledComponents';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Groups3Icon from '@mui/icons-material/Groups3';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import { DoughnutChart, LineChart } from '../../components/specific/Chart';
import { Doughnut } from 'react-chartjs-2';
const Dashboard = () => {
  const AppBar = (
    <Paper elevation={3}
      sx={{
        padding: 'clamp(15px, 1.5vw, 30px)',
        margin: '2rem 0',
        borderRadius: '1rem'
      }}
    >
      <Stack direction={'row'} alignItems={'center'} spacing={'1rem'}>
        <AdminPanelSettingsIcon />
        <SearchField placeholder='Search' />
        <CurveButton>Search</CurveButton>
        <Box sx={{ flexGrow: 1 }} />
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>

          {moment().format('dddd,D MMMM YYYY')}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  )
  const Widgets = (
    <Stack direction={{ xs: 'column', sm: 'row' }} margin={'2rem 0'} justifyContent={'center'} flexWrap={'wrap'} gap={'1rem'}>
      <Widget title={'Users'} value={'100'} Icon={<PersonIcon />}></Widget>
      <Widget title={'Chats'} value={'20'} Icon={<Groups3Icon />}></Widget>
      <Widget title={'Messages'} value={'40'} Icon={<MessageIcon />}></Widget>
    </Stack>
  )
  return (
    <AdminLayout>
      <Container component={'main'} >
        {AppBar}
        <Stack direction={'row'} spacing={'1rem'} flexWrap={'wrap'} gap={'1rem'} justifyContent={'center'} alignItems={'center'}>
          <Paper elevation={3} sx={{ flexGrow: 1, width: '100%', maxWidth: '45rem', p: '1rem', borderRadius: '1rem' }} >
            <Typography>Last Messages</Typography>
            <LineChart />
          </Paper>
          <Paper
            sx={{
              padding: '1rem',
              borderRadius: '1rem',
              display: 'flex',
              placeItems: 'center',
              justifyContent: 'center',
              width: { xs: '100%', sm: '50%' },
              position: 'relative',
              maxWidth: '25rem',
              width: '100%'
              // height: '20rem'
            }}
          >
            <DoughnutChart labels={['Single Chats', 'Group Chats']} value={[20, 80]} />
            <Stack
              direction={'row'}
              position={'absolute'}
              alignItems={'center'}
              justifyContent={'center'}
              width={'100%'}
              spacing={'.5rem'}
            // right={'10%'}
            >
              <PersonIcon />
              vs
              <Groups3Icon />
            </Stack>
          </Paper>
          {
            Widgets
          }
        </Stack>



      </Container>
    </AdminLayout>
  )
}

const Widget = ({ title, value, Icon }) => <Paper
  sx={{
    padding: '1rem',
    borderRadius: '1rem',
    width: '20rem'
  }}
>
  <Stack alignItems={'center'} spacing={'1rem'}>
    <Typography
      sx={{
        borderRadius: '50%',
        display: 'flex',
        placeItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        width: '5rem',
        height: '5rem',
        border: '3px solid black'
      }}
    > {value} </Typography>
    <Stack direction={'row'} alignItems={'center'} spacing={'.5rem'}>
      {Icon}
      <Typography>
        {title}
      </Typography>
    </Stack>
  </Stack>
</Paper>


export default Dashboard
