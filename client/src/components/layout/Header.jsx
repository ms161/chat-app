import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, useState } from 'react'
import { orange } from '../../constants/color'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import { lazy } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
// import Search from '../specific/Search';
const SearchDialog = lazy(() => import('../specific/Search'))
const NewGroupDialog = lazy(() => import('../specific/NewGroup'))
const NotificationsDialog = lazy(() => import('../specific/Notifications'))

const Header = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [isNewGroup, setIsNewGroup] = useState(false)
    const [isNotification, setIsNotification] = useState(false)

    const navigate = useNavigate()
    const handleMobile = () => {
        setIsMobile(prev => !prev)
    }
    const openSearchDialog = () => {
        setIsSearch(prev => !prev)
    }
    const openNewGroup = () => {
        setIsNewGroup(prev => !prev)
    }

    const openNotification = () => {
        setIsNotification(prev => !prev)
    }
    const navigateToGroup = () => {
        navigate('/groups')
    }

    const handleLogout = () => {
        navigate('/login')
    }
    return (
        <>
            <Box sx={{ flexGrow: 1, height: '4rem' }}>
                <AppBar
                    position='static'
                    sx={{
                        bgcolor: orange
                    }}
                >
                    <Toolbar>
                        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
                            ChatApp
                        </Typography>
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton color='inherit' onClick={handleMobile}><MenuIcon /></IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box >
                            <IconButton color='inherit' onClick={openSearchDialog}><SearchIcon /></IconButton>
                        </Box>
                        <Tooltip title='New Group'>
                            <Box >
                                <IconButton color='inherit' onClick={openNewGroup}><AddIcon /></IconButton>
                            </Box>
                        </Tooltip>
                        <Tooltip title='Manage Group'>
                            <Box >
                                <IconButton color='inherit' onClick={navigateToGroup}><GroupsIcon /></IconButton>
                            </Box>
                        </Tooltip>
                        <Tooltip title='Notifications'>
                            <Box >
                                <IconButton color='inherit' onClick={openNotification}><NotificationsIcon /></IconButton>
                            </Box>
                        </Tooltip>
                        <Tooltip title='Logout'>
                            <Box >
                                <IconButton color='inherit' onClick={handleLogout}><LogoutIcon /></IconButton>
                            </Box>
                        </Tooltip>
                    </Toolbar>

                </AppBar>
            </Box>
            {isSearch && <Suspense fallback={<Backdrop open />}><SearchDialog /></Suspense>}
            {isNotification && <Suspense fallback={<Backdrop open />}><NotificationsDialog /></Suspense>}
            {isNewGroup && <Suspense fallback={<Backdrop open />}><NewGroupDialog /></Suspense>}
        </>
    )
}

export default Header
