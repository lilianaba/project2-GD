const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const path = require('path');
// const helpers =require('./utils/helper')
const sequelize = require('./config/connection.js');


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ 
  // helpers 
});

app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
