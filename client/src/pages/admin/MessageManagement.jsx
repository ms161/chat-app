import React, { useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import { useEffect } from 'react'
import { adminDashboardData } from '../../constants/sampleData'
import { fileFormat, transformImage } from '../../lib/features'
import { Avatar, Box, Stack } from '@mui/material'
import moment from 'moment'
import RenderAttachment from '../../components/shared/RenderAttachment'
const columns = [
  {
    field: 'id',
    headerName: "ID",
    headerClassName: 'table-header',
    width: 200
  },
  {
    field: 'attachments',
    headerName: "Attachments",
    headerClassName: 'table-header',
    width: 200,
    renderCell: (params) => {
      const { attachements } = params.row
      console.log(params.row)
      return attachements?.length > 0 ? attachements.map((i) => {
        const url = i.url
        const file = fileFormat(url)
        return <Box key={url}>
          <a href={url} download={true} target='_blank' style={{ color: 'black' }}>{RenderAttachment(file, url)}</a>
        </Box>
      }
      )
        : "No Attachments"
     
    }
  },
  {
    field: 'content',
    headerName: "Content",
    headerClassName: 'table-header',
    width: 400
  },
  {
    field: 'sender',
    headerName: "Sent By",
    headerClassName: 'table-header',
    width: 200,
    renderCell: (params) => (
      <Stack>
        <Avatar alt={params.row.name} src={params.row.avatar} />
        <span>{params.row.sender.name}</span>
      </Stack>
    )
  },
  {
    field: 'chat',
    headerName: "Chat",
    headerClassName: 'table-header',
    width: 200
  },
  {
    field: 'groupChat',
    headerName: "Groups Chat",
    headerClassName: 'table-header',
    width: 200
  },
  {
    field: 'createdAt',
    headerName: "Time",
    headerClassName: 'table-header',
    width: 250
  },

]

const MessageManagement = () => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    setRows(adminDashboardData.messages.map((i) => (
      {
        ...i,
        id: i._id,
        sender: {
          name: i.sender.name,
          avatar: transformImage(i.sender.avatar, 50)
        },
        createdAt: moment(i.createdAt).format('MMMM Do YYYY, h:mm:ss a')
      }
    )))
  }, [])

  return (
    <AdminLayout>
      <Table heading={'All Messages'} rows={rows} columns={columns} rowHeight={200} />
    </AdminLayout>
  )
}

export default MessageManagement
