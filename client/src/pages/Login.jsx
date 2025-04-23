import React, { useState } from 'react'
import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import { useFileHandler, useInputValidation } from '6pp';
import { usernameValidator } from '../utils/validators';
const Login = () => {
    const [isLogin, setIsLogin] = useState(true)

    const name = useInputValidation('')
    const bio = useInputValidation('')
    const username = useInputValidation('', usernameValidator)
    const password = useInputValidation('')
    const avatar = useFileHandler('single')
    console.log(username)
    const toggleLogin = () => {
        setIsLogin((prev) => !prev)
    }

    const handleSignup = (e) => {
        e.preventDefault()
        // Handle login or signup logic here
        console.log('Form submitted')
    }
    const handleLogin = (e) => {
        e.preventDefault()
        // Handle login or signup logic here
        console.log('Form submitted')
    }

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
                    {isLogin ? (
                        <>
                            <Typography variant='h5'>Login</Typography>
                            <form onSubmit={handleLogin}>
                                <TextField fullWidth size='small' label='Username' variant='outlined' type='text' margin='normal' />
                                <TextField fullWidth size='small' label='Password' variant='outlined' type='password' margin='normal' />
                                <Button fullWidth variant='contained' type='submit' color='primary' sx={{ marginTop: '1rem' }}>Login</Button>
                                <br />
                                <Button type='button' fullWidth onClick={toggleLogin} variant='contained' color='secondary' sx={{ marginTop: '1rem' }}>Sign Up instead</Button>
                            </form>
                        </>
                    ) : (
                        <>
                            <Typography variant='h5'>Sign Up</Typography>
                            <form onSubmit={handleSignup}>
                                <Stack sx={{ position: 'relative', width: '10rem', margin: 'auto' }} >
                                    <Avatar src={avatar.preview} sx={{ width: '10rem', height: '10rem', objectFit: 'contain' }}></Avatar>
                                    <IconButton
                                        sx={{
                                            position: 'absolute',
                                            bottom: '0%', right: '0%',
                                            color: 'white',
                                            bgcolor: 'rgba(0,0,0,0.5)',
                                            ":hover": { bgcolor: "rgba(0,0,0,0.8)" }
                                        }}
                                        component="label"
                                    >
                                        <>
                                            <CameraAltIcon />
                                            <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                                        </>

                                    </IconButton>
                                </Stack>
                                {
                                    avatar.error && <Typography variant='caption' color='error'>{avatar.error}</Typography>
                                }
                                <TextField value={name.value} onChange={name.changeHandler} fullWidth size='small' label='Name' variant='outlined' type='text' margin='normal' />
                                <TextField value={bio.value} onChange={bio.changeHandler} fullWidth size='small' label='Bio' variant='outlined' type='text' margin='normal' />
                                <TextField value={username.value} onChange={username.changeHandler} fullWidth size='small' label='Username' variant='outlined' type='text' margin='normal' />
                                {
                                    username.error && <Typography variant='caption' color='error'>{username.error}</Typography>
                                }

                                <TextField value={password.value} onChange={password.changeHandler} fullWidth size='small' label='Password' variant='outlined' type='password' margin='normal' />
                                <Button fullWidth variant='contained' type='submit' color='primary' sx={{ marginTop: '1rem' }}>Sign Up</Button>
                                <br />
                                <Button type='button' fullWidth onClick={toggleLogin} variant='contained' color='secondary' sx={{ marginTop: '1rem' }}>Login instead</Button>
                            </form>
                        </>
                    )}
                </Paper>
            </Container>
        </div>
    )
}

export default Login
