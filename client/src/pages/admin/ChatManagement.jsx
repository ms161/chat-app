import React, { useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import { Avatar, Stack } from '@mui/material'
import { useEffect } from 'react'
import { adminDashboardData } from '../../constants/sampleData'
import { transformImage } from '../../lib/features'
import AvatarCard from '../../components/shared/AvatarCard'

const columns = [
  {
    field: 'id',
    headerName: "ID",
    headerClassName: 'table-header',
    width: 200,


  },
  {
    field: 'avatar',
    headerName: "Avatar",
    headerClassName: 'table-header',
    width: 150,
    renderCell: (params) => <Avatar alt={params.row.name} src={params.row.avatar} />
  },
  {
    field: 'name',
    headerName: "Name",
    headerClassName: 'table-header',
    width: 200
  },
  {
    field: 'totalMembers',
    headerName: "Total Members",
    headerClassName: 'table-header',
    width: 120,
  },
  {
    field: 'members',
    headerName: "Members",
    headerClassName: 'table-header',
    width: 400,
    renderCell: (params) => {
      return <AvatarCard max={40} avatar={params.row.members} />
    },

  },
  {
    field: 'totalMessages',
    headerName: "Total Messages",
    headerClassName: 'table-header',
    width: 200
  },
  {
    field: 'creator',
    headerName: "Created By",
    headerClassName: 'table-header',
    width: 200,
    renderCell: (params) => (
      <Stack direction={'row'} alignItems={'center'} spacing={'2rem'}>
        <Avatar alt={params.row.name} src={params.row.creator.avatar} />
        <span>
          {params.row.creator.name}
        </span>
      </Stack>

    )
  },

]
const ChatManagement = () => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    setRows(adminDashboardData.chats.map((i) => (
      {
        ...i,
        id: i._id,
        members: i.members.map(({ avatar }) => avatar),
        creator: { ...i.creator, avatar: transformImage(i.creator.avatar, 50) },
      }
    )))
  }, [])

  return (
    <AdminLayout>
      <Table rows={rows} columns={columns} heading={'All Chats'} />
    </AdminLayout>
  )
}



export default ChatManagement
