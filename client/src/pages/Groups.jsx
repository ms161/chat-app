import { Backdrop, Box, Button, Drawer, Grid, IconButton, Menu, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { lazy, memo, Suspense, useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { bgGradient, matBlack } from '../constants/color';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '../components/styles/StyledComponents';
import AvatarCard from '../components/shared/AvatarCard';
import { sampleChats, sampleMessage, sampleUsers } from '../constants/sampleData';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import UserItem from '../components/shared/UserItem';

const ConfirmDeleteDialog = lazy(() => import('../components/dialogs/ConfirmDeleteDialog'))
const AddMemberDialog = lazy(() => import('../components/dialogs/AddMemberDialog'))

const isAddMember = false;

const Group = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false)
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false)
  const [groupName, setGroupName] = useState('')
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState('')

  const chatId = useSearchParams()[0].get('group')

  const navigate = useNavigate()
  const navigateBack = () => {
    navigate('/')
  }
  const handleMobile = () => {
    setIsMobileMenuOpen(prev => !prev)
  }
  const handleOnclose = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    if (chatId) {

      setGroupName(`group ${chatId}`)
      setGroupNameUpdatedValue(`group ${chatId}`)
    }

    return () => {
      setGroupName('')
      setGroupNameUpdatedValue('')
      setIsEdit(false)
    }
  }, [chatId])

  const IconBtns = <>
    <Box sx={{
      display: { xs: 'block', sm: 'none', position: 'fixed', right: '1rem', top: '1rem' },
    }}>

      <IconButton onClick={handleMobile}>
        <MenuIcon />
      </IconButton>
    </Box>
    <Tooltip title='Back'>

      <IconButton
        sx={{
          top: '1rem',
          left: '1rem',
          color: 'white',
          bgcolor: matBlack,
          position: 'absolute',
          '&:hover': {
            bgcolor: 'rgba(0,0,0,0.8)'
          }
        }}
        onClick={navigateBack}
      >
        <KeyboardBackspaceIcon />
      </IconButton>
    </Tooltip>
  </>

  const updateGroupName = () => {
    setIsEdit(false)
    console.log(groupNameUpdatedValue)
  }

  const GroupName = <>
    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={'1rem'} padding={'3rem'}>
      {isEdit ?
        <>
          <TextField value={groupNameUpdatedValue} onChange={(e) => setGroupNameUpdatedValue(e.target.value)} size='small' />
          <IconButton onClick={updateGroupName}><DoneIcon /></IconButton>
        </>
        :
        <>
          <Typography variant='h5'>{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}> <EditIcon /></IconButton>
        </>
      }
    </Stack>
  </>

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true)
  }

  const closeDeleteHandler = () => {
    setConfirmDeleteDialog(false)
  }

  const handleDelete = () => {
    closeDeleteHandler()
  }

  const openAddMemberHandler = () => {

  }
  const ButtonGroup = (
    <Stack
      marginTop={'.5rem'}
      direction={{
        sm: 'row',
        xs: 'column-reverse'
      }}
      spacing={'1rem'}
      p={{
        xs: '0',
        sm: '1rem',
        md: '1rem 4rem'
      }}
    >
      <Button startIcon={<DeleteIcon />} size='medium' variant='outlined' color='error' onClick={openConfirmDeleteHandler}>Delete Group</Button>
      <Button startIcon={<AddIcon />} size='medium' variant='contained' onClick={openAddMemberHandler}>Add Member</Button>
    </Stack>
  )

  const removeMemberHandler = (id) => {
    console.log(id)
  }

  return (
    <Grid container height={'calc(100vh)'}>
      <Grid
        item
        sx={{
          display: { xs: 'none', sm: 'block' },
          backgroundImage: bgGradient
        }}
        size={{ sm: 4 }}
        maxHeight={'100%'}
        overflow={'auto'}

      >
        <GroupList myGroups={sampleChats} />
      </Grid>
      <Grid item size={{ sm: 8, xs: 12 }} sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        padding: '1rem 3rem'
      }}>
        {IconBtns}

        {groupName &&
          <>
            {GroupName}
            <Typography margin={'1rem'} alignSelf={'flex-start'} variant='body1'>Members</Typography>
            <Stack
              maxWidth={'50rem'}
              width={'100%'}
              boxSizing={'border-box'}
              padding={{
                sm: '1rem',
                xs: '0',
                md: '1rem 4rem'
              }}
              spacing={'2rem'}
              // bgcolor={'bisque'}
              height={'50vh'}
              overflow={'auto'}
            >
              {
                sampleUsers.map((i) => (
                  <UserItem
                    key={i._id}
                    user={i}
                    styling={{ boxShadow: '0 0 5px rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '1rem' }}
                    handler={removeMemberHandler}
                  />
                ))
              }
            </Stack>
            {ButtonGroup}

          </>
        }
      </Grid>

      {
        isAddMember &&
        <Suspense fallback={<Backdrop open />} >
          <AddMemberDialog />
        </Suspense>
      }
      {
        confirmDeleteDialog && <Suspense fallback={<Backdrop open />} >
          <ConfirmDeleteDialog open={confirmDeleteDialog} handleClose={closeDeleteHandler} deleteHandler={handleDelete} />
        </Suspense>
      }
      <Drawer sx={{ display: { xs: 'block', sm: 'none' } }} open={isMobileMenuOpen} onClose={handleOnclose}>
        <GroupList myGroups={sampleChats} chatId={null} />
      </Drawer>
    </Grid>
  )
}

const GroupList = ({ w = '100%', myGroups = [], chatId }) => {

  return <Stack sx={{ backgroundImage: bgGradient, height: '100%' }} w={w}>
    {
      myGroups.length > 0 ? myGroups.map((group) => {

        return <GroupListItem group={group} chatId={chatId} key={group._id} />

      }) : <Typography>No Groups</Typography>
    }
  </Stack>
}

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id, chat_id } = group
  return (
    <Link to={`?group=${_id}`} onClick={(e) => {
      if (chatId === _id) {
        e.preventDefault();
      }
    }} >
      <Stack position={'relative'} direction={'row'} alignItems={'center'} spacing={'1rem'}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  )

})

export default Group
