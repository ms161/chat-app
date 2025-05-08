import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from '@mui/material'
import { useInputValidation } from "6pp";
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../../constants/sampleData';

const users = []

const Search = () => {
  const search = useInputValidation('')
  const isLoadingSendFriendRequest = false
  const [users, setUsers] = React.useState([1, 2, 3])
  const addFriendHandler = (id) => {
    console.log(id)

  }
  return (
    <Dialog open={true}>
      <Stack p={'2rem'} direction={'column'} width={'25rem'}>
        <DialogTitle textAlign={'center'}>Find People</DialogTitle>
        <TextField
          label=''
          value={search.value}
          onChange={search.changeHandler}
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />

        <List>
          {
            sampleUsers.map((user) => (
              <UserItem user={user} key={user._id} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest} />
            ))
          }
        </List>

      </Stack>
    </Dialog>
  )
}

export default Search
