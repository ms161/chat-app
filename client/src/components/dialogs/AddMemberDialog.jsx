import { Button, Dialog, DialogTitle, Stack } from '@mui/material'
import React from 'react'
import { sampleUsers } from '../../constants/sampleData'
import UserItem from '../shared/UserItem'

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
    const [members, setMembers] = React.useState([])
    const [selectedMembers, setSelectedMembers] = React.useState([])

    const selectMemberHandler = (id) => {
        console.log(id)
        setSelectedMembers((prev) => {
            if (prev.includes(id)) {
                return prev.filter((member) => member !== id)
            }
            return [...prev, id]

        })

    }

    const addFriendHandler = (id) => {
        console.log(id)
    }
    const addMemberSubmitHandler = () => {
        addMember(chatId)
    }

    const closeHandler = () => { }

    return (

        <Dialog open onClose={closeHandler}>
            <Stack p={'1rem 1vw'} width={{ sm: '25rem', xs: '280px' }} maxWidth={'90vw'} spacing={'1rem'}>
                <DialogTitle textAlign={'center'} p={0}>Add Member</DialogTitle>
                <Stack spacing={'1rem'}>
                    {
                        sampleUsers.length > 0 ? sampleUsers.map((i) => (
                            <UserItem isAdded={selectedMembers.includes(i._id)} key={i.id} user={i} handler={selectMemberHandler} />
                        )) : <Typography textAlign={'center'}>No Friends</Typography>
                    }
                </Stack>
                <Stack spacing={'.5rem'}>
                    <Button variant='contained' disabled={isLoadingAddMember} onClick={addMemberSubmitHandler}>Submit Changes</Button>
                    <Button variant='outlined' color='error' onClick={closeHandler}>Cancel</Button>
                </Stack>
            </Stack>

        </Dialog>
    )
}

export default AddMemberDialog
