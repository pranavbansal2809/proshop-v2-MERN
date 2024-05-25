import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Pranav Bansal',
        email: 'praban@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Pranav',
        email: 'pra123@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    
]