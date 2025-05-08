import React, { useState } from 'react'
import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useFileHandler, useInputValidation } from '6pp';
import { usernameValidator } from '../../utils/validators';
import { Navigate } from 'react-router-dom';

const isAdmin = true
const AdminLogin = () => {
    const secretKey = useInputValidation('')

    const handleLogin = (e) => {
        e.preventDefault()
        // Handle login or signup logic here
        console.log('Form submitted')
    }
    if (isAdmin) return <Navigate to={'/admin/dashboard'} />

    return (
        <div>
            <Container component={'main'} maxWidth={'xs'} sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: 3
                    }}
                >

                    <>
                        <Typography variant='h5'>Login</Typography>
                        <form onSubmit={handleLogin}>
                            <TextField fullWidth size='small' label='Secret Key' variant='outlined' type='text' margin='normal' />
                            <Button fullWidth variant='contained' type='submit' color='primary' sx={{ marginTop: '1rem' }}>Login</Button>

                        </form>
                    </>


                </Paper>
            </Container>
        </div>
    )
}

export default AdminLogin
