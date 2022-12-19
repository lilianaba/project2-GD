const { Bar } = require('../models')

const barData = [
{
    name: "1000 Island",
    address: "15 Solomon St, Adelaide SA 5000",
    img_url: "/media/bar1.jpeg"
},
{
    name: "Hains & Co",
    address: "23 Gilbert Pl, Adelaide SA 5000",
    img_url: "/media/bar2.jpg"
},
{
    name: "NOLA",
    address: "28 Vardon Ave, Adelaide SA 5000",
    img_url: "/media/bar3.jpg"
},
{
    name: "Pink Moon Saloon",
    address: "21 Leigh St, Adelaide SA 5000",
    img_url: "/media/bar4.jpg"
},
{
    name: "The Sorcerer's Bar",
    address: "25B Bank St, Adelaide SA 5000",
    img_url: "/media/bar5.jpg"
},
{
    name: "Bank Street Social",
    address: "48 Hindley St, Adelaide SA 5000",
    img_url: "/media/bar6.jpg"
}
]

const seedBars = () => Bar.bulkCreate(barData);

module.exports = seedBars; 
