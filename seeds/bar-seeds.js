const { Bar } = require('../models')

const barData = [
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

const seedBars = () => Bar.bulkCreate(barData);

module.exports = seedBars; 
