// select avg(rating) rating
//  from post 
//  where bar_id = selected_bar_id 
//  group by bar_id

const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//connect to database
const bd = mysql.createConnection(
    {
        host:'localhost',
        user: 'root',
        password: '',
        database: "tipsy_db"
    },
    console.log(`connected to tipsy_db`);
);

//get bar rating
app.get('/api/bar/:id',(req,res)=>{
    const sql = `select avg(rating) rating from post where bar_id = ? group by bar_id`;
    db.query(sql,(err,rows)=>{
        if(err) {
            res.status(500).json({error:err.message});
            return;
        }
        res.json({
            message:'success',
            data:rows
        });
    });
});