import { Avatar, AvatarGroup, Stack, styled, Box } from '@mui/material'
import React from 'react'

const AvatarCard = ({ avatar = [], max = 4 }) => {
  
    return (
        <Stack direction={'row'} spacing={0.5}>
            <AvatarGroup max={max}>
                <Box width={'5rem'} height={'3rem'}>
                    {
                        avatar?.map((src, index) => {
                            return <Avatar
                                key={index}
                                src={src}
                                alt={`Avatar ${index}`}
                                sx={{
                                    width: '3rem',
                                    height: '3rem',
                                    position: 'absolute',
                                    left: {
                                        xs: `${0.5 + index}rem`,
                                        sm: `${index}rem`
                                    },
                                    border: '2px solid white',
                                }}
                            />

                        })
                    }
                </Box>

            </AvatarGroup>
        </Stack>
    )
}

export default AvatarCard
