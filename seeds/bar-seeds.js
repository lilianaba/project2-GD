const { User } = require('../models')

const userData = [
{
    name: "1000 Island",
    address: "15 Solomon St, Adelaide SA 5000",
},
{
    name: "Hains & Co",
    address: "23 Gilbert Pl, Adelaide SA 5000",
},
{
    name: "NOLA",
    address: "28 Vardon Ave, Adelaide SA 5000",
}
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers; 
