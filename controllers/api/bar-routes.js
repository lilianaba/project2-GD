// select avg(rating) rating
//  from post 
//  where bar_id = selected_bar_id 
//  group by bar_id

// const express = require('express');
// const mysql = require('mysql2');

// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// //connect to database
// const bd = mysql.createConnection(
//     {
//         host:'localhost',
//         user: 'root',
//         password: '',
//         database: "tipsy_db"
//     },
//     console.log(`connected to tipsy_db`)
// );

// //get bar rating
// app.get('/api/bar/:id',(req,res)=>{
//     const sql = `select avg(rating) rating from post where bar_id = ? group by bar_id`;
//     db.query(sql,(err,rows)=>{
//         if(err) {
//             res.status(500).json({error:err.message});
//             return;
//         }
//         res.json({
//             message:'success',
//             data:rows
//         });
//     });
// });

const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Bar, Post, Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const barData = await Bar.findAll({
      include: [{ model: Post }],
      attributes: { 
        include: [
          [
            // Use plain SQL to add up the total mileage
            sequelize.literal(
              '(select avg(rating) from post where post.bar_id = bar.id)'
            ),
            'ratingAvg',
          ],
        ],
      },
    });
    console.log(barData);
    res.status(200).json(barData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/:id', async (req, res) => {
//     try {
//       const barData = await Bar.findByPk(req.params.id, {
//         include: [{ model: Post }],
//       });
//       console.log(barData);
//       res.status(200).json(barData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

// // GET a single driver
// router.get('/:id', async (req, res) => {
//   try {
//     const driverData = await Driver.findByPk(req.params.id, {
//       include: [{ model: License }, { model: Car }],
//       attributes: {
//         include: [
//           [
//             // Use plain SQL to add up the total mileage
//             sequelize.literal(
//               '(SELECT SUM(mileage) FROM car WHERE car.driver_id = driver.id)'
//             ),
//             'totalMileage',
//           ],
//         ],
//       },
//     });

//     if (!driverData) {
//       res.status(404).json({ message: 'No driver found with that id!' });
//       return;
//     }

//     res.status(200).json(driverData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
