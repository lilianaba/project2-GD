const { User } = require('../models');

const userData = [
    {
        username: 'sammy1234rules',
        email: 'sammyrules@gmail.com',
        password: 'password123',
        age: '19'
    },
    {
        username: 'tom_warner23',
        email: 'tom_warner@gmail.com',
        password: 'password321',
        age: '22'
    },
    {
        username: 'james77guy',
        email: 'jamesguy@gmail.com',
        password: 'password456',
        age: '60'
    },
    {
        username: 'pruduce89_1',
        email: 'pruduce@gmail.com',
        password: 'password789',
        age: '23'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;