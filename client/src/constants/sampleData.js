export const sampleChats = [
    {
        avatar: '',
        name: 'User 1',
        _id: '1',
        groupChat: false,
        sameSender: false,
        isOnline: false,
        members: [1, 2],
        avatar: [1, 2, 3]
    },
    {
        avatar: '',
        name: 'User 2',
        _id: '2',
        groupChat: false,
        sameSender: false,
        isOnline: false,
        members: [1, 2],
        avatar: [1]
    },
    {
        avatar: '',
        name: 'User 2',
        _id: '2',
        groupChat: false,
        sameSender: false,
        isOnline: false,
        members: [1, 2],
        avatar: [1]
    },
    {
        avatar: '',
        name: 'User 2',
        _id: '2',
        groupChat: false,
        sameSender: false,
        isOnline: false,
        members: [1, 2],
        avatar: [1]
    },
    {
        avatar: '',
        name: 'User 2',
        _id: '2',
        groupChat: false,
        sameSender: false,
        isOnline: false,
        members: [1, 2],
        avatar: [1]
    },
    {
        avatar: '',
        name: 'User 2',
        _id: '2',
        groupChat: false,
        sameSender: false,
        isOnline: false,
        members: [1, 2],
        avatar: [1]
    },
    {
        avatar: '',
        name: 'User 2',
        _id: '2',
        groupChat: false,
        sameSender: false,
        isOnline: false,
        members: [1, 2],
        avatar: [1]
    },
    {
        avatar: '',
        name: 'User 2',
        _id: '2',
        groupChat: false,
        sameSender: false,
        isOnline: false,
        members: [1, 2],
        avatar: [1]
    },
    {
        avatar: '',
        name: 'User 2',
        _id: '2',
        groupChat: false,
        sameSender: false,
        isOnline: false,
        members: [1, 2],
        avatar: [1]
    },
    {
        avatar: '',
        name: 'User 2',
        _id: '2',
        groupChat: false,
        sameSender: false,
        isOnline: false,
        members: [1, 2],
        avatar: [1]
    },
    {
        avatar: '',
        name: 'User 2',
        _id: '2',
        groupChat: false,
        sameSender: false,
        isOnline: false,
        members: [1, 2],
        avatar: [1]
    },
    {
        avatar: '',
        name: 'User 2',
        _id: '2',
        groupChat: false,
        sameSender: false,
        isOnline: false,
        members: [1, 2],
        avatar: [1]
    },
    {
        avatar: '',
        name: 'User 2',
        _id: '2',
        groupChat: false,
        sameSender: false,
        isOnline: false,
        members: [1, 2],
        avatar: [1]
    },
    {
        avatar: '',
        name: 'User 3',
        _id: '3',
        groupChat: false,
        sameSender: false,
        isOnline: false,
        members: [1, 2],
        avatar: [1]
    },
]


export const sampleUsers = [
    { name: 'user1', _id: 1 },
    { name: 'user2', _id: 2 },
    { name: 'user3', _id: 3 },
    { name: 'user4', _id: 4 },
    { name: 'user5', _id: 5 },
]
export const sampleNotifications = [
    {
        sender: {
            avatar: '',
            name: 'user1',
        },
        _Id: '1',
    }
]

export const sampleMessage = [
    {
        attachements: [
            {
                public_Id: 'fajdo123',
                url: 'url'
            }
        ],
        content: 'hello',
        _id: 'fohsadofhaosdf',
        sender: {
            _id: '13123',
            name: 'chaman'
        },
        chat: 'chatid',
        createdAt: '2023-01-01'
    },
    {
        attachements: [
            {
                public_Id: 'fajdo123',
                url: 'https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg'
            }
        ],
        content: '',
        _id: 'fohsadofhaosdf',
        sender: {
            _id: '1',
            name: 'chaman'
        },
        chat: 'chatid',
        createdAt: '2023-01-01'
    },
]

export const adminDashboardData = {
    users: [
        {
            name: 'john doe',
            avatar: '',
            _id: '1',
            username: 'johndoe',
            friends: 20,
            groups: 5
        },
        {
            name: 'john doe',
            avatar: '',
            _id: '2',
            username: 'johndoe',
            friends: 20,
            groups: 5
        },
    ],
    chats: [
        {
            name: 'john doe',
            avatar: '',
            _id: '1',
            groupChat: 'johndoe',
            members: [
                { _id: '1312', avatar: 'https://www.w3schools.com/howto/img_avatar.png' },
                { _id: '131411131', avatar: 'https://www.w3schools.com/howto/img_avatar.png' }],
            totalMembers: 20,
            totalMessages: 20,
            creator: {
                name: 'johndoe',
                avatar: 'https://www.w3schools.com/howto/img_avatar.png'
            }
        },
        {
            name: 'john doe',
            avatar: '',
            _id: '2',
            groupChat: 'johndoe',
            members: [
                { _id: '232', avatar: 'https://www.w3schools.com/howto/img_avatar.png' },
                { _id: '1312', avatar: 'https://www.w3schools.com/howto/img_avatar.png' }],
            totalMembers: 20,
            totalMessages: 20,

            creator: {
                name: 'johndoe',
                avatar: 'https://www.w3schools.com/howto/img_avatar.png'
            }
        },
    ],
    messages:[
        {
            attachements: [
                {
                    public_Id: 'fajdo123',
                    url: 'https://www.w3schools.com/howto/img_avatar.png'
                }
            ],
            content: 'hello',
            _id: 'fohsad21321ofhaosdf',
            sender: {
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                name: 'chaman'
            },
            chat: 'chatid',
            groupChat:false,
            createdAt: '2023-01-01'
        },
        {
            attachements: [],
            content: 'hello',
            _id: 'fohsadofhaosdf',
            sender: {
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                name: 'chaman'
            },
            chat: 'chatid',
            groupChat:true,
            createdAt: '2023-01-01'
        },
    ]

}