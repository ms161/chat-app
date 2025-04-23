import { Grid, Skeleton, Stack } from '@mui/material'
import React from 'react'

const LayoutLoader = () => {
  return (
    <div>
      <Grid container height={'calc(100vh - 4rem)'} spacing={2}>
        <Grid item size={{ sm: 4, md: 3 }} sx={{ display: { xs: 'none', sm: 'block' } }} height={'100%'}><Skeleton variant='rectangular' height={'100vh'} /></Grid>
        <Grid item size={{ xs: 12, sm: 8, md: 5, lg: 6 }} height={'100%'}>
          <Stack spacing={'1rem'}>
            {
              Array.from({ length: 12 }).map((_, index) => (
                <Skeleton key={index} variant='rectangular' height={'5rem'} />
              ))
            }
          </Stack>
        </Grid>
        <Grid item size={{ md: 4, lg: 3 }} height={'100%'}
          sx={{ display: { xs: 'none', md: 'block' } }}
        > <Skeleton variant='rectangular' height={'100vh'} /></Grid>
      </Grid>
    </div>
  )
}

export default LayoutLoader
