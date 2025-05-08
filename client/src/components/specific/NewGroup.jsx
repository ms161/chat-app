import { useInputValidation } from "6pp";
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { sampleUsers } from '../../constants/sampleData';
import UserItem from '../shared/UserItem';
const NewGroup = () => {
  const groupName = useInputValidation('')
  const [members, setMembers] = React.useState([])
  const [selectedMembers, setSelectedMembers] = React.useState([])

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) => {
      if (prev.includes(id)) {
        return prev.filter((member) => member !== id)
      }
      return [...prev, id]

    })

  }
  console.log(selectedMembers)
  const onClose = () => {

  }

  return (
    <Dialog open onClose={onClose}>
      <Stack p={{ xs: '1rem', sm: '2rem' }} maxWidth={'90vw'} width={'35rem'}>
        <DialogTitle textAlign={'center'} variant='h5'>New Group</DialogTitle>
        <TextField label='Group Name' value={groupName.value} onChange={groupName.changeHandler} />
        <Typography textAlign={'center'} variant='h6'>Members</Typography>
        {
          sampleUsers.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(user._id)}
            // handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))
        }
      </Stack>
      <Stack p={{ xs: '0 1rem', sm: '0 2rem' }} spacing={'1rem'} direction={'row'} mb={'.5rem'} width={'50%'}>
        <Button variant='outlined' color='error'>Cancel</Button>
        <Button variant='contained'>Create</Button>
      </Stack>
    </Dialog>
  )
}

export default NewGroup
