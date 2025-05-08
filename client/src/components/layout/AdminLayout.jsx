import React, { useState } from 'react'
import { Box, Drawer, Grid, IconButton, Stack, styled, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as LinkComponent, useLocation } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Groups3Icon from '@mui/icons-material/Groups3';
import MessageIcon from '@mui/icons-material/Message';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const adminTabs = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
        icon: <DashboardIcon />,
    },
    {
        name: 'Users',
        path: '/admin/users',
        icon: <ManageAccountsIcon />,
    },
    {
        name: 'Chats',
        path: '/admin/chats',
        icon: <Groups3Icon />,
    },
    {
        name: 'Messages',
        path: '/admin/messages',
        icon: <MessageIcon />,
    },
]

const Link = styled(LinkComponent)`
text-decoration:none;
color:black;
padding:1rem;
&:hover{
    background-color:rgba(0,0,0,0.1)
}
`
const SideBar = ({ w = '100%' }) => {
    const location = useLocation()
    const logoutHandler = () => {

    }
    return (
        <Stack width={w}>
            <Typography variant='h6' textTransform={'uppercase'} p={'2vw'}>
                chat app
            </Typography>
            <Stack sx={{ overflow: 'hidden' }}>
                {
                    adminTabs.map((tab, ind) => (
                        <Link sx={{
                            color: location.pathname === tab.path ? 'white' : 'unset',
                            backgroundColor: location.pathname === tab.path ? 'rgba(0, 0, 0, 0.99)' : 'unset',
                            ':hover': {
                                backgroundColor: location.pathname === tab.path ? 'rgba(0, 0, 0, 0.99)' : 'rgba(190, 190, 190, 0.74)',
                                color: location.pathname === tab.path ? 'white' : 'unset',
                                transform: 'scale(1.045)',
                                overflow: 'hidden'
                            },
                            transition: 'transform 0.2s ease-in-out',
                        }} key={tab.path} to={tab.path}>
                            <Stack direction={'row'} alignItems={'center'} spacing={'1rem'}>
                                {tab.icon}
                                <Typography>{tab.name}</Typography>
                            </Stack>
                        </Link>

                    ))
                }
                <Link sx={{
                    transition: 'transform 0.2s ease-in-out',
                    ':hover': {
                        transform: 'scale(1.05)',
                        overflow: 'hidden',
                    }
                }} onClick={logoutHandler}>
                    <Stack direction={'row'} alignItems={'center'} spacing={'1rem'}>
                        <ExitToAppIcon />
                        <Typography>Logout</Typography>
                    </Stack>
                </Link>
            </Stack>
        </Stack>
    )
}
const AdminLayout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false)
    const handleMobile = () => {
        setIsMobile(prev => !prev)
    }
    return (
        <Grid container minHeight={'100vh'}>
            <Box
                sx={{
                    display: { xs: 'block', md: 'none' },
                    position: 'fixed',
                    right: '1rem',
                }}
            >
                <IconButton onClick={handleMobile}>
                    {isMobile ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            </Box>
            <Grid item sx={{ display: { xs: 'none', md: 'block' } }} size={{ md: 4, lg: 3 }}>
                <SideBar />
            </Grid>
            <Grid item size={{ xs: 12, md: 8, lg: 9 }} sx={{ bgcolor: 'rgba(193, 193, 193, 0.4)' }}>
                {children}
            </Grid>
            <Drawer open={isMobile} onClose={handleMobile}>
                <SideBar w='50vw' />
            </Drawer>
        </Grid>
    )
}

export default AdminLayout
