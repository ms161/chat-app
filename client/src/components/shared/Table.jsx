import React from 'react'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import {DataGrid} from '@mui/x-data-grid';

const Table = ({ rows, columns, heading, rowHeight = 50 }) => {
    return (
        <Container sx={{ height: '98vh', display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'.5rem' }}>
            <Paper
            elevation={3}
            sx={{
                padding: '1rem 4rem',
                borderRadius: '1rem',
                margin:'auto',
                width:'100%',
                height:'100%',
                overflow:'hidden',
                boxShadow:'none'
            }}
            >
                <Typography textTransform={'uppercase' } textAlign={'center'} variant='h5'>{heading}</Typography>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    rowHeight={rowHeight}
                    style={{ height: '80%' }}
                    sx={{ border: 'none','.table-header':{bgcolor:'rgba(0,0,0,0.9)',color:'white'} }}
                />
            </Paper>
        </Container>
    )
}

export default Table
